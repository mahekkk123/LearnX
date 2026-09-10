import React from "react";
import { Flame, Zap, Volume2, VolumeX, ChevronRight } from "lucide-react";
import { useGameState } from "../context/GameStateContext";

export function TopHeader() {
  const { activeView, navigateTo, xp, streakDays, soundEnabled, toggleSound, profile, currentMissionId } = useGameState();

  const getBreadcrumb = () => {
    switch (activeView) {
      case "dashboard":
        return "Dashboard";
      case "quest_map":
        return "Python quest";
      case "mission_lab":
        return `Python quest > Mission ${currentMissionId}`;
      case "achievements":
        return "Achievements";
      case "profile":
        return "My profile";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="h-16 border-b border-[#E6EDE6] bg-[#F8F9F5] px-8 flex items-center justify-between select-none">
      {/* Breadcrumb trail */}
      <div className="flex items-center gap-2 text-xs font-medium text-[#73877C]">
        <button
          onClick={() => navigateTo("dashboard")}
          className="hover:text-[#172E26] transition-colors"
        >
          Your learning journey
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-[#9EB0A5]" />
        <span className="font-semibold text-[#253D32]">
          {getBreadcrumb()}
        </span>
      </div>

      {/* Stats and Profile Badges */}
      <div className="flex items-center gap-5">
        {/* Streak */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#A85822]">
          <Flame className="w-4 h-4 text-[#D96B27] fill-[#D96B27]" />
          <span>{streakDays} day streak</span>
        </div>

        {/* XP */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#2A6B53]">
          <Zap className="w-4 h-4 text-[#2A6B53] fill-[#2A6B53]" />
          <span>{xp} XP</span>
        </div>

        {/* Audio Mute/Unmute */}
        <button
          onClick={toggleSound}
          title={soundEnabled ? "Mute audio sound effects" : "Enable cozy audio sound effects"}
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#687C71] hover:text-[#172E26] hover:bg-[#EEF4F0] transition-colors"
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#98A89F]" />
          )}
        </button>

        {/* User Avatar Circle */}
        <button
          onClick={() => navigateTo("profile")}
          className="w-8 h-8 rounded-full bg-[#E8DDD1] text-[#7A5B3D] flex items-center justify-center font-bold text-xs shadow-sm hover:ring-2 hover:ring-[#2A6B53] transition-all"
        >
          {profile.avatarInitials}
        </button>
      </div>
    </header>
  );
}
