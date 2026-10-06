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
    novaTip: "Every line begins with curiosity. Let's light up this console.",
    subLevels: [
      {
        id: 1,
        title: "Reef Sonar Calibration",
        type: "game",
        description: "Align the ocean research hub's hydrophone sonar array to detect terminal frequencies."
      },
      {
        id: 2,
        title: "Awaken the Console",
        type: "code",
        description: "Execute your first Python print statement to output the official greeting."
      },
      {
        id: 3,
        title: "Multi-line Protocol",
        type: "mastery",
        description: "Format multi-line transmission telemetry into the console."
      }
    ]
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
    novaTip: "Every developer has a story. Let's give yours a name and role in NEXA.",
    subLevels: [
      {
        id: 1,
        title: "Memory Packet Matching",
        type: "game",
        description: "Pair data types (str, int, bool) to their respective memory storage registers."
      },
      {
        id: 2,
        title: "Register Explorer Credentials",
        type: "code",
        description: "Define variable bindings for your name and role, and output them."
      },
      {
        id: 3,
        title: "Type Verification Protocol",
        type: "mastery",
        description: "Inspect runtime variable data structures."
      }
    ]
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
    badge: { id: "terminal_whisperer", name: "Terminal Whisperer", icon: "🌲", description: "Interactive user input. Complete mission 3: user terminal." },
    novaTip: "Inputs make software alive! When the terminal asks, enter your identity.",
    subLevels: [
      {
        id: 1,
        title: "Biomass Sensor Calibration",
        type: "game",
        description: "Simulate forest sensor input feedback."
      },
      {
        id: 2,
        title: "Dynamic Input Capture",
        type: "code",
        description: "Capture interactive user input from the terminal and return access greetings."
      },
      {
        id: 3,
        title: "Numeric Telemetry Casting",
        type: "mastery",
        description: "Convert string inputs to numeric integers for canopy telemetry."
      }
    ]
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
    novaTip: "Logic gates are the locks and keys of NEXA. Branching paths make decisions possible.",
    subLevels: [
      {
        id: 1,
        title: "Bio-Dome Logic Gatekeeper",
        type: "game",
        description: "Toggle temperature and moisture triggers to evaluate gate permissions."
      },
      {
        id: 2,
        title: "Blast Door Conditionals",
        type: "code",
        description: "Code the password verification condition to open the security gate."
      },
      {
        id: 3,
        title: "Multi-branch Clearance",
        type: "mastery",
        description: "Implement elif logic for guest, admin, and override levels."
      }
    ]
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
    badge: { id: "loop_pioneer", name: "Loop Pioneer", icon: "🔁", description: "Automate repeating tasks. Complete mission 5: automation." },
    novaTip: "Computers never tire of repeating steps. A loop transforms 100 lines into 2.",
    subLevels: [
      {
        id: 1,
        title: "Vault Excavator Loop Runner",
        type: "game",
        description: "Program a robotic rover to navigate canyon tracks using loop commands."
      },
      {
        id: 2,
        title: "Batch File Scanner",
        type: "code",
        description: "Use for and range to scan archived files in sequence."
      },
      {
        id: 3,
        title: "Accumulator Calculation",
        type: "mastery",
        description: "Sum energy values across all scanned archive sectors."
      }
    ]
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
    challenge: "Append 'Arjun' to the `employees` list, then print the first employee name and the total list count.",
    expectedOutput: "Aisha\n4",
    hints: [
      "Hint 1: Use list.append(\"Arjun\") to add to the end.",
      "Hint 2: Index zero employees[0] accesses the first element.",
      "Hint 3: Use print(employees[0]) and print(len(employees))."
    ],
    rewardXP: 150,
    badge: { id: "data_wrangler", name: "Data Wrangler", icon: "📊", description: "Manage ordered data. Complete mission 6: data recovery." },
    novaTip: "Data organized in lists unlocks true computing power. Indexing is your map.",
    subLevels: [
      {
        id: 1,
        title: "Memory Crystal Sorting",
        type: "game",
        description: "Arrange scrambled data crystals in proper zero-indexed memory slots."
      },
      {
        id: 2,
        title: "Roster List Mutation",
        type: "code",
        description: "Add new crew entries to the vault array using append and retrieve by index."
      },
      {
        id: 3,
        title: "Sub-array Slicing",
        type: "mastery",
        description: "Extract slices of the archive list for forensic telemetry."
      }
    ]
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
    novaTip: "Write once, reuse everywhere. Functions are the building blocks of clean architecture.",
    subLevels: [
      {
        id: 1,
        title: "Relay Function Synthesizer",
        type: "game",
        description: "Connect altitude sensor pipelines through modular transformation blocks."
      },
      {
        id: 2,
        title: "Constructing Modular Logic",
        type: "code",
        description: "Define a clean function that takes parameters and returns greeting strings."
      },
      {
        id: 3,
        title: "Parameterized Altitude Math",
        type: "mastery",
        description: "Create numerical telemetry functions with default parameters."
      }
    ]
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
    novaTip: "Bugs happen to every programmer. Graceful handling turns failures into resilient recoveries.",
    subLevels: [
      {
        id: 1,
        title: "Surge Shield Defense",
        type: "game",
        description: "Absorb voltage surges with try-catch circuit breakers before systems trip."
      },
      {
        id: 2,
        title: "Graceful Exception Trap",
        type: "code",
        description: "Catch ValueError parsing errors without letting the system crash."
      },
      {
        id: 3,
        title: "Division-by-Zero Guard",
        type: "mastery",
        description: "Handle ZeroDivisionError and provide safe default telemetry values."
      }
    ]
  },
  {
    level: 9,
    title: "GRID ARCHITECTURE",
    subtitle: "Map urban data with dictionaries",
    chapter: "CHAPTER 05 · URBAN INFRASTRUCTURE",
    biome: "Metro Coral",
    biomeKey: "city",
    biomeName: "Metro Grid",
    pythonDocTopic: "Mapping Types (dict, key-value pairs, get(), items())",
    bloomsTaxonomy: "APPLY / ANALYZE",
    story: "You arrive at Metro Grid. The municipal central computer needs organized key-value mappings to monitor power substations and traffic flow.",
    teach: "Dictionaries (`dict`) store data as key-value pairs inside curly braces `{}`. Keys must be unique strings or numbers. Access values with `dict[key]` or `dict.get(key)`. Add or update items using `dict[key] = value`.",
    codeTemplate: "# Metro sector database\ngrid = {\n    \"sector\": \"Downtown\",\n    \"power\": True,\n    \"units\": 42\n}\n\ngrid[\"status\"] = \"Operational\"\nprint(grid[\"sector\"])\nprint(grid[\"status\"])",
    challenge: "Build the sector dictionary, set grid['status'] = 'Operational', and print both grid['sector'] and grid['status'].",
    expectedOutput: "Downtown\nOperational",
    hints: [
      "Hint 1: Define key-value pairs using 'key': value syntax.",
      "Hint 2: Add new keys with grid['status'] = 'Operational'.",
      "Hint 3: Print each property on separate lines."
    ],
    rewardXP: 225,
    badge: { id: "system_architect", name: "System Architect", icon: "🏙️", description: "Map urban data with dictionaries. Complete mission 9: grid architecture." },
    novaTip: "Dictionaries are the blueprints of modern software. With keys, instant lookups take zero effort.",
    subLevels: [
      {
        id: 1,
        title: "Smart Grid Dispatcher",
        type: "game",
        description: "Switch power substations on and off across the Metro Grid network."
      },
      {
        id: 2,
        title: "Sector Dictionary Mapping",
        type: "code",
        description: "Store municipal sector attributes and update online operational status."
      },
      {
        id: 3,
        title: "Nested Municipal Lookups",
        type: "mastery",
        description: "Traverse nested dictionaries to retrieve sub-grid load metrics."
      }
    ]
  },
  {
    level: 10,
    title: "ALGORITHMIC ROUTING",
    subtitle: "Filter and transform city streams",
    chapter: "CHAPTER 05 · URBAN INFRASTRUCTURE",
    biome: "Metro Coral",
    biomeKey: "city",
    biomeName: "Metro Grid",
    pythonDocTopic: "List Comprehensions & Data Filtering ([x for x in list if ...])",
    bloomsTaxonomy: "ANALYZE / EVALUATE",
    story: "Traffic flow around Metro Grid has bottlenecked. The routing engine must filter high-congestion zones in real time using list comprehensions.",
    teach: "List comprehensions provide a concise way to create lists based on existing lists: `[expression for item in iterable if condition]`. They run faster and are much cleaner than traditional loops.",
    codeTemplate: "traffic_scores = [25, 80, 45, 95, 30, 88]\n# Filter congested sectors (score > 50)\ncongested = [score for score in traffic_scores if score > 50]\nprint(\"Congested sectors:\", len(congested))",
    challenge: "Filter traffic_scores to only include values greater than 50, then print 'Congested sectors: ' followed by the count.",
    expectedOutput: "Congested sectors: 3",
    hints: [
      "Hint 1: Use [score for score in traffic_scores if score > 50]",
      "Hint 2: Count items using len(congested)",
      "Hint 3: print(\"Congested sectors:\", len(congested))"
    ],
    rewardXP: 250,
    badge: { id: "algorithmic_master", name: "Algorithmic Master", icon: "🚦", description: "Filter and transform city streams. Complete mission 10: algorithmic routing." },
    novaTip: "Comprehensions are Python's superpower. Filtering and transforming happen in one elegant breath.",
    subLevels: [
      {
        id: 1,
        title: "Drone Corridor Routing",
        type: "game",
        description: "Clear flight corridors by filtering out high-turbulence waypoints."
      },
      {
        id: 2,
        title: "Congestion Filtering",
        type: "code",
        description: "Filter critical sector data points with a clean list comprehension."
      },
      {
        id: 3,
        title: "Data Transformation Pipeline",
        type: "mastery",
        description: "Double speed limits in cleared sectors using comprehension transforms."
      }
    ]
  },
  {
    level: 11,
    title: "QUANTUM SYNTHESIS",
    subtitle: "Architect Object-Oriented systems",
    chapter: "CHAPTER 06 · RESTORING CONSCIOUSNESS",
    biome: "Glacier Blue",
    biomeKey: "glacier",
    biomeName: "Frost Core",
    pythonDocTopic: "Classes and Objects (class, __init__, self, methods)",
    bloomsTaxonomy: "CREATE",
    story: "You descend into the subterranean Frost Core. Sub-zero cryogenic quantum modules require reusable Class blueprints to maintain stabilization.",
    teach: "Classes are blueprints for creating objects. Define a class with `class Name:`. The `__init__(self, ...)` constructor method initializes instance variables. Methods are functions defined inside a class that take `self` as their first parameter.",
    codeTemplate: "class QuantumCore:\n    def __init__(self, name, temp):\n        self.name = name\n        self.temp = temp\n        self.active = False\n\n    def boot(self):\n        self.active = True\n        return self.name + \" online at \" + str(self.temp) + \"K\"\n\ncore = QuantumCore(\"Alpha\", 4.2)\nprint(core.boot())",
    challenge: "Define the QuantumCore class with __init__ and boot() method, instantiate 'Alpha' at 4.2K, and print the boot message.",
    expectedOutput: "Alpha online at 4.2K",
    hints: [
      "Hint 1: Define 'class QuantumCore:' with constructor 'def __init__(self, name, temp):'.",
      "Hint 2: Inside boot(self), set self.active = True and return the status string.",
      "Hint 3: Call print(core.boot()) on your created instance."
    ],
    rewardXP: 275,
    badge: { id: "object_pioneer", name: "Object Pioneer", icon: "❄️", description: "Architect Object-Oriented systems. Complete mission 11: quantum synthesis." },
    novaTip: "Classes give life to modular thinking. Once you model the world in objects, any project is within reach.",
    subLevels: [
      {
        id: 1,
        title: "Quantum Reactor Assembly",
        type: "game",
        description: "Assemble containment magnetic rings and calibrate reactor core attributes."
      },
      {
        id: 2,
        title: "Constructing the Core Blueprint",
        type: "code",
        description: "Write the QuantumCore class with constructor and initialization methods."
      },
      {
        id: 3,
        title: "Dual Core Synchronization",
        type: "mastery",
        description: "Instantiate primary and backup cryogenic cores and synchronize their telemetry."
      }
    ]
  },
  {
    level: 12,
    title: "NEXA RESTORE CAPSTONE",
    subtitle: "Build the autonomous restoration engine",
    chapter: "CHAPTER 06 · RESTORING CONSCIOUSNESS",
    biome: "Glacier Blue",
    biomeKey: "glacier",
    biomeName: "Frost Core",
    pythonDocTopic: "Final Capstone Project: End-to-End Integrated Application Architecture",
    bloomsTaxonomy: "CREATE / SYNTHESIZE",
    story: "The final summit! NOVA stands before the central quantum pillar. All 6 biomes are waiting for the final master program. You will construct the NEXA Restoration Engine combining all concepts learned: variables, conditionals, loops, lists, dictionaries, functions, and classes to permanently restore NEXA!",
    teach: "Congratulations on reaching Level 12! Real-world software brings all Python tools together. In this capstone, you will construct a complete `NexaRestoration` class that aggregates biome sensors, loops over data streams, validates safety limits, and outputs the continental restoration diagnostic.",
    codeTemplate: "class NexaRestoration:\n    def __init__(self, explorer_name):\n        self.explorer = explorer_name\n        self.biomes = [\"Ocean\", \"Forest\", \"Canyon\", \"Alpine\", \"City\", \"Glacier\"]\n        self.telemetry = {}\n\n    def restore(self):\n        print(\"Restoration initiated by:\", self.explorer)\n        for b in self.biomes:\n            self.telemetry[b] = \"100% OK\"\n            print(\"Biome restored:\", b)\n        print(\"NEXA Continent fully back to life!\")\n\nsystem = NexaRestoration(\"Alex\")\nsystem.restore()",
    challenge: "Complete and execute the full NexaRestoration project. Restore all 6 biomes and output the final continental revival diagnostic.",
    expectedOutput: "Restoration initiated by: Alex\nBiome restored: Ocean\nBiome restored: Forest\nBiome restored: Canyon\nBiome restored: Alpine\nBiome restored: City\nBiome restored: Glacier\nNEXA Continent fully back to life!",
    hints: [
      "Hint 1: Instantiate NexaRestoration with explorer name 'Alex'.",
      "Hint 2: The restore() method loops through the 6 biomes and prints status for each.",
      "Hint 3: Ensure 'NEXA Continent fully back to life!' is printed as the final line."
    ],
    rewardXP: 500,
    badge: { id: "nexa_savior", name: "NEXA Savior Capstone", icon: "👑", description: "Build the autonomous restoration engine. Complete Level 12 Capstone Project!" },
    novaTip: "You did it, Explorer! From your first print statement to architecting a complete system. You are ready to build whatever you imagine.",
    subLevels: [
      {
        id: 1,
        title: "Continental Diagnostic Architecture",
        type: "game",
        description: "Engage the master quantum console and monitor all 6 biomes synchronizing."
      },
      {
        id: 2,
        title: "Capstone Restoration Engine",
        type: "code",
        description: "Assemble the complete multi-component Python class and run the restoration sequence."
      },
      {
        id: 3,
        title: "Explorer Graduation & Certification",
        type: "mastery",
        description: "Conduct final system diagnostic verification and receive developer credentials."
      }
    ]
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
    missions: [9, 10],
    description: "Automated urban metropolis with algorithmic traffic routing and municipal databases."
  },
  {
    key: "glacier",
    name: "Glacier",
    title: "Frost Core",
    color: "#3F819A",
    tagColor: "bg-[#EAF5F9] text-[#23586B]",
    tagBg: "#EAF5F9",
    missions: [11, 12],
    description: "Sub-zero quantum computer core holding the central NEXA consciousness and Capstone Project."
  }
];

export const BLOOM_LEVELS = [
  { key: "remember_understand", label: "Remember & understand", missions: "Missions 1–2", active: true },
  { key: "apply", label: "Apply your knowledge", missions: "Missions 3–6", active: true },
  { key: "analyze_evaluate", label: "Analyze & evaluate", missions: "Missions 7–10", active: true },
  { key: "create", label: "Create something new (Capstone)", missions: "Missions 11–12", active: true }
];
