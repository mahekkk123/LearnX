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
  Brain
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

  // Selected mission for the right drawer
  const activeMission = LEVELS_DATA.find((m) => m.level === currentMissionId) || LEVELS_DATA[1];
  const isCompleted = completedMissions.includes(activeMission.level);

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.min(1.4, Math.max(0.8, Number((prev + delta).toFixed(1)))));
  };

  const resetZoom = () => setZoomLevel(1);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-fadeIn">
      {/* Header section with Expedition Title and Progress Stats */}
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

        {/* 1 / 18 missions card */}
        <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-2xl p-4 shadow-soft flex items-center gap-3.5 self-start">
          <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#2A6B53] flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-black text-[#172E26]">
              {completedMissions.length} / 18 missions
            </div>
            <div className="text-[11px] text-[#6E8076] font-medium">
              Your adventure is {Math.round((completedMissions.length / 18) * 100)}% complete
            </div>
          </div>
        </div>
      </div>

      {/* Biome Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {BIOMES.map((b) => {
          const isSelected = filterBiome === b.key;
          return (
            <button
              key={b.key}
              onClick={() => setFilterBiome(b.key)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                isSelected
                  ? "bg-[#2A6B53] text-white shadow-soft"
                  : "bg-[#FFFFFF] border border-[#E4ECE4] text-[#55695E] hover:bg-[#F2F6F3]"
              }`}
            >
              {b.key !== "all" && (
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: b.color }}
                />
              )}
              <span>{b.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content Grid: Map on Left, Mission Details Drawer on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Map Canvas Card */}
        <div className="lg:col-span-2 bg-[#FFFFFF] border border-[#E4ECE4] rounded-3xl p-6 shadow-soft relative overflow-hidden flex flex-col justify-between min-h-[560px]">
          {/* Top subtle tag */}
          <div className="flex items-center justify-between mb-2 z-10">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#7E9387]">
              World 01 / NEXA
            </div>
            <div className="text-xs font-semibold text-[#5D7267]">
              Six biomes. One big adventure.
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
              onSelectMission={(mid) => selectMission(mid)}
            />
          </div>

          {/* Map Controls & Legend */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#EDF3ED] z-10">
            {/* Legend */}
            <div className="flex items-center gap-4 text-[11px] font-semibold text-[#667A70]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2A6B53]" />
                <span>Completed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F4A261]" />
                <span>Current</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]" />
                <span>Locked</span>
              </div>
            </div>

            {/* Zoom Buttons */}
            <div className="flex items-center gap-1 bg-[#F5F8F5] border border-[#E2EAE3] p-1 rounded-xl">
              <button
                onClick={() => handleZoom(-0.1)}
                className="w-7 h-7 rounded-lg hover:bg-white text-[#52665B] flex items-center justify-center transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={resetZoom}
                className="w-7 h-7 rounded-lg hover:bg-white text-[#52665B] flex items-center justify-center transition-colors"
                title="Reset Zoom"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleZoom(0.1)}
                className="w-7 h-7 rounded-lg hover:bg-white text-[#52665B] flex items-center justify-center transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Drawer: Selected Mission Details (Matching Screenshot 3) */}
        <div className="space-y-4">
          <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-3xl p-6 shadow-soft space-y-5">
            {/* Drawer Header & Mission Tag */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#2A9D8F] bg-[#E6F5F4] px-3 py-1 rounded-full">
                {activeMission.biomeName.toUpperCase()}
              </span>
              <span className="text-xs font-bold text-[#8C9C92]">
                0{activeMission.level} / 18
              </span>
            </div>

            {/* Illustration Graphic */}
            <div className="rounded-2xl bg-[#E8F4F2] p-4 flex items-center justify-center overflow-hidden h-32 relative">
              <OceanReefArt className="w-48 h-auto" />
            </div>

            {/* Mission Title & Info */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#F5F8F5] border border-[#E2EAE3] flex items-center justify-center font-bold text-sm text-[#172E26]">
                  {activeMission.level}
                </span>
                <span className="text-[11px] font-bold text-[#7E9186] tracking-wider uppercase">
                  {activeMission.chapter}
                </span>
              </div>

              <h2 className="text-2xl font-black text-[#172E26] tracking-tight pt-1">
                {activeMission.title}
              </h2>
              <div className="text-xs font-semibold text-[#547063]">
                {activeMission.subtitle}
              </div>
            </div>

            {/* Narrative Story */}
            <p className="text-xs text-[#526B5F] leading-relaxed">
              {activeMission.story}
            </p>

            {/* Bloom's Thinking Level badge */}
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

            {/* Begin / Revisit Mission Action Button */}
            <button
              onClick={() => navigateTo("mission_lab", activeMission.level)}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#2A6B53] hover:bg-[#205541] active:scale-[0.98] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>{isCompleted ? "Revisit mission" : "Begin mission"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* NOVA Companion Tip Card */}
          <div className="bg-[#EFF7F2] border border-[#D5EADB] rounded-2xl p-4 shadow-soft flex items-start gap-3.5">
            <NovaMascot size={40} className="flex-shrink-0" />
            <div>
              <div className="text-[10px] font-bold tracking-widest text-[#2A6B53] uppercase mb-0.5">
                NOVA · Your companion
              </div>
              <p className="text-xs text-[#3E5C4E] italic leading-relaxed">
                “{activeMission.novaTip}”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Bloom's Taxonomy Cognitive Progression */}
      <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-2xl p-4 shadow-soft flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#172E26]">
          <Brain className="w-4 h-4 text-[#2A6B53]" />
          <span>Growing how you think</span>
        </div>
        <div className="flex items-center gap-2">
          {["Remember", "Understand", "Apply", "Analyze", "Evaluate", "Create"].map(
            (level, idx) => (
              <span
                key={level}
                className={`text-[11px] px-3 py-1 rounded-xl font-semibold ${
                  idx <= 3
                    ? "bg-[#EBF5EE] text-[#2A6B53]"
                    : "bg-[#F3F6F3] text-[#8C9C92]"
                }`}
              >
                {level}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
