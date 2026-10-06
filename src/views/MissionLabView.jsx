import React, { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  Play,
  CheckCircle2,
  RotateCcw,
  Lightbulb,
  HelpCircle,
  Terminal as TerminalIcon,
  Zap,
  Award,
  Brain,
  Sparkles,
  AlertCircle,
  BookOpen,
  Gamepad2,
  Code2,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { useGameState } from "../context/GameStateContext";
import { LEVELS_DATA } from "../data/curriculum";
import { runPythonCode } from "../utils/pythonRunner";
import { soundEngine } from "../utils/audio";
import { NovaMascot } from "../components/BiomeVectorArt";
import { CelebrationModal } from "../components/CelebrationModal";
import { BiomeMiniGame } from "../components/BiomeInteractiveGames";

export function MissionLabView() {
  const {
    currentMissionId,
    navigateTo,
    completeMission,
    completedMissions,
    badges
  } = useGameState();

  const mission = LEVELS_DATA.find((m) => m.level === currentMissionId) || LEVELS_DATA[0];

  const [activeSubLevel, setActiveSubLevel] = useState(2); // Default to coding challenge
  const [code, setCode] = useState(mission.codeTemplate);
  const [terminalOutput, setTerminalOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [terminalError, setTerminalError] = useState(null);
  const [revealedHints, setRevealedHints] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [validationStatus, setValidationStatus] = useState(null); // "success" | "mismatch" | null
  const [validationDiff, setValidationDiff] = useState(null);
  const [interactiveInputPrompt, setInteractiveInputPrompt] = useState(null);
  const [userInputVal, setUserInputVal] = useState("");
  const inputResolverRef = useRef(null);

  // Update starter code when mission changes
  useEffect(() => {
    setCode(mission.codeTemplate);
    setTerminalOutput("");
    setTerminalError(null);
    setRevealedHints(0);
    setValidationStatus(null);
    setValidationDiff(null);
    setInteractiveInputPrompt(null);
    setActiveSubLevel(2);
  }, [mission.level]);

  // Support interactive input() in Python
  const handleInputRequest = (promptText) => {
    return new Promise((resolve) => {
      setInteractiveInputPrompt(promptText || "Enter input: ");
      inputResolverRef.current = resolve;
    });
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (inputResolverRef.current) {
      const val = userInputVal.trim() || "Alex";
      setTerminalOutput((prev) => `${prev}${interactiveInputPrompt}${val}\n`);
      inputResolverRef.current(val);
      inputResolverRef.current = null;
      setInteractiveInputPrompt(null);
      setUserInputVal("");
    }
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setTerminalError(null);
    setTerminalOutput("");
    setValidationStatus(null);
    setValidationDiff(null);
    soundEngine.playClick();

    try {
      const res = await runPythonCode(code, handleInputRequest);
      setTerminalOutput(res.output);
      if (res.error) {
        setTerminalError(res.error);
        soundEngine.playIncorrect();
      }
    } catch (err) {
      setTerminalError(err.message);
      soundEngine.playIncorrect();
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmitSolution = async () => {
    setIsRunning(true);
    setTerminalError(null);
    setValidationStatus(null);
    setValidationDiff(null);
    soundEngine.playClick();

    try {
      // Auto-respond with "Alex" and "18" for input() tests to cross-check standard output
      const res = await runPythonCode(code, async (prompt) => {
        if (prompt.toLowerCase().includes("age")) return "18";
        return "Alex";
      });

      setTerminalOutput(res.output);
      if (res.error) {
        setTerminalError(res.error);
        setValidationStatus("mismatch");
        setValidationDiff({ actual: res.error, expected: mission.expectedOutput });
        soundEngine.playIncorrect();
        return;
      }

      // Check if output matches expectedOutput (clean trimmed string match)
      const cleanActual = res.output.trim().replace(/\r\n/g, "\n");
      const cleanExpected = mission.expectedOutput.trim().replace(/\r\n/g, "\n");

      const isMatch = cleanActual === cleanExpected || cleanActual.includes(cleanExpected);
      if (isMatch) {
        setValidationStatus("success");
        soundEngine.playVictory();
        completeMission(mission.level, mission.rewardXP, mission.badge);
        setShowCelebration(true);
      } else {
        setValidationStatus("mismatch");
        setValidationDiff({ actual: cleanActual, expected: cleanExpected });
        soundEngine.playIncorrect();
      }
    } catch (err) {
      setTerminalError(err.message);
      setValidationStatus("mismatch");
      setValidationDiff({ actual: err.message, expected: mission.expectedOutput });
      soundEngine.playIncorrect();
    } finally {
      setIsRunning(false);
    }
  };

  const handleRevealNextHint = () => {
    soundEngine.playHint();
    setRevealedHints((prev) => Math.min(mission.hints.length, prev + 1));
  };

  const handleResetCode = () => {
    soundEngine.playClick();
    setCode(mission.codeTemplate);
    setTerminalOutput("");
    setTerminalError(null);
    setValidationStatus(null);
    setValidationDiff(null);
  };

  const isCompleted = completedMissions.includes(mission.level);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-5 animate-fadeIn">
      {/* Top Mission Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#FFFFFF] border border-[#E4ECE4] rounded-3xl px-6 py-4 shadow-soft">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigateTo("quest_map")}
            className="flex items-center gap-1.5 text-xs font-bold text-[#4B6256] hover:text-[#172E26] bg-[#F4F7F4] hover:bg-[#E8EFE9] px-3 py-2 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quest Map</span>
          </button>

          <div className="h-6 w-px bg-[#E4ECE4]" />

          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#2A9D8F] bg-[#E6F5F4] px-2.5 py-0.5 rounded-full">
                {mission.biomeName}
              </span>
              <span className="text-xs font-semibold text-[#8C9C92]">
                Level {mission.level} of 12
              </span>
            </div>
            <h1 className="text-lg font-black text-[#172E26] tracking-tight">
              {mission.title}: {mission.subtitle}
            </h1>
          </div>
        </div>

        {/* Right tags & reset */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#2A6B53] bg-[#EBF5EE] px-3 py-1.5 rounded-xl">
            <Zap className="w-3.5 h-3.5 fill-[#2A6B53]" />
            <span>+{mission.rewardXP} XP</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-[#486355] bg-[#F5F8F5] px-3 py-1.5 rounded-xl border border-[#E2EAE3]">
            <Brain className="w-3.5 h-3.5 text-[#2A6B53]" />
            <span>{mission.bloomsTaxonomy}</span>
          </div>

          <button
            onClick={handleResetCode}
            title="Reset starter template code"
            className="flex items-center gap-1.5 text-xs font-semibold text-[#667E72] hover:text-[#172E26] bg-[#F4F7F4] hover:bg-[#EAEFEA] px-3 py-2 rounded-xl transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* 3 Sub-Levels Progress / Navigation Bar */}
      <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-2xl p-2.5 shadow-soft flex items-center justify-between gap-2 overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {(mission.subLevels || [
            { id: 1, title: "Biome Concept & Game", type: "game" },
            { id: 2, title: "Code Implementation", type: "code" },
            { id: 3, title: "System Mastery", type: "mastery" }
          ]).map((sub) => {
            const isSubActive = activeSubLevel === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => {
                  soundEngine.playClick();
                  setActiveSubLevel(sub.id);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSubActive
                    ? "bg-[#2A6B53] text-white shadow-soft"
                    : "bg-[#F7FAF8] text-[#556F61] hover:bg-[#EDF5F0]"
                }`}
              >
                {sub.type === "game" && <Gamepad2 className="w-3.5 h-3.5" />}
                {sub.type === "code" && <Code2 className="w-3.5 h-3.5" />}
                {sub.type === "mastery" && <ShieldCheck className="w-3.5 h-3.5" />}
                <span>Stage {sub.id}: {sub.title}</span>
              </button>
            );
          })}
        </div>

        <span className="text-[11px] font-semibold text-[#7E9387] hidden lg:block pr-2">
          Sub-level {activeSubLevel} of 3
        </span>
      </div>

      {/* When Sub-level 1 is active: Show Biome Interactive Game */}
      {activeSubLevel === 1 && (
        <div className="space-y-4 animate-fadeIn">
          <BiomeMiniGame
            biomeKey={mission.biomeKey}
            onComplete={() => {
              soundEngine.playVictory();
            }}
          />

          <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-2xl p-5 shadow-soft flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-[#172E26]">Concept Learned!</div>
              <div className="text-[11px] text-[#5D7267]">
                Now proceed to Sub-level 2 to write the Python code that implements this concept.
              </div>
            </div>
            <button
              onClick={() => {
                soundEngine.playClick();
                setActiveSubLevel(2);
              }}
              className="py-2.5 px-5 rounded-xl bg-[#2A6B53] hover:bg-[#205541] text-white font-bold text-xs shadow-soft transition-all flex items-center gap-2"
            >
              <span>Continue to Code Challenge</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* When Sub-level 2 or 3 is active: Show Split Pane Code Lab */}
      {activeSubLevel >= 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT PANE: Mission Briefing (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Story & Lore Card */}
            <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-3xl p-6 shadow-soft space-y-4">
              <div className="flex items-start gap-3.5">
                <NovaMascot size={42} className="flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-[#2A6B53] uppercase mb-0.5">
                    NOVA · System Transmission
                  </div>
                  <p className="text-xs text-[#355143] leading-relaxed italic">
                    “{mission.story}”
                  </p>
                </div>
              </div>
            </div>

            {/* Official Python Doc Teach Card */}
            <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-3xl p-6 shadow-soft space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#172E26]">
                <BookOpen className="w-4 h-4 text-[#2A6B53]" />
                <span>Python Doc Standard: {mission.pythonDocTopic}</span>
              </div>

              <p className="text-xs text-[#526B5F] leading-relaxed">
                {mission.teach}
              </p>
            </div>

            {/* The Challenge Objective Card */}
            <div className="bg-[#FAFDFB] border border-[#D5EADB] rounded-3xl p-6 shadow-soft space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-[#2A6B53] uppercase">
                  {activeSubLevel === 3 ? "Mastery Edge Case Goal" : "Challenge Goal"}
                </span>
                {isCompleted && (
                  <span className="text-[11px] font-bold text-[#2A6B53] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </span>
                )}
              </div>

              <p className="text-xs font-bold text-[#172E26] leading-snug">
                {mission.challenge}
              </p>

              {/* Expected Output Snippet */}
              <div className="space-y-1 pt-2">
                <div className="text-[10px] font-bold tracking-wider text-[#6B8577] uppercase">
                  Required Terminal Output:
                </div>
                <pre className="bg-[#F0F5F1] border border-[#DDE7DF] rounded-xl p-2.5 text-xs font-mono text-[#1E4D3A] overflow-x-auto whitespace-pre-wrap">
                  {mission.expectedOutput}
                </pre>
              </div>
            </div>

            {/* Progressive Hint System */}
            <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-3xl p-6 shadow-soft space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#172E26]">
                  <Lightbulb className="w-4 h-4 text-[#E8A856]" />
                  <span>Need Guidance? ({revealedHints} / {mission.hints.length} revealed)</span>
                </div>

                {revealedHints < mission.hints.length && (
                  <button
                    onClick={handleRevealNextHint}
                    className="text-[11px] font-bold text-[#2A6B53] hover:underline flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3 text-[#E8A856]" />
                    <span>Reveal Hint {revealedHints + 1}</span>
                  </button>
                )}
              </div>

              {revealedHints === 0 ? (
                <p className="text-xs text-[#7B9084] italic">
                  Hints are locked to encourage experimentation. Click reveal if you need a gentle nudge.
                </p>
              ) : (
                <div className="space-y-2">
                  {mission.hints.slice(0, revealedHints).map((hint, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#FFFBEF] border border-[#F6E5B8] text-xs font-medium text-[#7A5B1F] flex items-start gap-2 animate-fadeIn"
                    >
                      <span className="font-bold text-[#A86E18]">💡</span>
                      <span>{hint}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANE: Code Editor & Terminal (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Code Editor Container */}
            <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-3xl p-5 shadow-soft space-y-3">
              <div className="flex items-center justify-between border-b border-[#EDF3ED] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF8080]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFD166]" />
                  <span className="w-3 h-3 rounded-full bg-[#06D6A0]" />
                  <span className="text-xs font-mono font-semibold text-[#5A7063] ml-2">
                    solution.py
                  </span>
                </div>
                <span className="text-[11px] text-[#86998E] font-mono">Python 3.12</span>
              </div>

              {/* Code Editor Textarea with Line Numbers */}
              <div className="flex bg-[#FBFDFB] border border-[#E2EAE2] rounded-2xl overflow-hidden font-mono text-xs">
                <div className="w-10 py-3 bg-[#F4F7F4] border-r border-[#E2EAE2] text-[#9FB3A6] text-right pr-2.5 select-none leading-relaxed">
                  {code.split("\n").map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>

                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Tab") {
                      e.preventDefault();
                      const start = e.target.selectionStart;
                      const end = e.target.selectionEnd;
                      setCode(code.substring(0, start) + "    " + code.substring(end));
                      setTimeout(() => {
                        e.target.selectionStart = e.target.selectionEnd = start + 4;
                      }, 0);
                    }
                  }}
                  spellCheck="false"
                  rows={10}
                  className="w-full p-3 bg-transparent text-[#172E26] focus:outline-none resize-y leading-relaxed font-mono selection:bg-[#CBE4D6]"
                  placeholder="# Write your Python code here..."
                />
              </div>

              {/* Action Buttons Bar */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="py-2.5 px-5 rounded-2xl bg-[#E8F3ED] hover:bg-[#D8EADB] active:scale-[0.98] text-[#2A6B53] font-bold text-xs transition-all flex items-center gap-2 shadow-soft disabled:opacity-60"
                >
                  <Play className="w-3.5 h-3.5 fill-[#2A6B53]" />
                  <span>{isRunning ? "Running..." : "Run Code"}</span>
                </button>

                <button
                  onClick={handleSubmitSolution}
                  disabled={isRunning}
                  className="py-2.5 px-6 rounded-2xl bg-[#2A6B53] hover:bg-[#205541] active:scale-[0.98] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 disabled:opacity-60"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit Solution</span>
                </button>
              </div>
            </div>

            {/* Validation Feedback Banner */}
            {validationStatus === "success" && (
              <div className="p-4 rounded-2xl bg-[#EAF7EE] border border-[#BDE3C8] text-[#1B5738] text-xs font-semibold flex items-center gap-3 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-[#2A6B53] flex-shrink-0" />
                <div>
                  <span className="font-bold">Challenge Completed! </span>
                  Output verified and matches the exact expected output. Sub-level passed!
                </div>
              </div>
            )}

            {validationStatus === "mismatch" && (
              <div className="p-4 rounded-2xl bg-[#FDF2F0] border border-[#F7C6BF] text-[#8C2E21] text-xs font-medium space-y-2 animate-fadeIn">
                <div className="flex items-center gap-2 font-bold">
                  <AlertCircle className="w-4 h-4 text-[#DD4A35]" />
                  <span>Output Mismatch: Answers do not match yet</span>
                </div>
                {validationDiff && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="p-2 rounded bg-white border border-[#F2C2BA]">
                      <div className="font-bold text-[#A83D2D] mb-1">Your Output:</div>
                      <pre className="whitespace-pre-wrap">{validationDiff.actual || "(empty)"}</pre>
                    </div>
                    <div className="p-2 rounded bg-white border border-[#CCE3D3]">
                      <div className="font-bold text-[#2D6A4F] mb-1">Required Output:</div>
                      <pre className="whitespace-pre-wrap">{validationDiff.expected}</pre>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Terminal Console */}
            <div className="bg-[#192B23] border border-[#263D33] rounded-3xl p-5 text-white shadow-soft font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-[#88A696] text-[11px] border-b border-[#253D32] pb-2.5">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-3.5 h-3.5 text-[#52B788]" />
                  <span>NEXA Terminal · Python 3.12</span>
                </div>
                <button
                  onClick={() => {
                    setTerminalOutput("");
                    setTerminalError(null);
                  }}
                  className="hover:text-white transition-colors text-[10px]"
                >
                  Clear
                </button>
              </div>

              {/* Terminal Output Area */}
              <div className="min-h-[120px] max-h-[220px] overflow-y-auto space-y-1 scrollbar-thin">
                {terminalOutput ? (
                  <pre className="text-[#D8EFE3] whitespace-pre-wrap leading-relaxed">
                    {terminalOutput}
                  </pre>
                ) : (
                  <div className="text-[#597566] italic">
                    Run your code or submit to view output in the terminal...
                  </div>
                )}

                {terminalError && (
                  <div className="text-[#FFA494] bg-[#3B1E1A] p-2 rounded-xl border border-[#6B2E24] mt-2">
                    {terminalError}
                  </div>
                )}

                {/* Interactive Input Prompt Bar */}
                {interactiveInputPrompt && (
                  <form onSubmit={handleInputSubmit} className="mt-2 flex items-center gap-2 animate-fadeIn">
                    <span className="text-[#52B788] font-bold">{interactiveInputPrompt}</span>
                    <input
                      type="text"
                      value={userInputVal}
                      onChange={(e) => setUserInputVal(e.target.value)}
                      autoFocus
                      placeholder="Type input and press Enter..."
                      className="flex-1 bg-[#253D32] border border-[#3A5C4D] text-white px-2.5 py-1 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-[#52B788]"
                    />
                    <button
                      type="submit"
                      className="bg-[#52B788] text-[#172E26] px-2.5 py-1 rounded-lg text-xs font-bold hover:bg-[#68CFA1]"
                    >
                      Enter ↵
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Celebratory Victory Modal */}
      <CelebrationModal
        isOpen={showCelebration}
        levelData={mission}
        rewardXP={mission.rewardXP}
        unlockedBadge={mission.badge}
        onNextMission={() => {
          setShowCelebration(false);
          const nextId = Math.min(12, mission.level + 1);
          navigateTo("mission_lab", nextId);
        }}
        onReplay={() => {
          setShowCelebration(false);
        }}
        onBackToMap={() => {
          setShowCelebration(false);
          navigateTo("quest_map");
        }}
      />
    </div>
  );
}
