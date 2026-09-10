import React, { useState } from "react";
import { Check, ArrowRight, Zap, Flame, BookOpen, User, RotateCcw } from "lucide-react";
import { useGameState } from "../context/GameStateContext";
import { soundEngine } from "../utils/audio";

export function ProfileView() {
  const {
    profile,
    updateProfile,
    xp,
    streakDays,
    completedMissions,
    expeditionLog,
    navigateTo,
    resetProgress
  } = useGameState();

  const [name, setName] = useState(profile.name);
  const [studentId, setStudentId] = useState(profile.studentId);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    soundEngine.playClick();
    updateProfile({ name, studentId });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
      {/* Header section */}
      <div>
        <div className="text-[11px] font-bold tracking-widest text-[#7E9387] uppercase mb-1">
          The developer behind the journey
        </div>
        <h1 className="text-3xl font-extrabold text-[#172E26] tracking-tight mb-1">
          Your explorer profile
        </h1>
        <p className="text-sm text-[#5D7267]">
          A little about you. A record of how far you've come.
        </p>
      </div>

      {/* Main Grid: Left Profile Card, Right Stats & Expedition Log */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Profile Card (5 cols) */}
        <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E4ECE4] rounded-3xl p-8 shadow-soft text-center space-y-6">
          {/* Avatar Circle */}
          <div className="w-24 h-24 rounded-full bg-[#E8DDD1] text-[#7A5B3D] flex items-center justify-center font-bold text-3xl mx-auto shadow-sm">
            {profile.avatarInitials}
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-black text-[#172E26] tracking-tight">
              {profile.name}
            </h2>
            <div className="text-xs font-semibold text-[#668074]">
              {profile.role} · Level {profile.level}
            </div>
          </div>

          {/* Edit Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left pt-2 border-t border-[#F0F4F0]">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#6D8076]">Explorer name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-2xl bg-[#F6F9F6] border border-[#E2EAE3] text-sm text-[#172E26] font-medium focus:outline-none focus:ring-2 focus:ring-[#2A6B53]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#6D8076]">Roll number / Student ID</label>
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-2xl bg-[#F6F9F6] border border-[#E2EAE3] text-sm text-[#172E26] font-medium focus:outline-none focus:ring-2 focus:ring-[#2A6B53]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-2xl bg-[#2A6B53] hover:bg-[#205541] active:scale-[0.98] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>{isSaved ? "Saved successfully!" : "Save profile"}</span>
              <Check className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>

          {/* Reset progress option */}
          <div className="pt-2">
            <button
              onClick={() => {
                if (window.confirm("Reset your progress to initial state?")) {
                  resetProgress();
                  setName("Alex");
                  setStudentId("NEXA-001");
                }
              }}
              className="text-[11px] font-semibold text-[#8C9C92] hover:text-[#C55038] transition-colors flex items-center justify-center gap-1 mx-auto"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset demo progress</span>
            </button>
          </div>
        </div>

        {/* Right Stats & Expedition Log (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top 3 Stat Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-2xl p-5 shadow-soft text-center">
              <div className="text-3xl font-black text-[#172E26] tracking-tight">{xp}</div>
              <div className="text-xs font-semibold text-[#6E8076] mt-1">Total XP</div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-2xl p-5 shadow-soft text-center">
              <div className="text-3xl font-black text-[#172E26] tracking-tight">{streakDays}</div>
              <div className="text-xs font-semibold text-[#6E8076] mt-1">Streak days</div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-2xl p-5 shadow-soft text-center">
              <div className="text-3xl font-black text-[#172E26] tracking-tight">
                {completedMissions.length}
              </div>
              <div className="text-xs font-semibold text-[#6E8076] mt-1">Missions done</div>
            </div>
          </div>

          {/* Expedition Log Card */}
          <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-3xl p-7 shadow-soft space-y-5">
            <h3 className="text-base font-bold text-[#172E26]">Expedition log</h3>

            <div className="space-y-2.5 divide-y divide-[#F0F4F0]">
              {expeditionLog.map((log, idx) => (
                <div key={idx} className="pt-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#EAF5EE] text-[#2A6B53] flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#172E26] text-sm">{log.title}</div>
                      <div className="text-[11px] text-[#7A8E83]">{log.date}</div>
                    </div>
                  </div>
                  <span className="font-bold text-[#2A6B53] bg-[#EBF5EE] px-2.5 py-1 rounded-xl">
                    +{log.xp} XP
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#F0F4F0]">
              <button
                onClick={() => navigateTo("quest_map")}
                className="py-2.5 px-4 rounded-xl bg-[#EFF4F0] hover:bg-[#E4ECE6] text-[#2A6B53] font-bold text-xs transition-colors flex items-center gap-2"
              >
                <span>Back to the world</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
