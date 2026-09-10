import React from "react";

// NOVA Friendly Robot Companion Mascot
export function NovaMascot({ size = 48, className = "" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-2xl bg-[#EAF4EE] p-2 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Antenna */}
        <line x1="32" y1="12" x2="32" y2="4" stroke="#2A6B53" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="4" r="3" fill="#52B788" />

        {/* Ears / Headset */}
        <rect x="8" y="24" width="6" height="16" rx="3" fill="#2A6B53" />
        <rect x="50" y="24" width="6" height="16" rx="3" fill="#2A6B53" />

        {/* Head */}
        <rect x="12" y="14" width="40" height="34" rx="14" fill="#FFFFFF" stroke="#2A6B53" strokeWidth="3" />

        {/* Screen Face */}
        <rect x="18" y="20" width="28" height="20" rx="8" fill="#E8F5E9" />

        {/* Friendly Glowing Eyes */}
        <circle cx="26" cy="30" r="3.5" fill="#2D6A4F" />
        <circle cx="38" cy="30" r="3.5" fill="#2D6A4F" />

        {/* Cheerful Smile */}
        <path d="M28 35 Q32 38 36 35" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Neck */}
        <rect x="28" y="48" width="8" height="4" rx="2" fill="#52B788" />

        {/* Shoulders */}
        <path d="M20 54 Q32 51 44 54" stroke="#2A6B53" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Ocean Reef Vector Illustration (Hero Card & Island)
export function OceanReefArt({ className = "w-full h-auto" }) {
  return (
    <svg
      viewBox="0 0 400 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Soft warm sun */}
      <circle cx="330" cy="50" r="32" fill="#FFF4D4" />

      {/* Gentle sea background */}
      <path
        d="M0 130 C120 120 280 140 400 125 L400 220 L0 220 Z"
        fill="#CDECE8"
        opacity="0.7"
      />

      {/* Ocean waves lines */}
      <path
        d="M20 145 C60 145 90 148 130 148"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M200 152 C240 152 280 155 320 155"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Floating Island Base */}
      <ellipse cx="230" cy="138" rx="140" ry="24" fill="#88C4B8" />
      <ellipse cx="230" cy="132" rx="136" ry="20" fill="#A8DCD3" />

      {/* Pier / Wooden Dock */}
      <path d="M165 138 L140 152" stroke="#C49B71" strokeWidth="5" strokeLinecap="round" />
      <path d="M175 142 L150 156" stroke="#C49B71" strokeWidth="5" strokeLinecap="round" />
      <path d="M142 144 L175 134" stroke="#D8B185" strokeWidth="4" strokeLinecap="round" />

      {/* Research Dome */}
      <ellipse cx="235" cy="115" rx="44" ry="12" fill="#D0E9E3" />
      <path
        d="M190 112 C190 70 280 70 280 112 Z"
        fill="#FFFFFF"
        stroke="#7BBFB3"
        strokeWidth="3"
      />
      {/* Dome Top Finial */}
      <line x1="235" y1="70" x2="235" y2="58" stroke="#C99450" strokeWidth="3" />
      <circle cx="235" cy="56" r="4" fill="#E8A856" />

      {/* Dome Pillars / Windows */}
      <rect x="200" y="96" width="6" height="14" rx="3" fill="#69B4A7" />
      <rect x="214" y="96" width="6" height="14" rx="3" fill="#69B4A7" />
      <rect x="228" y="96" width="6" height="14" rx="3" fill="#69B4A7" />
      <rect x="242" y="96" width="6" height="14" rx="3" fill="#69B4A7" />
      <rect x="256" y="96" width="6" height="14" rx="3" fill="#69B4A7" />
      <rect x="270" y="96" width="6" height="14" rx="3" fill="#69B4A7" />

      {/* Pine Trees */}
      <path d="M300 130 L310 105 L320 130 Z" fill="#528E7C" />
      <path d="M303 120 L310 102 L317 120 Z" fill="#63A591" />

      <path d="M322 135 L330 115 L338 135 Z" fill="#4B8272" />

      {/* Distant seagulls */}
      <path d="M140 60 Q145 55 150 60 Q155 55 160 60" stroke="#7AAEA5" strokeWidth="2" fill="none" />
      <path d="M170 70 Q174 66 178 70 Q182 66 186 70" stroke="#7AAEA5" strokeWidth="2" fill="none" />
    </svg>
  );
}

// Full Stylized 6-Biome Interactive Map Graphic
export function WorldMapArt({
  activeBiome = "all",
  currentMission = 2,
  completedMissions = [1],
  onSelectMission = () => {}
}) {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center select-none overflow-hidden">
      <svg
        viewBox="0 0 880 540"
        className="w-full h-full max-h-[560px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Background grid & contours */}
        <g opacity="0.4">
          <circle cx="440" cy="270" r="380" stroke="#E2E8DE" strokeDasharray="6 6" strokeWidth="1.5" />
          <circle cx="440" cy="270" r="260" stroke="#E2E8DE" strokeDasharray="6 6" strokeWidth="1.5" />
        </g>

        {/* Dotted Trails connecting the biomes */}
        <g stroke="#BAC9BF" strokeWidth="3" strokeDasharray="8 8" strokeLinecap="round">
          {/* Ocean to Forest */}
          <path d="M280 370 C240 310 240 270 270 230" />
          {/* Forest to Canyon */}
          <path d="M360 210 C400 230 420 280 440 350" />
          {/* Canyon to Alpine */}
          <path d="M480 330 C490 260 480 230 520 180" />
          {/* Alpine to City */}
          <path d="M570 190 C600 220 620 260 640 320" />
          {/* City to Glacier */}
          <path d="M640 360 C640 400 630 420 620 440" />
        </g>

        {/* =================================================== */}
        {/* BIOME 1: UNDERSEA REEF (Bottom Left, Missions 1, 2) */}
        {/* =================================================== */}
        <g
          className={`cursor-pointer transition-all duration-300 ${
            activeBiome === "all" || activeBiome === "ocean" ? "opacity-100" : "opacity-35"
          }`}
        >
          {/* Island Landmass */}
          <ellipse cx="280" cy="385" rx="95" ry="42" fill="#D3ECE7" />
          <ellipse cx="280" cy="378" rx="88" ry="36" fill="#E6F5F2" />

          {/* Research Dome Icon */}
          <path d="M260 365 C260 340 300 340 300 365 Z" fill="#FFFFFF" stroke="#2A9D8F" strokeWidth="2.5" />
          <line x1="280" y1="340" x2="280" y2="330" stroke="#C99450" strokeWidth="2" />
          <circle cx="280" cy="328" r="3" fill="#E8A856" />
          {/* Pier */}
          <line x1="235" y1="390" x2="215" y2="405" stroke="#C49B71" strokeWidth="4" strokeLinecap="round" />

          {/* Label */}
          <text x="280" y="440" textAnchor="middle" fill="#1E4D45" fontSize="13" fontWeight="700" letterSpacing="0.06em">
            UNDERSEA REEF
          </text>
          <text x="280" y="454" textAnchor="middle" fill="#6A8780" fontSize="10" fontWeight="500">
            01 · PRINT & VARIABLES
          </text>

          {/* Mission 1 Node: First Day */}
          <g
            transform="translate(245, 385)"
            onClick={() => onSelectMission(1)}
            className="cursor-pointer group"
          >
            <circle cx="0" cy="0" r="14" fill="#2A6B53" className="shadow-md transition-transform group-hover:scale-110" />
            <path d="M-5 0 L-1 4 L5 -4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="0" y="24" textAnchor="middle" fill="#2A6B53" fontSize="10" fontWeight="600">First day</text>
          </g>

          {/* Mission 2 Node: Identity (Current / Start Here) */}
          <g
            transform="translate(320, 375)"
            onClick={() => onSelectMission(2)}
            className="cursor-pointer group"
          >
            {/* Start Here Flag Badge */}
            <rect x="-26" y="-36" width="52" height="18" rx="9" fill="#F4A261" />
            <text x="0" y="-24" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800" letterSpacing="0.05em">START HERE</text>
            <polygon points="-3,-18 3,-18 0,-14" fill="#F4A261" />

            {/* Pulsing ring */}
            <circle cx="0" cy="0" r="19" fill="#E76F51" opacity="0.25" className="animate-ping" />
            <circle cx="0" cy="0" r="16" fill="#F4A261" stroke="#FFFFFF" strokeWidth="3" className="shadow-md transition-transform group-hover:scale-110" />
            <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">2</text>
            <text x="0" y="26" textAnchor="middle" fill="#8C531F" fontSize="10" fontWeight="600">Identity</text>
          </g>
        </g>

        {/* =================================================== */}
        {/* BIOME 2: ECO WOODS (Mid-Left, Missions 3, 4) */}
        {/* =================================================== */}
        <g
          className={`cursor-pointer transition-all duration-300 ${
            activeBiome === "all" || activeBiome === "forest" ? "opacity-100" : "opacity-35"
          }`}
        >
          {/* Island Landmass */}
          <ellipse cx="270" cy="205" rx="90" ry="42" fill="#D8EDE0" />
          <ellipse cx="270" cy="198" rx="84" ry="36" fill="#EBF6EF" />

          {/* Forest Trees & Eco Cabin */}
          <rect x="250" y="165" width="28" height="22" rx="4" fill="#FFFFFF" stroke="#2D6A4F" strokeWidth="2" />
          <path d="M246 167 L264 150 L282 167 Z" fill="#2D6A4F" />
          {/* Trees */}
          <circle cx="230" cy="175" r="12" fill="#52B788" />
          <circle cx="295" cy="170" r="14" fill="#40916C" />

          {/* Label */}
          <text x="270" y="260" textAnchor="middle" fill="#1C4B37" fontSize="13" fontWeight="700" letterSpacing="0.06em">
            ECO WOODS
          </text>
          <text x="270" y="274" textAnchor="middle" fill="#5F8372" fontSize="10" fontWeight="500">
            02 · INPUT & LOGIC
          </text>

          {/* Mission 3 Node: User Terminal */}
          <g
            transform="translate(295, 205)"
            onClick={() => onSelectMission(3)}
            className="cursor-pointer group"
          >
            <circle
              cx="0" cy="0" r="14"
              fill={completedMissions.includes(3) ? "#2A6B53" : "#FFFFFF"}
              stroke={completedMissions.includes(3) ? "#2A6B53" : "#C4D4CC"}
              strokeWidth="2.5"
              className="transition-transform group-hover:scale-110"
            />
            {completedMissions.includes(3) ? (
              <path d="M-5 0 L-1 4 L5 -4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <text x="0" y="4" textAnchor="middle" fill="#718B7E" fontSize="11" fontWeight="700">3</text>
            )}
            <text x="0" y="24" textAnchor="middle" fill="#5A7769" fontSize="9" fontWeight="600">User Terminal</text>
          </g>

          {/* Mission 4 Node: Security Gate */}
          <g
            transform="translate(230, 215)"
            onClick={() => onSelectMission(4)}
            className="cursor-pointer group"
          >
            <circle
              cx="0" cy="0" r="14"
              fill={completedMissions.includes(4) ? "#2A6B53" : "#FFFFFF"}
              stroke={completedMissions.includes(4) ? "#2A6B53" : "#C4D4CC"}
              strokeWidth="2.5"
              className="transition-transform group-hover:scale-110"
            />
            {completedMissions.includes(4) ? (
              <path d="M-5 0 L-1 4 L5 -4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <text x="0" y="4" textAnchor="middle" fill="#718B7E" fontSize="11" fontWeight="700">4</text>
            )}
            <text x="0" y="24" textAnchor="middle" fill="#5A7769" fontSize="9" fontWeight="600">Security Gate</text>
          </g>
        </g>

        {/* =================================================== */}
        {/* BIOME 3: CANYON VAULT (Center-Right, Missions 5, 6) */}
        {/* =================================================== */}
        <g
          className={`cursor-pointer transition-all duration-300 ${
            activeBiome === "all" || activeBiome === "canyon" ? "opacity-100" : "opacity-35"
          }`}
        >
          {/* Island Landmass */}
          <ellipse cx="450" cy="370" rx="92" ry="44" fill="#F4E3C8" />
          <ellipse cx="450" cy="362" rx="86" ry="38" fill="#FDF5E8" />

          {/* Canyon Rocks & Vault Box */}
          <rect x="420" y="330" width="26" height="24" rx="4" fill="#FFFFFF" stroke="#C98B4B" strokeWidth="2" />
          <path d="M410 350 L433 325 L456 350 Z" fill="#D4A373" opacity="0.6" />
          {/* Cactus */}
          <line x1="390" y1="345" x2="390" y2="365" stroke="#7BA05B" strokeWidth="3" strokeLinecap="round" />
          <path d="M385 352 H395" stroke="#7BA05B" strokeWidth="2.5" strokeLinecap="round" />

          {/* Label */}
          <text x="450" y="430" textAnchor="middle" fill="#784B1F" fontSize="13" fontWeight="700" letterSpacing="0.06em">
            CANYON VAULT
          </text>
          <text x="450" y="444" textAnchor="middle" fill="#A87A4F" fontSize="10" fontWeight="500">
            03 · LOOPS & LISTS
          </text>

          {/* Mission 5 Node: Automation */}
          <g
            transform="translate(425, 375)"
            onClick={() => onSelectMission(5)}
            className="cursor-pointer group"
          >
            <circle
              cx="0" cy="0" r="14"
              fill={completedMissions.includes(5) ? "#2A6B53" : "#FFFFFF"}
              stroke={completedMissions.includes(5) ? "#2A6B53" : "#DDC5A8"}
              strokeWidth="2.5"
              className="transition-transform group-hover:scale-110"
            />
            {completedMissions.includes(5) ? (
              <path d="M-5 0 L-1 4 L5 -4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <text x="0" y="4" textAnchor="middle" fill="#997042" fontSize="11" fontWeight="700">5</text>
            )}
            <text x="0" y="24" textAnchor="middle" fill="#8C663D" fontSize="9" fontWeight="600">Automation</text>
          </g>

          {/* Mission 6 Node: Data Recovery */}
          <g
            transform="translate(485, 365)"
            onClick={() => onSelectMission(6)}
            className="cursor-pointer group"
          >
            <circle
              cx="0" cy="0" r="14"
              fill={completedMissions.includes(6) ? "#2A6B53" : "#FFFFFF"}
              stroke={completedMissions.includes(6) ? "#2A6B53" : "#DDC5A8"}
              strokeWidth="2.5"
              className="transition-transform group-hover:scale-110"
            />
            {completedMissions.includes(6) ? (
              <path d="M-5 0 L-1 4 L5 -4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <text x="0" y="4" textAnchor="middle" fill="#997042" fontSize="11" fontWeight="700">6</text>
            )}
            <text x="0" y="24" textAnchor="middle" fill="#8C663D" fontSize="9" fontWeight="600">Data Recovery</text>
          </g>
        </g>

        {/* =================================================== */}
        {/* BIOME 4: MOUNTAIN PASS (Top Center, Missions 7, 8) */}
        {/* =================================================== */}
        <g
          className={`cursor-pointer transition-all duration-300 ${
            activeBiome === "all" || activeBiome === "alpine" ? "opacity-100" : "opacity-35"
          }`}
        >
          {/* Island Landmass */}
          <ellipse cx="510" cy="175" rx="90" ry="42" fill="#DDE4ED" />
          <ellipse cx="510" cy="168" rx="84" ry="36" fill="#F1F4F8" />

          {/* Mountains Peaks */}
          <polygon points="480,150 495,120 510,150" fill="#94A3B8" />
          <polygon points="491,128 495,120 499,128" fill="#FFFFFF" />

          <polygon points="510,152 530,115 550,152" fill="#64748B" />
          <polygon points="524,127 530,115 536,127" fill="#FFFFFF" />

          {/* Label */}
          <text x="510" y="225" textAnchor="middle" fill="#334155" fontSize="13" fontWeight="700" letterSpacing="0.06em">
            MOUNTAIN PASS
          </text>
          <text x="510" y="239" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="500">
            04 · FUNCTIONS & ERRORS
          </text>

          {/* Mission 7 Node: Code Builder */}
          <g
            transform="translate(485, 175)"
            onClick={() => onSelectMission(7)}
            className="cursor-pointer group"
          >
            <circle
              cx="0" cy="0" r="14"
              fill={completedMissions.includes(7) ? "#2A6B53" : "#FFFFFF"}
              stroke={completedMissions.includes(7) ? "#2A6B53" : "#CBD5E1"}
              strokeWidth="2.5"
              className="transition-transform group-hover:scale-110"
            />
            {completedMissions.includes(7) ? (
              <path d="M-5 0 L-1 4 L5 -4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <text x="0" y="4" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="700">7</text>
            )}
            <text x="0" y="24" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="600">Code Builder</text>
          </g>

          {/* Mission 8 Node: Error Detector */}
          <g
            transform="translate(545, 175)"
            onClick={() => onSelectMission(8)}
            className="cursor-pointer group"
          >
            <circle
              cx="0" cy="0" r="14"
              fill={completedMissions.includes(8) ? "#2A6B53" : "#FFFFFF"}
              stroke={completedMissions.includes(8) ? "#2A6B53" : "#CBD5E1"}
              strokeWidth="2.5"
              className="transition-transform group-hover:scale-110"
            />
            {completedMissions.includes(8) ? (
              <path d="M-5 0 L-1 4 L5 -4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <text x="0" y="4" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="700">8</text>
            )}
            <text x="0" y="24" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="600">Error Detector</text>
          </g>
        </g>

        {/* =================================================== */}
        {/* BIOME 5: METRO GRID (Right Mid, Levels 9-11) */}
        {/* =================================================== */}
        <g
          className={`transition-all duration-300 ${
            activeBiome === "all" || activeBiome === "city" ? "opacity-100" : "opacity-35"
          }`}
        >
          {/* Island Landmass */}
          <ellipse cx="660" cy="300" rx="80" ry="38" fill="#F8DFD7" />
          <ellipse cx="660" cy="294" rx="74" ry="32" fill="#FDF3F0" />

          {/* City Skyline */}
          <rect x="635" y="255" width="16" height="32" rx="3" fill="#E07A5F" />
          <rect x="655" y="245" width="22" height="42" rx="3" fill="#F4A261" />
          <rect x="680" y="260" width="14" height="27" rx="3" fill="#E76F51" />

          {/* Level 9-11 Pill */}
          <rect x="630" y="295" width="60" height="18" rx="9" fill="#FFFFFF" stroke="#E07A5F" strokeWidth="1.5" />
          <text x="660" y="307" textAnchor="middle" fill="#C45A3E" fontSize="9" fontWeight="700">✦ LEVELS 9–11</text>

          {/* Label */}
          <text x="660" y="350" textAnchor="middle" fill="#8A3622" fontSize="12" fontWeight="700" letterSpacing="0.06em">
            METRO GRID
          </text>
          <text x="660" y="364" textAnchor="middle" fill="#B36553" fontSize="9" fontWeight="500">
            05 · OOP & MODULES
          </text>
        </g>

        {/* =================================================== */}
        {/* BIOME 6: FROST CORE (Bottom Right, Levels 12-18) */}
        {/* =================================================== */}
        <g
          className={`transition-all duration-300 ${
            activeBiome === "all" || activeBiome === "glacier" ? "opacity-100" : "opacity-35"
          }`}
        >
          {/* Island Landmass */}
          <ellipse cx="630" cy="455" rx="84" ry="38" fill="#D3EBF2" />
          <ellipse cx="630" cy="448" rx="78" ry="32" fill="#EDF7FA" />

          {/* Ice Spikes */}
          <polygon points="600,440 615,405 625,440" fill="#90CDF4" />
          <polygon points="620,442 638,395 650,442" fill="#63B3ED" />
          <polygon points="645,442 658,410 670,442" fill="#4299E1" />

          {/* Level 12-18 Pill */}
          <rect x="600" y="445" width="60" height="18" rx="9" fill="#FFFFFF" stroke="#4299E1" strokeWidth="1.5" />
          <text x="630" y="457" textAnchor="middle" fill="#2B6CB0" fontSize="9" fontWeight="700">✦ LEVELS 12–18</text>

          {/* Label */}
          <text x="630" y="500" textAnchor="middle" fill="#1A4971" fontSize="12" fontWeight="700" letterSpacing="0.06em">
            FROST CORE
          </text>
          <text x="630" y="514" textAnchor="middle" fill="#4A7596" fontSize="9" fontWeight="500">
            06 · ALGO & CREATE
          </text>
        </g>

        {/* Compass Rose in top-right */}
        <g transform="translate(730, 80)" opacity="0.6">
          <circle cx="0" cy="0" r="16" stroke="#94A3B8" strokeWidth="1.5" fill="#FFFFFF" />
          <text x="0" y="-20" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="700">N</text>
          <polygon points="0,-12 4,0 0,2 -4,0" fill="#E76F51" />
          <polygon points="0,12 4,0 0,-2 -4,0" fill="#94A3B8" />
        </g>
      </svg>
    </div>
  );
}
