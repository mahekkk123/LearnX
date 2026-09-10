import React, { createContext, useContext, useState, useEffect } from "react";
import { soundEngine } from "../utils/audio";
import { LEVELS_DATA } from "../data/curriculum";

const GameStateContext = createContext(null);

const STORAGE_KEY = "learnx_game_state_v1";
const AUTH_SESSION_KEY = "learnx_auth_session";
const USERS_DB_KEY = "learnx_users_db";

const DEFAULT_USERS = {
  "alex@nexa.dev": {
    name: "Alex",
    email: "alex@nexa.dev",
    password: "python123",
    role: "Aspiring Developer",
    studentId: "NEXA-001"
  }
};

const INITIAL_STATE = {
  activeView: "dashboard", // "dashboard", "quest_map", "mission_lab", "achievements", "profile"
  currentMissionId: 2,
  completedMissions: [1],
  xp: 50,
  streakDays: 2,
  badges: ["first_line"],
  badgeDates: {
    first_line: "2026-09-09"
  },
  profile: {
    name: "Alex",
    email: "alex@nexa.dev",
    studentId: "NEXA-001",
    role: "Aspiring Developer",
    level: 2,
    avatarInitials: "AL"
  },
  expeditionLog: [
    { id: 1, title: "First Day", date: "2026-09-09", xp: 50 }
  ],
  soundEnabled: true,
  filterBiome: "all"
};

export function GameStateProvider({ children }) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      const session = localStorage.getItem(AUTH_SESSION_KEY);
      return !!session;
    } catch {
      return false;
    }
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const session = localStorage.getItem(AUTH_SESSION_KEY);
      if (session) return JSON.parse(session);
    } catch {}
    return null;
  });

  // Ensure default users exist in localStorage
  useEffect(() => {
    try {
      const existing = localStorage.getItem(USERS_DB_KEY);
      if (!existing) {
        localStorage.setItem(USERS_DB_KEY, JSON.stringify(DEFAULT_USERS));
      }
    } catch (e) {
      console.warn("Failed to initialize users DB", e);
    }
  }, []);

  // Main Game State
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...INITIAL_STATE, ...parsed };
      }
    } catch (e) {
      console.warn("Failed to read from localStorage", e);
    }
    return INITIAL_STATE;
  });

  // Keep soundEngine in sync
  useEffect(() => {
    soundEngine.enabled = state.soundEnabled;
  }, [state.soundEnabled]);

  // Persist game state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Failed to write to localStorage", e);
    }
  }, [state]);

  // Sync profile when currentUser changes
  useEffect(() => {
    if (currentUser && currentUser.name) {
      const initials = currentUser.name
        .split(" ")
        .map(p => p[0])
        .join("")
        .toUpperCase()
        .slice(0, 2) || "AL";

      setState(prev => ({
        ...prev,
        profile: {
          ...prev.profile,
          name: currentUser.name,
          email: currentUser.email,
          studentId: currentUser.studentId || prev.profile.studentId,
          avatarInitials: initials
        }
      }));
    }
  }, [currentUser]);

  // Authentication Methods
  const login = (email, password) => {
    const cleanEmail = (email || "").trim().toLowerCase();
    const cleanPass = (password || "").trim();

    try {
      const usersJson = localStorage.getItem(USERS_DB_KEY);
      const users = usersJson ? JSON.parse(usersJson) : DEFAULT_USERS;

      // Check against registered users or fallback demo
      let user = users[cleanEmail];
      if (!user && cleanEmail === "alex@nexa.dev" && cleanPass === "python123") {
        user = DEFAULT_USERS["alex@nexa.dev"];
      }

      if (user && user.password === cleanPass) {
        const sessionData = {
          name: user.name,
          email: user.email,
          role: user.role || "Aspiring Developer",
          studentId: user.studentId || "NEXA-001"
        };
        localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(sessionData));
        setCurrentUser(sessionData);
        setIsAuthenticated(true);
        soundEngine.playClick();
        return { success: true };
      }
    } catch (e) {
      console.warn("Login error", e);
    }

    return {
      success: false,
      error: "Invalid email or password. (Hint: demo is alex@nexa.dev / python123)"
    };
  };

  const signup = ({ name, email, password }) => {
    const cleanName = (name || "").trim();
    const cleanEmail = (email || "").trim().toLowerCase();
    const cleanPass = (password || "").trim();

    if (!cleanName) return { success: false, error: "Please enter your name." };
    if (!cleanEmail.includes("@")) return { success: false, error: "Please enter a valid email address." };
    if (cleanPass.length < 6) return { success: false, error: "Password must be at least 6 characters." };

    try {
      const usersJson = localStorage.getItem(USERS_DB_KEY);
      const users = usersJson ? JSON.parse(usersJson) : { ...DEFAULT_USERS };

      if (users[cleanEmail]) {
        return { success: false, error: "An account with this email already exists." };
      }

      const newUser = {
        name: cleanName,
        email: cleanEmail,
        password: cleanPass,
        role: "Aspiring Developer",
        studentId: `NEXA-${Math.floor(100 + Math.random() * 900)}`
      };

      users[cleanEmail] = newUser;
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));

      const sessionData = {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        studentId: newUser.studentId
      };

      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(sessionData));
      setCurrentUser(sessionData);
      setIsAuthenticated(true);
      soundEngine.playVictory();

      return { success: true };
    } catch (e) {
      return { success: false, error: "Signup failed due to storage error." };
    }
  };

  const logout = () => {
    soundEngine.playClick();
    try {
      localStorage.removeItem(AUTH_SESSION_KEY);
    } catch {}
    setCurrentUser(null);
    setIsAuthenticated(false);
    setState(prev => ({ ...prev, activeView: "dashboard" }));
  };

  const navigateTo = (view, missionId = null) => {
    soundEngine.playClick();
    setState(prev => ({
      ...prev,
      activeView: view,
      ...(missionId ? { currentMissionId: missionId } : {})
    }));
  };

  const selectMission = (missionId) => {
    setState(prev => ({
      ...prev,
      currentMissionId: missionId
    }));
  };

  const setFilterBiome = (biomeKey) => {
    soundEngine.playClick();
    setState(prev => ({ ...prev, filterBiome: biomeKey }));
  };

  const toggleSound = () => {
    setState(prev => {
      const nextVal = !prev.soundEnabled;
      soundEngine.enabled = nextVal;
      if (nextVal) soundEngine.playClick();
      return { ...prev, soundEnabled: nextVal };
    });
  };

  const updateProfile = ({ name, studentId }) => {
    const initials = (name || "Alex")
      .split(" ")
      .map(p => p[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "AL";

    setState(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        name: name.trim() || "Alex",
        studentId: studentId.trim() || "NEXA-001",
        avatarInitials: initials
      }
    }));

    // Also update session user
    if (currentUser) {
      const updatedUser = { ...currentUser, name: name.trim() || "Alex", studentId: studentId.trim() || "NEXA-001" };
      setCurrentUser(updatedUser);
      try {
        localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(updatedUser));
      } catch {}
    }
  };

  const completeMission = (missionId, rewardXP, badgeObj) => {
    const mission = LEVELS_DATA.find(m => m.level === missionId);
    const today = new Date().toISOString().split("T")[0];

    setState(prev => {
      const alreadyCompleted = prev.completedMissions.includes(missionId);
      const newCompleted = alreadyCompleted
        ? prev.completedMissions
        : [...prev.completedMissions, missionId];

      const newXP = alreadyCompleted ? prev.xp : prev.xp + rewardXP;

      let newBadges = [...prev.badges];
      let newBadgeDates = { ...prev.badgeDates };

      if (badgeObj && !newBadges.includes(badgeObj.id)) {
        newBadges.push(badgeObj.id);
        newBadgeDates[badgeObj.id] = today;
      }

      const newLog = alreadyCompleted
        ? prev.expeditionLog
        : [
            ...prev.expeditionLog,
            {
              id: missionId,
              title: mission?.title || `Mission ${missionId}`,
              date: today,
              xp: rewardXP
            }
          ];

      // Next unlockable mission
      const nextMissionId = Math.min(8, missionId + 1);

      return {
        ...prev,
        completedMissions: newCompleted,
        xp: newXP,
        badges: newBadges,
        badgeDates: newBadgeDates,
        expeditionLog: newLog,
        currentMissionId: nextMissionId
      };
    });
  };

  const resetProgress = () => {
    soundEngine.playClick();
    setState(INITIAL_STATE);
  };

  return (
    <GameStateContext.Provider
      value={{
        ...state,
        isAuthenticated,
        currentUser,
        login,
        signup,
        logout,
        navigateTo,
        selectMission,
        setFilterBiome,
        toggleSound,
        updateProfile,
        completeMission,
        resetProgress
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameState() {
  const ctx = useContext(GameStateContext);
  if (!ctx) throw new Error("useGameState must be used within GameStateProvider");
  return ctx;
}
