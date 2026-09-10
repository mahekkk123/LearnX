import React from "react";
import { LayoutGrid, Map, Award, User, Target, BookOpen, ChevronRight } from "lucide-react";
import { useGameState } from "../context/GameStateContext";

export function Sidebar() {
  const { activeView, navigateTo, profile, completedMissions } = useGameState();

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
    { id: "quest_map", label: "Quest map", icon: Map, badge: "18" },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "profile", label: "My profile", icon: User },
  ];

  const todayCompleted = completedMissions.length > 1;

  return (
    <aside className="w-64 flex-shrink-0 bg-[#F8F9F5] border-r border-[#E6EDE6] flex flex-col justify-between p-5 min-h-screen select-none">
      {/* Top brand & navigation */}
      <div className="space-y-7">
        {/* Brand Logo */}
        <div
          onClick={() => navigateTo("dashboard")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#2A6B53] flex items-center justify-center text-white shadow-soft transition-transform group-hover:scale-105">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#172E26]">LearnX</span>
        </div>

        {/* Section title */}
        <div>
          <div className="text-[11px] font-bold tracking-wider text-[#8A9C91] uppercase px-3 mb-2">
            Your adventure
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-[14.5px] font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#E5EFEA] text-[#1D4A3A] shadow-soft"
                      : "text-[#5A6D63] hover:text-[#172E26] hover:bg-[#EEF4F0]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-[19px] h-[19px] ${
                        isActive ? "text-[#2A6B53]" : "text-[#758A7E]"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                        isActive
                          ? "bg-[#2A6B53] text-white"
                          : "bg-[#E3EDE6] text-[#4A6458]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom widgets */}
      <div className="space-y-4 pt-4">
        {/* Your daily goal card */}
        <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-2xl p-4 shadow-soft">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-[#172E26]">Your daily goal</span>
            <div className="w-6 h-6 rounded-full bg-[#EBF5EE] flex items-center justify-center text-[#2A6B53]">
              <Target className="w-3.5 h-3.5" />
            </div>
          </div>
          <p className="text-[12px] text-[#6E8076] leading-snug mb-3">
            A little progress, every day.
          </p>

          <div className="flex items-center justify-between text-xs font-medium text-[#465E52] mb-1.5">
            <span>{todayCompleted ? "1 / 1 mission" : "0 / 1 mission"}</span>
            <span className="text-[11px] text-[#2A6B53] font-bold">
              {todayCompleted ? "Done! 🎉" : "Let's do this!"}
            </span>
          </div>

          <div className="w-full h-2 bg-[#E9EFE9] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2A6B53] rounded-full transition-all duration-500"
              style={{ width: todayCompleted ? "100%" : "35%" }}
            />
          </div>
        </div>

        {/* User profile footer button */}
        <div
          onClick={() => navigateTo("profile")}
          className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#EEF4F0] cursor-pointer transition-colors border border-transparent hover:border-[#E2EAE3]"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#E8DDD1] text-[#7A5B3D] flex items-center justify-center font-bold text-xs shadow-sm">
              {profile.avatarInitials}
            </div>
            <div className="text-left leading-tight">
              <div className="text-[13px] font-bold text-[#172E26] flex items-center gap-1">
                <span>{profile.name}</span>
                <span className="text-[#8C9C92] font-normal">· Explorer</span>
              </div>
              <div className="text-[11px] text-[#6E8076]">{profile.role}</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[#8C9C92]" />
        </div>
      </div>
    </aside>
  );
}
