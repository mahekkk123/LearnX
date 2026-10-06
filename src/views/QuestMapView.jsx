import React, { useState } from "react";
import {
  Map,
  CheckCircle2,
  ArrowRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sparkles,
  Zap,
  Award,
  BookOpen,
  Brain,
  X,
  Target
} from "lucide-react";
import { useGameState } from "../context/GameStateContext";
import { LEVELS_DATA, BIOMES } from "../data/curriculum";
import { WorldMapArt, OceanReefArt, NovaMascot } from "../components/BiomeVectorArt";

export function QuestMapView() {
  const {
    completedMissions,
    currentMissionId,
    selectMission,
    navigateTo,
    filterBiome,
    setFilterBiome
  } = useGameState();

  const [zoomLevel, setZoomLevel] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Selected mission for drawer
  const activeMission = LEVELS_DATA.find((m) => m.level === currentMissionId) || LEVELS_DATA[0];
  const isCompleted = completedMissions.includes(activeMission.level);

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.min(1.4, Math.max(0.8, Number((prev + delta).toFixed(1)))));
  };

  const resetZoom = () => setZoomLevel(1);

  const handleNodeClick = (missionId) => {
    selectMission(missionId);
    setDrawerOpen(true);
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6 animate-fadeIn">
      {/* Top Header Section with Expedition Title and Progress Stats */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-bold tracking-widest text-[#7E9387] uppercase mb-1">
            Explore. Learn. Restore.
          </div>
          <h1 className="text-3xl font-extrabold text-[#172E26] tracking-tight mb-1">
            The Python expedition
          </h1>
          <p className="text-sm text-[#5D7267]">
            One mission at a time. Bring the world of NEXA back to life.
          </p>
        </div>

        {/* 0 / 12 missions card */}
        <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-2xl p-4 shadow-soft flex items-center gap-3.5 self-start">
          <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#2A6B53] flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-black text-[#172E26]">
              {completedMissions.length} / 12 missions
            </div>
            <div className="text-[11px] text-[#6E8076] font-medium">
              Your adventure is {Math.round((completedMissions.length / 12) * 100)}% complete
            </div>
          </div>
        </div>
      </div>

      {/* Biome Filter Bar (Exact Match with Image) */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
        {BIOMES.map((b) => {
          const isSelected = filterBiome === b.key;
          return (
            <button
              key={b.key}
              onClick={() => setFilterBiome(b.key)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                isSelected
                  ? "bg-[#FFFFFF] border-2 border-[#2A6B53] text-[#2A6B53] shadow-soft"
                  : "bg-[#F0F4F1] border border-transparent text-[#55695E] hover:bg-[#E6EDE8]"
              }`}
            >
              {b.key === "all" ? (
                <BookOpen className="w-3.5 h-3.5 text-[#2A6B53]" />
              ) : (
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: b.color }}
                />
              )}
              <span>{b.name}</span>
            </button>
          );
        })}
      </div>

      {/* Master Quest Map Card (Exact replica of media_1791282832652.png) */}
      <div className="bg-[#EDF5F0] border border-[#DEECE3] rounded-[32px] p-6 md:p-8 shadow-soft relative overflow-hidden flex flex-col justify-between min-h-[580px]">
        {/* Top Header Inside Map */}
        <div className="flex items-start justify-between z-10 mb-2">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#7E9E8C] mb-1">
              World 01 / NEXA
            </div>
            <h2 className="text-2xl font-extrabold text-[#183329] tracking-tight">
              Six biomes. One big adventure.
            </h2>
            <p className="text-xs text-[#658273] mt-0.5">
              Choose a mission to continue your story.
            </p>
          </div>
        </div>

        {/* Interactive World Map SVG Graphic */}
        <div
          className="w-full flex-1 flex items-center justify-center transition-transform duration-300 origin-center my-2"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <WorldMapArt
            activeBiome={filterBiome}
            currentMission={currentMissionId}
            completedMissions={completedMissions}
            onSelectMission={handleNodeClick}
          />
        </div>

        {/* Bottom Bar Inside Map: Legend & Zoom Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#DFECE3] z-10">
          {/* Legend */}
          <div className="flex items-center gap-5 text-xs font-semibold text-[#5D7769]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2A6B53]" />
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ECA752]" />
              <span>Current</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8FA69C]" />
              <span>Locked</span>
            </div>
          </div>

          {/* Zoom Buttons Pill (Identical to image) */}
          <div className="flex items-center gap-1.5 bg-[#FFFFFF] border border-[#DEECE3] p-1.5 rounded-2xl shadow-sm">
            <button
              onClick={() => handleZoom(-0.1)}
              className="w-8 h-8 rounded-xl hover:bg-[#F2F6F3] text-[#52665B] flex items-center justify-center transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={resetZoom}
              className="w-8 h-8 rounded-xl hover:bg-[#F2F6F3] text-[#52665B] flex items-center justify-center transition-colors"
              title="Reset Zoom"
            >
              <Target className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleZoom(0.1)}
              className="w-8 h-8 rounded-xl hover:bg-[#F2F6F3] text-[#52665B] flex items-center justify-center transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Cognitive Framework Progression Bar (Exact match with image) */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-2 text-xs text-[#5D7769]">
        <div className="flex items-center gap-2.5 font-bold text-[#1E3F35]">
          <Brain className="w-4 h-4 text-[#7A9C8D]" />
          <span>Growing how you think</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-bold">
          <span className="px-3 py-1.5 rounded-xl bg-[#E2EFE7] text-[#2A6B53]">Remember</span>
          <span className="text-[#A2BAAD]">›</span>
          <span className="px-3 py-1.5 rounded-xl bg-[#E2EFE7] text-[#2A6B53]">Understand</span>
          <span className="text-[#A2BAAD]">›</span>
          <span className="px-3 py-1.5 rounded-xl bg-[#EEF4F0] text-[#7A9386]">Apply</span>
          <span className="text-[#A2BAAD]">›</span>
          <span className="px-3 py-1.5 rounded-xl bg-[#EEF4F0] text-[#7A9386]">Analyze</span>
          <span className="text-[#A2BAAD]">›</span>
          <span className="px-3 py-1.5 rounded-xl bg-[#EEF4F0] text-[#7A9386]">Evaluate</span>
          <span className="text-[#A2BAAD]">›</span>
          <span className="px-3 py-1.5 rounded-xl bg-[#EEF4F0] text-[#7A9386]">Create</span>
        </div>
      </div>

      {/* Slide-over Mission Briefing Drawer when node is clicked */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/25 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-[#FFFFFF] h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto space-y-5 animate-slideLeft">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#EDF3ED] pb-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#2A9D8F] bg-[#E6F5F4] px-3 py-1 rounded-full">
                  {activeMission.biomeName.toUpperCase()}
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-[#F0F5F2] flex items-center justify-center text-[#7E9387]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Illustration */}
              <div className="rounded-2xl bg-[#E8F4F2] p-4 flex items-center justify-center overflow-hidden h-36 relative border border-[#D5E9E3]">
                <OceanReefArt className="w-52 h-auto" />
              </div>

              {/* Title & Info */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#EBF5EE] text-[#2A6B53] font-bold text-xs flex items-center justify-center">
                    {activeMission.level}
                  </span>
                  <span className="text-[11px] font-bold text-[#7E9186] tracking-wider uppercase">
                    {activeMission.chapter}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#172E26] tracking-tight">
                  {activeMission.title}
                </h3>
                <div className="text-xs font-semibold text-[#547063]">
                  {activeMission.subtitle}
                </div>
              </div>

              {/* Story */}
              <p className="text-xs text-[#526B5F] leading-relaxed">
                {activeMission.story}
              </p>

              {/* Thinking level badge */}
              <div className="flex items-center gap-2 bg-[#F6FAF7] border border-[#E4EFE7] rounded-xl p-2.5 text-[11px]">
                <Brain className="w-3.5 h-3.5 text-[#2A6B53]" />
                <span className="text-[#6D8276] font-medium">Thinking level:</span>
                <span className="font-bold text-[#172E26]">{activeMission.bloomsTaxonomy}</span>
              </div>

              {/* Rewards */}
              <div className="flex items-center justify-between text-xs pt-1 border-t border-[#EDF3ED]">
                <div className="flex items-center gap-1.5 font-bold text-[#2A6B53]">
                  <Zap className="w-3.5 h-3.5 fill-[#2A6B53]" />
                  <span>+{activeMission.rewardXP} XP</span>
                </div>
                {activeMission.badge && (
                  <div className="flex items-center gap-1.5 font-semibold text-[#7E57C2]">
                    <Award className="w-3.5 h-3.5" />
                    <span>{activeMission.badge.name}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#EDF3ED]">
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  navigateTo("mission_lab", activeMission.level);
                }}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#2A6B53] hover:bg-[#205541] active:scale-[0.98] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>{isCompleted ? "Revisit mission" : "Begin mission"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setDrawerOpen(false)}
                className="w-full py-2.5 text-xs font-bold text-[#647C70] hover:text-[#172E26] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
