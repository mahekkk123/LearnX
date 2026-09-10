import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { ArrowRight, RotateCcw, Check, Sparkles, Map } from "lucide-react";
import { NovaMascot } from "./BiomeVectorArt";
import { soundEngine } from "../utils/audio";

export function CelebrationModal({
  isOpen,
  levelData,
  rewardXP,
  unlockedBadge,
  onNextMission,
  onReplay,
  onBackToMap
}) {
  useEffect(() => {
    if (isOpen) {
      if (unlockedBadge) {
        soundEngine.playBadgeUnlock();
      } else {
        soundEngine.playVictory();
      }

      // Cozy celebratory pastel confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2A6B53", "#52B788", "#F4A261", "#E76F51", "#2A9D8F", "#E9C46A"]
        });
      } catch (e) {
        // Fallback gracefully
      }
    }
  }, [isOpen, unlockedBadge]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172E26]/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFFFFF] border border-[#E2EAE3] rounded-3xl p-8 max-w-md w-full shadow-float text-center relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-16 -left-16 w-36 h-36 bg-[#E8F5EE] rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-[#FEF6E9] rounded-full blur-2xl pointer-events-none" />

        {/* NOVA Mascot Avatar */}
        <div className="relative mx-auto mb-4 flex items-center justify-center">
          <NovaMascot size={72} />
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#2A6B53] text-white flex items-center justify-center shadow-md">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
        </div>

        {/* Level complete title */}
        <span className="text-[11px] font-bold tracking-widest text-[#2A6B53] uppercase bg-[#EBF5EE] px-3 py-1 rounded-full inline-block mb-2">
          Mission Solved
        </span>
        <h2 className="text-2xl font-black text-[#172E26] tracking-tight mb-1">
          {levelData?.title || "Mission Complete!"}
        </h2>
        <p className="text-xs text-[#63786D] mb-6">
          {levelData?.subtitle || "Terminal communication restored successfully."}
        </p>

        {/* XP Reward card */}
        <div className="flex items-center justify-center gap-2 bg-[#F6FAF7] border border-[#E2EFE5] rounded-2xl py-3 px-4 mb-4">
          <Sparkles className="w-5 h-5 text-[#E69D3B] fill-[#E69D3B] animate-bounce" />
          <span className="text-lg font-black text-[#2A6B53]">+{rewardXP} XP</span>
          <span className="text-xs font-semibold text-[#668073]">Added to your explorer ledger</span>
        </div>

        {/* Badge Unlocked Card (if any) */}
        {unlockedBadge && (
          <div className="bg-[#FEF9EE] border border-[#F8E7C0] rounded-2xl p-4 mb-6 text-left flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-soft flex items-center justify-center text-2xl flex-shrink-0">
              {unlockedBadge.icon}
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#A86820]">
                ✦ New Badge Unlocked!
              </div>
              <div className="text-sm font-bold text-[#172E26]">{unlockedBadge.name}</div>
              <div className="text-[11px] text-[#7C6E5E] leading-snug">{unlockedBadge.description}</div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-2.5">
          <button
            onClick={onNextMission}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#2A6B53] hover:bg-[#205541] active:scale-[0.98] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Continue to Next Mission</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onReplay}
              className="py-2.5 px-4 rounded-xl bg-[#F0F5F1] hover:bg-[#E5EFE8] text-[#3B5448] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Review Code</span>
            </button>

            <button
              onClick={onBackToMap}
              className="py-2.5 px-4 rounded-xl bg-[#F0F5F1] hover:bg-[#E5EFE8] text-[#3B5448] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Map className="w-3.5 h-3.5" />
              <span>Quest Map</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
