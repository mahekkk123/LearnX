export const LEVELS_DATA = [
  {
    level: 1,
    title: "FIRST DAY",
    subtitle: "Make the terminal respond",
    chapter: "CHAPTER 01 · THE AWAKENING",
    biome: "Ocean Teal",
    biomeKey: "ocean",
    biomeName: "Undersea Reef",
    pythonDocTopic: "Built-in Functions (print) & Syntax Standards (PEP 8 Comments)",
    bloomsTaxonomy: "REMEMBER / UNDERSTAND",
    story: "You arrive at the NEXA Ocean Research Hub. The main terminal screen is completely blank. NOVA says: 'Let's start simple. Make the terminal respond so we know communication is restored.'",
    teach: "The `print()` function outputs text to the standard output terminal. Text inside quotes is a String (`str`). Lines starting with `#` are comments ignored by the Python interpreter.",
    codeTemplate: "# Print welcome message\nprint(\"Welcome to NEXA!\")",
    challenge: "Write a line of Python code that outputs exact text: Welcome to NEXA!",
    expectedOutput: "Welcome to NEXA!",
    hints: [
      "Hint 1: Use the built-in print() function.",
      "Hint 2: Surround text inside quotes like \"Welcome to NEXA!\".",
      "Hint 3: print(\"Welcome to NEXA!\")"
    ],
    rewardXP: 50,
    badge: { id: "first_line", name: "First Line", icon: "🌊", description: "Make the terminal respond. Complete mission 1: first day." },
    novaTip: "Every line begins with curiosity. Let's light up this console."
  },
  {
    level: 2,
    title: "IDENTITY",
    subtitle: "Establish developer credentials",
    chapter: "CHAPTER 01 · THE AWAKENING",
    biome: "Ocean Teal",
    biomeKey: "ocean",
    biomeName: "Undersea Reef",
    pythonDocTopic: "Built-in Types (str, int, float, bool) & Variable Assignment",
    bloomsTaxonomy: "REMEMBER / UNDERSTAND / APPLY",
    story: "The terminal responds, but NEXA's registry doesn't know who you are. NOVA needs you to bind your credentials into system memory.",
    teach: "Variables store data values in memory. Python automatically detects types: Strings (`\"Alex\"`), Integers (`18`), Floats (`98.6`), and Booleans (`True`/`False`). Variables are assigned using `=`. Variable names should follow snake_case according to PEP 8.",
    codeTemplate: "name = \"Alex\"\nage = 18\nrole = \"Developer\"\ndeveloper_status = True\n\nprint(name)\nprint(role)",
    challenge: "Assign your name to `name` and role 'Developer' to `role`, then print both.",
    expectedOutput: "Alex\nDeveloper",
    hints: [
      "Hint 1: Create a variable using the '=' operator.",
      "Hint 2: Put string values inside quotes like \"Alex\" and \"Developer\".",
      "Hint 3: Use print(name) then print(role)."
    ],
    rewardXP: 75,
    badge: { id: "identity_created", name: "Identity Created", icon: "🆔", description: "Establish developer credentials. Complete mission 2: identity." },
    novaTip: "Every developer has a story. Let's give yours a name and role in NEXA."
  },
  {
    level: 3,
    title: "USER TERMINAL",
    subtitle: "Interactive user input",
    chapter: "CHAPTER 02 · LIVING ECOSYSTEM",
    biome: "Forest Green",
    biomeKey: "forest",
    biomeName: "Eco Woods",
    pythonDocTopic: "Input/Output (input) & Type Casting (int, str)",
    bloomsTaxonomy: "APPLY",
    story: "You step into the NEXA Forest Grid. The terminal requires interactive data input to calibrate environmental monitors.",
    teach: "The `input()` function prompts the user for text input and always returns a string. Use `int()` or `float()` to convert strings to numbers for calculations.",
    codeTemplate: "name = input(\"Name: \")\nage = int(input(\"Age: \"))\nprint(\"Access granted for:\", name)",
    challenge: "Take user input for name and age, then print 'Access granted for: ' followed by the name.",
    expectedOutput: "Access granted for: Alex",
    hints: [
      "Hint 1: Use name = input() to get text from the user.",
      "Hint 2: Use int() if you need numerical conversion.",
      "Hint 3: print(\"Access granted for:\", name)"
    ],
    rewardXP: 100,
    badge: null,
    novaTip: "Inputs make software alive! When the terminal asks, enter your identity."
  },
  {
    level: 4,
    title: "SECURITY GATE",
    subtitle: "Build conditional checks",
    chapter: "CHAPTER 02 · LIVING ECOSYSTEM",
    biome: "Forest Green",
    biomeKey: "forest",
    biomeName: "Eco Woods",
    pythonDocTopic: "Control Flow (if, elif, else) & Comparison Operators (==, !=, >, <)",
    bloomsTaxonomy: "APPLY / ANALYZE",
    story: "A heavy blast door blocks the way to the Forest Grid server. The security gate needs logic to evaluate passcodes.",
    teach: "Conditional statements execute code blocks only if conditions evaluate to `True`. Use `if`, `elif`, and `else` with comparison operators like `==`, `!=`, `<`, `>`. Remember the colon `:` and 4-space indentation.",
    codeTemplate: "password = \"python123\"\n\nif password == \"python123\":\n    print(\"Access granted\")\nelse:\n    print(\"Access denied\")",
    challenge: "Write an if-else check that prints 'Access granted' if password is 'python123', else 'Access denied'.",
    expectedOutput: "Access granted",
    hints: [
      "Hint 1: Use == to compare two values.",
      "Hint 2: Don't forget the colon ':' after if and else lines.",
      "Hint 3: Indent the print statements under the if and else blocks."
    ],
    rewardXP: 100,
    badge: { id: "security_rookie", name: "Security Rookie", icon: "🛡️", description: "Build conditional checks. Complete mission 4: security gate." },
    novaTip: "Logic gates are the locks and keys of NEXA. Branching paths make decisions possible."
  },
  {
    level: 5,
    title: "AUTOMATION",
    subtitle: "Automate repeating tasks",
    chapter: "CHAPTER 03 · THE ANCIENT ARCHIVE",
    biome: "Sand Gold",
    biomeKey: "canyon",
    biomeName: "Canyon Vault",
    pythonDocTopic: "Control Flow (for statements) & built-in range() function",
    bloomsTaxonomy: "APPLY",
    story: "You enter the Canyon Vault. Thousands of corrupted backup logs need scanning. Manual checking is impossible.",
    teach: "A `for` loop iterates over a sequence. `range(start, stop)` generates a sequence of numbers from start up to (but not including) stop. For example, `range(1, 6)` generates 1, 2, 3, 4, 5.",
    codeTemplate: "for i in range(1, 6):\n    print(\"Scanning file\", i)",
    challenge: "Write a for loop using range() to print 'Scanning file 1' through 'Scanning file 5'.",
    expectedOutput: "Scanning file 1\nScanning file 2\nScanning file 3\nScanning file 4\nScanning file 5",
    hints: [
      "Hint 1: range(1, 6) generates numbers 1 through 5.",
      "Hint 2: Loop structure: for i in range(1, 6):",
      "Hint 3: print(\"Scanning file\", i)"
    ],
    rewardXP: 125,
    badge: null,
    novaTip: "Computers never tire of repeating steps. A loop transforms 100 lines into 2."
  },
  {
    level: 6,
    title: "DATA RECOVERY",
    subtitle: "Manage ordered data",
    chapter: "CHAPTER 03 · THE ANCIENT ARCHIVE",
    biome: "Sand Gold",
    biomeKey: "canyon",
    biomeName: "Canyon Vault",
    pythonDocTopic: "Data Structures (Lists, sequence indexing, list.append(), list.remove())",
    bloomsTaxonomy: "APPLY / ANALYZE",
    story: "Inside the Vault database, scattered employee records are stored in memory lists. You need to clean and update them.",
    teach: "Lists are mutable, ordered sequences enclosed in brackets `[]`. Indexing starts at `0`. Use `.append(item)` to add an element to the end and `.remove(item)` to delete items. Access elements using `list[index]`.",
    codeTemplate: "employees = [\"Aisha\", \"Rahul\", \"Zoya\"]\nemployees.append(\"Arjun\")\nprint(employees[0])\nprint(len(employees))",
    challenge: "Append 'Arjun' to the `employees` list and print the first employee name.",
    expectedOutput: "Aisha",
    hints: [
      "Hint 1: Use list.append(\"Arjun\") to add to the end.",
      "Hint 2: Index zero employees[0] accesses the first element.",
      "Hint 3: print(employees[0])"
    ],
    rewardXP: 150,
    badge: { id: "data_wrangler", name: "Data Wrangler", icon: "📊", description: "Manage ordered data. Complete mission 6: data recovery." },
    novaTip: "Data organized in lists unlocks true computing power. Indexing is your map."
  },
  {
    level: 7,
    title: "CODE BUILDER",
    subtitle: "Modular reusable functions",
    chapter: "CHAPTER 04 · HIGH ALTITUDE UPTIME",
    biome: "Alpine Slate",
    biomeKey: "alpine",
    biomeName: "Mountain Pass",
    pythonDocTopic: "Defining Functions (def), Parameters, Arguments & Return Statements",
    bloomsTaxonomy: "APPLY / ANALYZE",
    story: "Reaching the Mountain Pass server, you find the codebase filled with redundant code. NOVA demands clean modularity.",
    teach: "Functions are defined with `def function_name(parameters):`. They encapsulate reusable logic and send results back using `return`. Call functions by providing arguments in parentheses: `result = function_name(arg)`.",
    codeTemplate: "def greet(name):\n    return \"Welcome \" + name\n\nmessage = greet(\"Alex\")\nprint(message)",
    challenge: "Define a function `greet(name)` that returns 'Welcome ' + name, then print the result for 'Alex'.",
    expectedOutput: "Welcome Alex",
    hints: [
      "Hint 1: Use 'def greet(name):' to declare the function.",
      "Hint 2: Use return statement inside the function.",
      "Hint 3: Call greet(\"Alex\") and print the result."
    ],
    rewardXP: 175,
    badge: { id: "code_builder", name: "Code Builder", icon: "🧩", description: "Modular reusable functions. Complete mission 7: code builder." },
    novaTip: "Write once, reuse everywhere. Functions are the building blocks of clean architecture."
  },
  {
    level: 8,
    title: "ERROR DETECTOR",
    subtitle: "Handle system exceptions",
    chapter: "CHAPTER 04 · HIGH ALTITUDE UPTIME",
    biome: "Alpine Slate",
    biomeKey: "alpine",
    biomeName: "Mountain Pass",
    pythonDocTopic: "Errors and Exceptions (try, except blocks)",
    bloomsTaxonomy: "ANALYZE / EVALUATE",
    story: "Unstable subroutines keep crashing when bad data enters the Mountain node. Build exception shields to maintain uptime.",
    teach: "The `try` block lets you test code for errors. The `except` block catches and handles errors gracefully without crashing the whole application. You can catch specific exceptions like `ValueError` or `TypeError`.",
    codeTemplate: "try:\n    age = int(\"invalid_number\")\nexcept ValueError:\n    print(\"Invalid age input detected\")",
    challenge: "Wrap string parsing in a try-except block to catch ValueError and print 'Invalid age input detected'.",
    expectedOutput: "Invalid age input detected",
    hints: [
      "Hint 1: Put dangerous code inside 'try:'",
      "Hint 2: Catch specific errors with 'except ValueError:'",
      "Hint 3: Print error message inside the except block."
    ],
    rewardXP: 200,
    badge: { id: "debugger", name: "Debugger", icon: "🐛", description: "Handle system exceptions. Complete mission 8: error detector." },
    novaTip: "Bugs happen to every programmer. Graceful handling turns failures into resilient recoveries."
  }
];

export const BIOMES = [
  {
    key: "all",
    name: "All biomes",
    color: "#2A6B53",
    tagColor: "bg-stone-100 text-stone-700",
    description: "Explore the full NEXA continent across all 6 ecosystems."
  },
  {
    key: "ocean",
    name: "Ocean",
    title: "Undersea Reef",
    color: "#2A9D8F",
    tagColor: "bg-[#E6F5F4] text-[#1E7268]",
    tagBg: "#E6F5F4",
    missions: [1, 2],
    description: "Submerged research dome where NEXA core communication was lost."
  },
  {
    key: "forest",
    name: "Forest",
    title: "Eco Woods",
    color: "#2D6A4F",
    tagColor: "bg-[#E8F5E9] text-[#1F543D]",
    tagBg: "#E8F5E9",
    missions: [3, 4],
    description: "Bioluminescent canopy sheltering environmental calibration sensors."
  },
  {
    key: "canyon",
    name: "Canyon",
    title: "Canyon Vault",
    color: "#C98B4B",
    tagColor: "bg-[#FEF8EE] text-[#915B25]",
    tagBg: "#FEF8EE",
    missions: [5, 6],
    description: "Sun-drenched sandstone vaults guarding long-forgotten data archives."
  },
  {
    key: "alpine",
    name: "Alpine",
    title: "Mountain Pass",
    color: "#5E6B7A",
    tagColor: "bg-[#EEF2F7] text-[#3D4754]",
    tagBg: "#EEF2F7",
    missions: [7, 8],
    description: "High-altitude relay stations exposed to severe weather and raw telemetry."
  },
  {
    key: "city",
    name: "City",
    title: "Metro Grid",
    color: "#DD6245",
    tagColor: "bg-[#FDF1ED] text-[#963720]",
    tagBg: "#FDF1ED",
    missions: [9, 10, 11],
    description: "Automated urban metropolis with algorithmic traffic routing (Levels 9-11)."
  },
  {
    key: "glacier",
    name: "Glacier",
    title: "Frost Core",
    color: "#3F819A",
    tagColor: "bg-[#EAF5F9] text-[#23586B]",
    tagBg: "#EAF5F9",
    missions: [12, 13, 14, 15, 16, 17, 18],
    description: "Sub-zero quantum computer core holding the central NEXA consciousness (Levels 12-18)."
  }
];

export const BLOOM_LEVELS = [
  { key: "remember_understand", label: "Remember & understand", missions: "Missions 1–2", active: true },
  { key: "apply", label: "Apply your knowledge", missions: "Missions 3–7", active: true },
  { key: "analyze_evaluate", label: "Analyze & evaluate", missions: "Missions 4–8", active: true },
  { key: "create", label: "Create something new", missions: "Roadmap · Mission 18", active: false, locked: true }
];
