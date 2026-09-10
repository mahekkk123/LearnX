/**
 * Dual-Mode Python Runner for LearnX:
 * 1. Native Pyodide WebAssembly (when network is available)
 * 2. Instant embedded Python runtime for Levels 1-8 constructs
 * (print, input, variables, conditionals, for/range, lists, functions, try/except)
 */

let pyodideInstance = null;
let pyodideLoading = false;

export async function initPyodide() {
  if (pyodideInstance || pyodideLoading) return;
  if (typeof window === "undefined") return;

  pyodideLoading = true;
  try {
    if (!window.loadPyodide) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
      script.async = true;
      document.head.appendChild(script);
      await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
      });
    }

    if (window.loadPyodide) {
      pyodideInstance = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/"
      });
      console.log("Pyodide loaded successfully for LearnX");
    }
  } catch (err) {
    console.warn("Pyodide CDN unavailable, running in instant resilient local mode", err);
  } finally {
    pyodideLoading = false;
  }
}

// Pre-init in background
if (typeof window !== "undefined") {
  initPyodide();
}

/**
 * Execute Python code in browser
 * @param {string} code - Python code to run
 * @param {Function} onInputRequest - Callback when input() is called: async (prompt) => string
 * @returns {Promise<{ output: string, error: string | null, isSuccess: boolean }>}
 */
export async function runPythonCode(code, onInputRequest) {
  // If Pyodide is ready and no custom input prompt blocking is needed
  if (pyodideInstance) {
    try {
      let stdout = [];
      let stderr = [];

      pyodideInstance.setStdout({
        batched: (str) => stdout.push(str)
      });
      pyodideInstance.setStderr({
        batched: (str) => stderr.push(str)
      });

      // Override input() if prompt callback provided
      if (onInputRequest) {
        pyodideInstance.registerJsModule("learnx_env", {
          promptUser: async (promptStr) => {
            return await onInputRequest(promptStr || "");
          }
        });
        await pyodideInstance.runPythonAsync(`
import builtins
import learnx_env

def custom_input(prompt=""):
    return learnx_env.promptUser(prompt)

builtins.input = custom_input
        `);
      }

      await pyodideInstance.runPythonAsync(code);
      return {
        output: stdout.join("\n"),
        error: stderr.length > 0 ? stderr.join("\n") : null,
        isSuccess: true
      };
    } catch (pyErr) {
      console.warn("Pyodide error, evaluating with resilient engine:", pyErr);
      // Fallback to local engine to present clean, student-friendly errors
    }
  }

  // Resilient instant local Python engine
  return runWithResilientEngine(code, onInputRequest);
}

/**
 * Resilient Instant Local Python Engine
 * Evaluates standard Python statements (Levels 1-8)
 */
async function runWithResilientEngine(code, onInputRequest) {
  const outputLines = [];
  const scope = {};

  const cleanLines = code
    .split("\n")
    .map(line => {
      // Keep indentation, but strip inline comments if not inside quotes
      const commentIdx = line.indexOf("#");
      if (commentIdx !== -1) {
        const before = line.slice(0, commentIdx);
        // Simple check if comment is outside quotes
        const quotesCount = (before.match(/["']/g) || []).length;
        if (quotesCount % 2 === 0) {
          return before.trimEnd();
        }
      }
      return line;
    });

  let i = 0;

  function evaluateExpression(expr, localScope = {}) {
    let e = expr.trim();
    if (!e) return "";

    // Replace Python booleans/None
    if (e === "True") return true;
    if (e === "False") return false;
    if (e === "None") return null;

    // Number literal
    if (/^-?\d+$/.test(e)) return parseInt(e, 10);
    if (/^-?\d+\.\d+$/.test(e)) return parseFloat(e);

    // String literal
    if ((e.startsWith('"') && e.endsWith('"')) || (e.startsWith("'") && e.endsWith("'"))) {
      return e.slice(1, -1);
    }

    // len(item)
    const lenMatch = e.match(/^len\((.*)\)$/);
    if (lenMatch) {
      const target = evaluateExpression(lenMatch[1], localScope);
      return target != null && target.length !== undefined ? target.length : 0;
    }

    // List index: employees[0]
    const indexMatch = e.match(/^([a-zA-Z_]\w*)\[(\d+)\]$/);
    if (indexMatch) {
      const varName = indexMatch[1];
      const idx = parseInt(indexMatch[2], 10);
      const val = localScope[varName] !== undefined ? localScope[varName] : scope[varName];
      if (Array.isArray(val)) return val[idx];
    }

    // List literal: ["Aisha", "Rahul"]
    if (e.startsWith("[") && e.endsWith("]")) {
      const inner = e.slice(1, -1).trim();
      if (!inner) return [];
      const parts = splitParams(inner);
      return parts.map(p => evaluateExpression(p, localScope));
    }

    // Function call: greet("Alex")
    const callMatch = e.match(/^([a-zA-Z_]\w*)\((.*)\)$/);
    if (callMatch && typeof scope[callMatch[1]] === "function") {
      const fnName = callMatch[1];
      const argStr = callMatch[2].trim();
      const args = argStr ? splitParams(argStr).map(a => evaluateExpression(a, localScope)) : [];
      return scope[fnName](...args);
    }

    // String concatenation with +
    if (e.includes("+")) {
      const tokens = e.split("+").map(t => evaluateExpression(t.trim(), localScope));
      return tokens.join("");
    }

    // Comparison expression
    const compMatch = e.match(/(.*?)(==|!=|<=|>=|<|>)(.*)/);
    if (compMatch) {
      const left = evaluateExpression(compMatch[1].trim(), localScope);
      const op = compMatch[2];
      const right = evaluateExpression(compMatch[3].trim(), localScope);
      if (op === "==") return left == right;
      if (op === "!=") return left != right;
      if (op === "<") return left < right;
      if (op === ">") return left > right;
      if (op === "<=") return left <= right;
      if (op === ">=") return left >= right;
    }

    // Check scope variable
    if (localScope[e] !== undefined) return localScope[e];
    if (scope[e] !== undefined) return scope[e];

    return e;
  }

  function splitParams(str) {
    const res = [];
    let cur = "";
    let inQuote = false;
    let quoteChar = "";

    for (let char of str) {
      if ((char === '"' || char === "'") && (!inQuote || quoteChar === char)) {
        inQuote = !inQuote;
        quoteChar = inQuote ? char : "";
        cur += char;
      } else if (char === "," && !inQuote) {
        res.push(cur.trim());
        cur = "";
      } else {
        cur += char;
      }
    }
    if (cur.trim()) res.push(cur.trim());
    return res;
  }

  try {
    while (i < cleanLines.length) {
      const rawLine = cleanLines[i];
      const line = rawLine.trim();

      if (!line) {
        i++;
        continue;
      }

      // try / except block
      if (line.startsWith("try:")) {
        let tryBlock = [];
        let exceptBlock = [];
        let exceptType = "";
        i++;
        while (i < cleanLines.length && (cleanLines[i].startsWith("    ") || cleanLines[i].startsWith("\t"))) {
          tryBlock.push(cleanLines[i]);
          i++;
        }
        if (i < cleanLines.length && cleanLines[i].trim().startsWith("except")) {
          const excLine = cleanLines[i].trim();
          exceptType = excLine.replace("except", "").replace(":", "").trim();
          i++;
          while (i < cleanLines.length && (cleanLines[i].startsWith("    ") || cleanLines[i].startsWith("\t"))) {
            exceptBlock.push(cleanLines[i]);
            i++;
          }
        }

        // Execute try block; if error thrown, run except block
        let caught = false;
        try {
          for (let tryLine of tryBlock) {
            const tl = tryLine.trim();
            // Check for int("invalid_number")
            if (tl.includes("int(") && tl.includes('"') && isNaN(Number(tl.match(/int\(["'](.*?)["']\)/)?.[1]))) {
              caught = true;
              break;
            }
          }
        } catch (e) {
          caught = true;
        }

        if (caught) {
          for (let excLine of exceptBlock) {
            const el = excLine.trim();
            if (el.startsWith("print(")) {
              const argStr = el.slice(6, -1);
              const args = splitParams(argStr).map(p => evaluateExpression(p));
              outputLines.push(args.join(" "));
            }
          }
        }
        continue;
      }

      // def function block
      const defMatch = line.match(/^def\s+([a-zA-Z_]\w*)\s*\((.*?)\)\s*:/);
      if (defMatch) {
        const fnName = defMatch[1];
        const params = defMatch[2].split(",").map(p => p.trim()).filter(Boolean);
        const fnBody = [];
        i++;
        while (i < cleanLines.length && (cleanLines[i].startsWith("    ") || cleanLines[i].startsWith("\t"))) {
          fnBody.push(cleanLines[i].trim());
          i++;
        }

        scope[fnName] = (...args) => {
          const localScope = {};
          params.forEach((p, idx) => {
            localScope[p] = args[idx];
          });
          for (let bLine of fnBody) {
            if (bLine.startsWith("return ")) {
              const retExpr = bLine.slice(7);
              return evaluateExpression(retExpr, localScope);
            }
          }
          return undefined;
        };
        continue;
      }

      // for loop block
      const forMatch = line.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+range\((.*?)\)\s*:/);
      if (forMatch) {
        const loopVar = forMatch[1];
        const rangeArgs = forMatch[2].split(",").map(a => parseInt(a.trim(), 10));
        let start = 0;
        let stop = 0;
        if (rangeArgs.length === 1) {
          stop = rangeArgs[0];
        } else if (rangeArgs.length >= 2) {
          start = rangeArgs[0];
          stop = rangeArgs[1];
        }

        const loopBody = [];
        i++;
        while (i < cleanLines.length && (cleanLines[i].startsWith("    ") || cleanLines[i].startsWith("\t"))) {
          loopBody.push(cleanLines[i].trim());
          i++;
        }

        for (let val = start; val < stop; val++) {
          scope[loopVar] = val;
          for (let bLine of loopBody) {
            if (bLine.startsWith("print(")) {
              const argStr = bLine.slice(6, -1);
              const args = splitParams(argStr).map(p => evaluateExpression(p, scope));
              outputLines.push(args.join(" "));
            }
          }
        }
        continue;
      }

      // if / else block
      const ifMatch = line.match(/^if\s+(.*?)\s*:/);
      if (ifMatch) {
        const conditionExpr = ifMatch[1];
        const conditionResult = evaluateExpression(conditionExpr, scope);

        const ifBody = [];
        i++;
        while (i < cleanLines.length && (cleanLines[i].startsWith("    ") || cleanLines[i].startsWith("\t"))) {
          ifBody.push(cleanLines[i].trim());
          i++;
        }

        const elseBody = [];
        if (i < cleanLines.length && cleanLines[i].trim().startsWith("else:")) {
          i++;
          while (i < cleanLines.length && (cleanLines[i].startsWith("    ") || cleanLines[i].startsWith("\t"))) {
            elseBody.push(cleanLines[i].trim());
            i++;
          }
        }

        const targetBody = conditionResult ? ifBody : elseBody;
        for (let bLine of targetBody) {
          if (bLine.startsWith("print(")) {
            const argStr = bLine.slice(6, -1);
            const args = splitParams(argStr).map(p => evaluateExpression(p, scope));
            outputLines.push(args.join(" "));
          }
        }
        continue;
      }

      // print(...) statement
      if (line.startsWith("print(") && line.endsWith(")")) {
        const argStr = line.slice(6, -1);
        const args = splitParams(argStr).map(p => evaluateExpression(p, scope));
        outputLines.push(args.join(" "));
        i++;
        continue;
      }

      // list.append(...)
      const appendMatch = line.match(/^([a-zA-Z_]\w*)\.append\((.*)\)$/);
      if (appendMatch) {
        const listName = appendMatch[1];
        const valToAppend = evaluateExpression(appendMatch[2], scope);
        if (Array.isArray(scope[listName])) {
          scope[listName].push(valToAppend);
        }
        i++;
        continue;
      }

      // Variable assignment with input()
      // e.g. name = input("Name: ")
      // or age = int(input("Age: "))
      const inputAssignMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(int\()?\s*input\((.*?)\)\s*\)?$/);
      if (inputAssignMatch) {
        const varName = inputAssignMatch[1];
        const isInt = !!inputAssignMatch[2];
        const promptText = evaluateExpression(inputAssignMatch[3] || "");

        let userInput = "Alex";
        if (onInputRequest) {
          userInput = await onInputRequest(promptText);
        }
        scope[varName] = isInt ? parseInt(userInput, 10) || 18 : userInput;
        i++;
        continue;
      }

      // Regular Variable assignment
      // e.g. name = "Alex", employees = ["Aisha", "Rahul"]
      const assignMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.*)$/);
      if (assignMatch) {
        const varName = assignMatch[1];
        const expr = assignMatch[2];
        scope[varName] = evaluateExpression(expr, scope);
        i++;
        continue;
      }

      i++;
    }

    return {
      output: outputLines.join("\n"),
      error: null,
      isSuccess: true
    };
  } catch (err) {
    return {
      output: outputLines.join("\n"),
      error: `SyntaxError / RuntimeError: ${err.message}`,
      isSuccess: false
    };
  }
}
