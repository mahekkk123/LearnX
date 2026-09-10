import React, { createContext, useContext, useState, useEffect } from "react";
import { soundEngine } from "../utils/audio";
import { LEVELS_DATA } from "../data/curriculum";

const GameStateContext = createContext(null);

const STORAGE_KEY = "learnx_game_state_v1";

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

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Failed to write to localStorage", e);
    }
  }, [state]);

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
