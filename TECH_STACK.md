# LearnX — Full Tech Stack & Architectural Overview

This document provides a comprehensive breakdown of all technologies, libraries, engines, architectural patterns, and design systems used to build the **LearnX** gamified, story-driven Python learning web application.

---

## 1. Core Framework & Build Pipeline

| Technology | Version | Purpose & Description |
| :--- | :--- | :--- |
| **React** | `^18.3.1` | Modern component-based UI framework. Built entirely with functional components, React Hooks (`useState`, `useEffect`, `useRef`, `useContext`), and custom hooks. |
| **Vite** | `^6.1.0` | Ultra-fast next-generation frontend tooling and bundler. Uses native ES modules during development for instant Hot Module Replacement (HMR) and optimized Rollup builds for production. |
| **Node.js** | `v24.14.0` | Server-side JavaScript runtime used for local package execution, testing, and development tooling. |
| **npm** | `11.9.0` | Dependency and package manager. |

---

## 2. Styling, Typography & Design System

| Technology | Purpose & Implementation |
| :--- | :--- |
| **Tailwind CSS (`^3.4.17`)** | Utility-first styling framework customized for the cozy RPG biome aesthetic. Configured in `tailwind.config.js` with bespoke pastel color palettes, warm off-white canvas backgrounds (`#F8F9F5`), rounded containers (`rounded-2xl`, `rounded-3xl`), and soft layered drop shadows (`shadow-soft`, `shadow-float`). |
| **PostCSS (`^8.5.1`) & Autoprefixer (`^10.4.20`)** | CSS processing pipeline ensuring full cross-browser compatibility and automatic vendor prefix injection. |
| **Google Fonts — Plus Jakarta Sans** | Modern, friendly, geometric sans-serif font used for headers, narratives, system dialogue, and UI elements. |
| **Google Fonts — JetBrains Mono** | Clean, monospace developer font chosen for the in-browser Python code editor and terminal console. |

---

## 3. UI Components, Icons & Vector Graphics

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Icons** | **Lucide React (`^0.475.0`)** | Clean, scalable SVG icons used throughout the sidebar, top header, status pills, and action buttons (`BookOpen`, `Map`, `Award`, `User`, `Target`, `Flame`, `Zap`, `Brain`, `Terminal`, `CheckCircle2`, `Volume2`, `Eye`, `EyeOff`, `LogOut`, etc.). |
| **Biome Art** | **Custom Scalable Vector Graphics (SVG)** | Hand-crafted SVG vector illustrations in `src/components/BiomeVectorArt.jsx` for all 6 biomes: Undersea Reef, Eco Woods, Canyon Vault, Mountain Pass, Metro Grid, and Frost Core. |
| **NOVA Mascot** | **Vector Robot Mascot** | Custom vector illustration of NOVA, the friendly AI companion bot with animated antennas, screen expressions, and dialogue bubbles. |
| **World Map** | **Interactive 2.5D SVG Map** | Scalable 2.5D biome island map with zoom controls (`+`, `-`, reset), dynamic route trails, and mission status nodes (Completed, Current, Locked). |

---

## 4. Authentication & Protected Navigation

| Feature | Implementation | Details |
| :--- | :--- | :--- |
| **Authentication Flow** | `src/views/AuthView.jsx` | Dedicated cozy RPG styled Login and Sign Up views with email/password validation, show/hide password toggles, and friendly error alerts. |
| **One-Click Demo Login** | Demo Pre-fill | One-click button pre-populating `alex@nexa.dev` / `python123` for instant evaluation. |
| **Session Persistence** | `localStorage` (`learnx_auth_session`) | Maintains login state across browser page refreshes (`F5`). |
| **Route Protection** | Guard in `src/App.jsx` | Unauthenticated visitors see the Login page first; dashboard and learning features unlock upon successful authentication. |
| **Logout Functionality** | Top Header & Profile | Easily accessible logout buttons in `TopHeader.jsx` and `ProfileView.jsx`. |

---

## 5. Python Execution Engine (In-Browser Execution)

| Engine | Layer | Features |
| :--- | :--- | :--- |
| **Resilient Local Python Runner** | `src/utils/pythonRunner.js` | Zero-dependency, client-side Python execution engine that parses and runs code instantly without network latency. Handles: <br>• `print()` with variable args & formatting<br>• Variables & type detection (`str`, `int`, `float`, `bool`)<br>• Control flow (`if`, `elif`, `else` with comparison operators)<br>• Loops (`for` with `range()`)<br>• Data structures (`list`, `.append()`, indexing `list[0]`, `len()`)<br>• Functions (`def`, parameters, `return`)<br>• Exceptions (`try`, `except ValueError`) |
| **Pyodide WebAssembly** | `v0.26.4` (CDN) | Full CPython 3.12 compiled to WebAssembly. Automatically loaded in the background for executing arbitrary complex standard-library Python code directly in the browser. |
| **Interactive Terminal I/O** | Custom React Console | Captures standard output (`stdout`) and error streams (`stderr`). Supports interactive real-time `input()` prompt handling where users type directly into the terminal stream. |

---

## 6. Sound Synthesis & Audio Engine

| Engine | Implementation | Sounds Synthesized |
| :--- | :--- | :--- |
| **Web Audio API** | Native Browser API (`src/utils/audio.js`) | Lightweight, zero-asset audio synthesizer using oscillator nodes (`sine`, `triangle`) and exponential gain ramps. Fully offline with zero external audio file dependencies. |
| **Audio Events** | • Tap click (`520 Hz` soft triangle)<br>• Hint sparkle chime (`E5 → A5 → C6` arpeggio)<br>• Level completion victory melody (`C5 → E5 → G5 → C6`)<br>• Badge unlock fanfare (`A4 → C#5 → E5 → A5 → C#6`)<br>• Gentle mismatch boop (`320 Hz → 280 Hz`) |
| **Mute Control** | State toggle | Global mute/unmute control accessible via the top navigation bar. |

---

## 7. Gamification, State & Persistence

| Feature | Implementation | Details |
| :--- | :--- | :--- |
| **Persistent Game State** | React Context + `localStorage` (`src/context/GameStateContext.jsx`) | Stores user progress across browser reloads: completed mission IDs, active mission, earned XP, daily streak counter, unlocked badges, timestamps, user profile, and settings. |
| **Celebration & Confetti** | **Canvas-Confetti (`^1.9.4`)** | Renders 2D particle physics confetti with custom pastel brand colors when completing a mission or unlocking a badge. |
| **Bloom's Taxonomy Framework** | Pedagogical Matrix | Structures curriculum and tracks learner mastery across 6 cognitive tiers: *Remember*, *Understand*, *Apply*, *Analyze*, *Evaluate*, and *Create*. |
| **Progressive Hint System** | 3-Tier Reveal System | Progressive reveals from gentle nudge to exact syntax to prevent frustration while rewarding curiosity. |

---

## 8. Project Directory Structure

```
learnx/
├── index.html                   # HTML entry point with Google Fonts
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite build and dev server config
├── tailwind.config.js           # Tailwind palette, typography, and styling config
├── postcss.config.js            # PostCSS configuration
├── TECH_STACK.md                # Complete tech stack documentation (this file)
├── public/
│   └── logo.svg                 # Application brand vector icon
└── src/
    ├── main.jsx                 # React root mount point
    ├── App.jsx                  # Main application shell with auth guard
    ├── index.css                # Global CSS with Tailwind and custom scrollbars
    ├── context/
    │   └── GameStateContext.jsx # Central state & persistence (Auth, XP, streak, badges)
    ├── data/
    │   ├── curriculum.js        # 8 interactive levels & Bloom's taxonomy mapping
    │   └── achievements.js      # 6 collectible badges and unlock metadata
    ├── utils/
    │   ├── audio.js             # Web Audio API sound synthesizer
    │   └── pythonRunner.js      # Dual-mode in-browser Python execution engine
    ├── components/
    │   ├── Sidebar.jsx          # Left navigation bar with daily goal card
    │   ├── TopHeader.jsx        # Breadcrumbs, streak, XP, audio toggle, avatar, logout
    │   ├── BiomeVectorArt.jsx   # Custom SVG illustrations (islands, map, NOVA)
    │   └── CelebrationModal.jsx # Confetti and victory modal
    └── views/
        ├── AuthView.jsx         # Login and Sign Up authentication page
        ├── DashboardView.jsx    # Base Camp dashboard
        ├── QuestMapView.jsx     # Interactive 6-biome world map and mission drawer
        ├── MissionLabView.jsx   # Code editor, terminal, hint system, and live runner
        ├── AchievementsView.jsx # Badges and medals collection grid
        └── ProfileView.jsx      # Explorer profile editor, expedition log, logout
```
