import React from "react";

// NOVA Friendly Robot Companion Mascot
export function NovaMascot({ size = 48, className = "" }) {
  return (
    <div
      className={"relative inline-flex items-center justify-center rounded-2xl bg-[#EAF4EE] p-2 " + className}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <line x1="32" y1="12" x2="32" y2="4" stroke="#2A6B53" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="4" r="3" fill="#52B788" />
        <rect x="8" y="24" width="6" height="16" rx="3" fill="#2A6B53" />
        <rect x="50" y="24" width="6" height="16" rx="3" fill="#2A6B53" />
        <rect x="12" y="14" width="40" height="34" rx="14" fill="#FFFFFF" stroke="#2A6B53" strokeWidth="3" />
        <rect x="18" y="20" width="28" height="20" rx="8" fill="#E8F5E9" />
        <circle cx="26" cy="30" r="3.5" fill="#2D6A4F" />
        <circle cx="38" cy="30" r="3.5" fill="#2D6A4F" />
        <path d="M28 35 Q32 38 36 35" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" fill="none" />
        <rect x="28" y="48" width="8" height="4" rx="2" fill="#52B788" />
        <path d="M20 54 Q32 51 44 54" stroke="#2A6B53" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Ocean Reef Hero Card Illustration
export function OceanReefArt({ className = "w-full h-auto" }) {
  return (
    <svg
      viewBox="0 0 400 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="330" cy="50" r="32" fill="#FFF4D4" />
      <path d="M0 130 C120 120 280 140 400 125 L400 220 L0 220 Z" fill="#CDECE8" opacity="0.7" />
      <path d="M20 145 C60 145 90 148 130 148" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M200 152 C240 152 280 155 320 155" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <ellipse cx="230" cy="138" rx="140" ry="24" fill="#88C4B8" />
      <ellipse cx="230" cy="132" rx="136" ry="20" fill="#A8DCD3" />
      <path d="M165 138 L140 152" stroke="#C49B71" strokeWidth="5" strokeLinecap="round" />
      <path d="M175 142 L150 156" stroke="#C49B71" strokeWidth="5" strokeLinecap="round" />
      <path d="M142 144 L175 134" stroke="#D8B185" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="235" cy="115" rx="44" ry="12" fill="#D0E9E3" />
      <path d="M190 112 C190 70 280 70 280 112 Z" fill="#FFFFFF" stroke="#7BBFB3" strokeWidth="3" />
      <line x1="235" y1="70" x2="235" y2="58" stroke="#C99450" strokeWidth="3" />
      <circle cx="235" cy="56" r="4" fill="#E8A856" />
      <rect x="200" y="96" width="6" height="14" rx="3" fill="#69B4A7" />
      <rect x="214" y="96" width="6" height="14" rx="3" fill="#69B4A7" />
      <rect x="228" y="96" width="6" height="14" rx="3" fill="#69B4A7" />
      <rect x="242" y="96" width="6" height="14" rx="3" fill="#69B4A7" />
      <rect x="256" y="96" width="6" height="14" rx="3" fill="#69B4A7" />
      <rect x="270" y="96" width="6" height="14" rx="3" fill="#69B4A7" />
      <path d="M300 130 L310 105 L320 130 Z" fill="#528E7C" />
      <path d="M303 120 L310 102 L317 120 Z" fill="#63A591" />
      <path d="M322 135 L330 115 L338 135 Z" fill="#4B8272" />
      <path d="M140 60 Q145 55 150 60 Q155 55 160 60" stroke="#7AAEA5" strokeWidth="2" fill="none" />
      <path d="M170 70 Q174 66 178 70 Q182 66 186 70" stroke="#7AAEA5" strokeWidth="2" fill="none" />
    </svg>
  );
}

// Exact Map Node matching media_1791282832652.png
function LevelNode({
  x,
  y,
  level,
  name,
  status = "locked", // "completed" | "current" | "locked"
  showStartBadge = false,
  onClick
}) {
  const isCompleted = status === "completed";
  const isCurrent = status === "current";

  return (
    <g
      transform={"translate(" + x + ", " + y + ")"}
      onClick={onClick}
      className="cursor-pointer group select-none"
    >
      {/* START HERE Badge (Exact replica with white rounded pill) */}
      {showStartBadge && (
        <g transform="translate(0, -28)">
          <rect
            x="-30"
            y="-13"
            width="60"
            height="18"
            rx="9"
            fill="#FFFFFF"
            stroke="#DCE5E0"
            strokeWidth="1.2"
            filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.06))"
          />
          <text
            x="0"
            y="-1"
            textAnchor="middle"
            fill="#4F6D5F"
            fontSize="8"
            fontWeight="800"
            letterSpacing="0.04em"
          >
            START HERE
          </text>
          {/* Downward triangle pointer */}
          <polygon points="-3.5,5 3.5,5 0,9" fill="#FFFFFF" stroke="#DCE5E0" strokeWidth="1" />
          <polygon points="-3,5 3,5 0,8.5" fill="#FFFFFF" />
        </g>
      )}

      {/* Pulsing ring for current level */}
      {isCurrent && (
        <circle cx="0" cy="0" r="19" fill="#ECA752" opacity="0.3" className="animate-ping origin-center" />
      )}

      {/* Outer Circle Ring */}
      <circle
        cx="0"
        cy="0"
        r="15"
        fill={isCompleted ? "#2A6B53" : isCurrent ? "#ECA752" : "#FFFFFF"}
        stroke={isCompleted ? "#2A6B53" : isCurrent ? "#FFFFFF" : "#CBD8D2"}
        strokeWidth={isCurrent ? "2.5" : "1.8"}
        filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.1))"
        className="transition-transform group-hover:scale-110"
      />

      {/* Node Content */}
      {isCompleted ? (
        <path
          d="M-4.5 0 L-1.5 3.5 L4.5 -3.5"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : isCurrent ? (
        <text
          x="0"
          y="4.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="12"
          fontWeight="900"
        >
          {level}
        </text>
      ) : (
        /* Minimal Lock Glyph matching screenshot */
        <g transform="translate(-4.5, -5)">
          <rect x="1" y="4" width="7" height="5.5" rx="1.5" fill="#8FA69C" />
          <path d="M2.5 4 V2.8 C2.5 1.5 6.5 1.5 6.5 2.8 V4" stroke="#8FA69C" strokeWidth="1.3" fill="none" strokeLinecap="round" />
        </g>
      )}

      {/* Subtitle label under node */}
      {name && (
        <text
          x="0"
          y="25"
          textAnchor="middle"
          fill={isCurrent ? "#9A5B18" : isCompleted ? "#2A6B53" : "#627B70"}
          fontSize="9"
          fontWeight="700"
          className="transition-colors group-hover:fill-[#172E26]"
        >
          {name}
        </text>
      )}
    </g>
  );
}

// Master 6-Biome Interactive Map Graphic (Exact Replica of media_1791282832652.png)
export function WorldMapArt({
  activeBiome = "all",
  currentMission = 1,
  completedMissions = [],
  onSelectMission = () => {}
}) {
  const getNodeStatus = (lvl) => {
    if (completedMissions.includes(lvl)) return "completed";
    if (lvl === currentMission) return "current";
    return "locked";
  };

  return (
    <div className="relative w-full h-full min-h-[520px] flex items-center justify-center select-none overflow-hidden">
      <svg
        viewBox="0 0 980 670"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Background Grid Crosshairs */}
        <g opacity="0.35" stroke="#9BB5A7" strokeWidth="1">
          <path d="M120 160 h6 M123 157 v6" />
          <path d="M370 120 h6 M373 117 v6" />
          <path d="M820 180 h6 M823 177 v6" />
          <path d="M390 440 h6 M393 437 v6" />
          <path d="M570 590 h6 M573 587 v6" />
          <path d="M910 520 h6 M913 517 v6" />
        </g>

        {/* Ambient Seagulls / Birds */}
        <g stroke="#719183" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6">
          <path d="M365 260 Q371 254 377 260 Q383 254 389 260" />
          <path d="M385 280 Q390 275 395 280 Q400 275 405 280" />
          <path d="M875 625 Q880 620 885 625 Q890 620 895 625" />
        </g>

        {/* Sailboat near Undersea Reef */}
        <g transform="translate(330, 620) scale(1.05)">
          <path d="M0 12 L20 12 L16 18 L4 18 Z" fill="#FFFFFF" stroke="#C4B69E" strokeWidth="1" />
          <line x1="11" y1="2" x2="11" y2="12" stroke="#8A765A" strokeWidth="1.5" />
          <polygon points="11,2 19,10 11,10" fill="#E8B878" />
          <polygon points="10,4 3,10 10,10" fill="#F4E3C8" />
        </g>

        {/* Dashed Connecting Paths */}
        <g stroke="#8EADA0" strokeWidth="2.3" strokeDasharray="6 6" strokeLinecap="round" opacity="0.75">
          {/* Node 1 (Ocean) -> Node 2 (Ocean) */}
          <path d="M190 600 C220 585 245 570 275 550" />
          {/* Node 2 (Ocean) -> Node 3 (Eco Woods) */}
          <path d="M275 550 C315 480 295 400 255 355" />
          {/* Node 3 (Eco Woods) -> Node 4 (Eco Woods) */}
          <path d="M255 355 C220 360 185 350 155 330" />
          {/* Node 4 (Eco Woods) -> Node 5 (Canyon Vault) */}
          <path d="M155 330 C220 320 330 380 435 520" />
          {/* Node 5 (Canyon Vault) -> Node 6 (Canyon Vault) */}
          <path d="M435 520 C465 510 490 490 515 465" />
          {/* Node 6 (Canyon Vault) -> Node 7 (Mountain Pass) */}
          <path d="M515 465 C525 395 510 355 545 320" />
          {/* Node 7 (Mountain Pass) -> Node 8 (Mountain Pass) */}
          <path d="M545 320 C570 310 595 300 622 300" />
          {/* Node 8 (Mountain Pass) -> Metro Grid */}
          <path d="M622 300 C675 315 715 355 780 415" />
          {/* Metro Grid -> Frost Core */}
          <path d="M780 475 C805 525 785 575 750 615" />
        </g>


        {/* ======================================================== */}
        {/* BIOME 2: ECO WOODS (Top Left, Levels 3 & 4) */}
        {/* ======================================================== */}
        <g className={"transition-opacity duration-300 " + (activeBiome === "all" || activeBiome === "forest" ? "opacity-100" : "opacity-35")}>
          {/* 3D Extruded Rim */}
          <path
            d="M 85 310 C 85 375, 335 375, 335 310 L 335 326 C 335 391, 85 391, 85 326 Z"
            fill="#75967E"
          />
          {/* Shoreline Rim */}
          <ellipse cx="210" cy="314" rx="125" ry="63" fill="#C5DEC9" />
          {/* Island Surface */}
          <ellipse cx="210" cy="310" rx="119" ry="58" fill="#A4C7AC" />

          {/* Sandy trail on island */}
          <path
            d="M 130 320 C 165 355, 240 365, 275 325"
            stroke="#C7DEC9"
            strokeWidth="13"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Pine Trees */}
          <g transform="translate(125, 225)">
            <rect x="-2" y="30" width="4" height="10" fill="#5A4736" />
            <polygon points="0,0 -18,22 18,22" fill="#3D6650" />
            <polygon points="0,7 -20,28 20,28" fill="#4B775E" />
            <polygon points="0,15 -22,34 22,34" fill="#365C47" />
          </g>
          <g transform="translate(155, 205)">
            <rect x="-2" y="34" width="4" height="12" fill="#5A4736" />
            <polygon points="0,0 -20,24 20,24" fill="#3D6650" />
            <polygon points="0,9 -22,32 22,32" fill="#4B775E" />
            <polygon points="0,18 -24,38 24,38" fill="#365C47" />
          </g>
          <g transform="translate(190, 210)">
            <rect x="-2" y="30" width="4" height="10" fill="#5A4736" />
            <polygon points="0,0 -16,20 16,20" fill="#4B775E" />
            <polygon points="0,7 -18,26 18,26" fill="#3D6650" />
            <polygon points="0,14 -20,32 20,32" fill="#365C47" />
          </g>
          <g transform="translate(270, 220)">
            <rect x="-2" y="30" width="4" height="10" fill="#5A4736" />
            <polygon points="0,0 -16,20 16,20" fill="#3D6650" />
            <polygon points="0,7 -18,26 18,26" fill="#4B775E" />
            <polygon points="0,14 -20,32 20,32" fill="#365C47" />
          </g>
          <g transform="translate(295, 245)">
            <rect x="-2" y="26" width="4" height="9" fill="#5A4736" />
            <polygon points="0,0 -15,18 15,18" fill="#4B775E" />
            <polygon points="0,6 -16,22 16,22" fill="#3D6650" />
            <polygon points="0,12 -18,28 18,28" fill="#365C47" />
          </g>

          {/* Modern Isometric Eco Lab Building */}
          <g transform="translate(225, 245)">
            <polygon points="0,0 -22,13 -22,38 0,25" fill="#FFFFFF" stroke="#D1E2DA" strokeWidth="1" />
            <polygon points="-5,9 -16,15 -16,24 -5,18" fill="#4A7569" />
            <polygon points="0,0 28,16 28,41 0,25" fill="#EBF3EF" stroke="#D1E2DA" strokeWidth="1" />
            <polygon points="7,11 21,19 21,29 7,21" fill="#4A7569" />
            <polygon points="0,0 28,16 6,29 -22,13" fill="#75A69D" stroke="#5E8C83" strokeWidth="1" />
            <polygon points="3,6 20,15 10,20 -6,11" fill="#95C2B9" />
          </g>

          {/* Node 4: Security Gate */}
          <LevelNode
            x={155}
            y={330}
            level={4}
            name="Security Gate"
            status={getNodeStatus(4)}
            onClick={() => onSelectMission(4)}
          />

          {/* Node 3: User Terminal */}
          <LevelNode
            x={255}
            y={355}
            level={3}
            name="User Terminal"
            status={getNodeStatus(3)}
            onClick={() => onSelectMission(3)}
          />

          {/* Label */}
          <text x="210" y="415" textAnchor="middle" fill="#1C3B2F" fontSize="13" fontWeight="900" letterSpacing="0.08em">
            ECO WOODS
          </text>
          <text x="210" y="430" textAnchor="middle" fill="#6E9485" fontSize="9.5" fontWeight="700">
            02 · INPUT & LOGIC
          </text>
        </g>


        {/* ======================================================== */}
        {/* BIOME 1: UNDERSEA REEF (Bottom Left, Levels 1 & 2) */}
        {/* ======================================================== */}
        <g className={"transition-opacity duration-300 " + (activeBiome === "all" || activeBiome === "ocean" ? "opacity-100" : "opacity-35")}>
          {/* 3D Extruded Rim */}
          <path
            d="M 105 570 C 105 635, 335 635, 335 570 L 335 586 C 335 651, 105 651, 105 586 Z"
            fill="#75A093"
          />
          {/* Shoreline Rim */}
          <ellipse cx="220" cy="575" rx="118" ry="60" fill="#CCE8DF" />
          {/* Island Surface */}
          <ellipse cx="220" cy="570" rx="112" ry="55" fill="#B0DBD0" />

          {/* Wooden Pier extending southwest */}
          <g transform="translate(115, 605)">
            <line x1="0" y1="0" x2="30" y2="20" stroke="#B88A58" strokeWidth="5" strokeLinecap="round" />
            <line x1="10" y1="-8" x2="40" y2="12" stroke="#B88A58" strokeWidth="5" strokeLinecap="round" />
            <line x1="-2" y1="10" x2="20" y2="-12" stroke="#D1A775" strokeWidth="4" strokeLinecap="round" />
            <line x1="10" y1="20" x2="32" y2="-2" stroke="#D1A775" strokeWidth="4" strokeLinecap="round" />
          </g>

          {/* Research Dome */}
          <g transform="translate(185, 535)">
            <ellipse cx="0" cy="16" rx="26" ry="8" fill="#E2EBE7" />
            <rect x="-26" y="4" width="52" height="12" fill="#FFFFFF" stroke="#CDE0D8" strokeWidth="1" />
            <path d="M -26 4 C -26 -25, 26 -25, 26 4 Z" fill="#48B3A4" stroke="#33998A" strokeWidth="1.5" />
            <line x1="0" y1="-25" x2="0" y2="-38" stroke="#C49B5B" strokeWidth="2.3" />
            <circle cx="0" cy="-40" r="3" fill="#ECA752" />
            <rect x="-16" y="-5" width="3" height="9" rx="1" fill="#FFFFFF" opacity="0.8" />
            <rect x="-7" y="-8" width="3" height="12" rx="1" fill="#FFFFFF" opacity="0.8" />
            <rect x="4" y="-8" width="3" height="12" rx="1" fill="#FFFFFF" opacity="0.8" />
            <rect x="13" y="-5" width="3" height="9" rx="1" fill="#FFFFFF" opacity="0.8" />
          </g>

          {/* Outpost Building */}
          <g transform="translate(265, 525)">
            <polygon points="0,0 -16,9 -16,27 0,18" fill="#FFFFFF" stroke="#D3E5DD" strokeWidth="1" />
            <polygon points="0,0 22,12 22,30 0,18" fill="#EAF3EF" stroke="#D3E5DD" strokeWidth="1" />
            <polygon points="-3,5 -12,10 -12,18 -3,13" fill="#528B7D" />
            <polygon points="0,0 22,12 6,21 -16,9" fill="#78ABA0" />
          </g>

          {/* Node 1: First day (With START HERE banner) */}
          <LevelNode
            x={190}
            y={600}
            level={1}
            name="First day"
            status={getNodeStatus(1)}
            showStartBadge={true}
            onClick={() => onSelectMission(1)}
          />

          {/* Node 2: Identity */}
          <LevelNode
            x={275}
            y={550}
            level={2}
            name="Identity"
            status={getNodeStatus(2)}
            onClick={() => onSelectMission(2)}
          />

          {/* Label */}
          <text x="220" y="675" textAnchor="middle" fill="#1C3D33" fontSize="13" fontWeight="900" letterSpacing="0.08em">
            UNDERSEA REEF
          </text>
          <text x="220" y="690" textAnchor="middle" fill="#6E9485" fontSize="9.5" fontWeight="700">
            01 · PRINT & VARIABLES
          </text>
        </g>


        {/* ======================================================== */}
        {/* BIOME 3: CANYON VAULT (Center, Levels 5 & 6) */}
        {/* ======================================================== */}
        <g className={"transition-opacity duration-300 " + (activeBiome === "all" || activeBiome === "canyon" ? "opacity-100" : "opacity-35")}>
          {/* 3D Extruded Rim */}
          <path
            d="M 365 470 C 365 535, 565 535, 565 470 L 565 486 C 565 551, 365 551, 365 486 Z"
            fill="#B88A58"
          />
          {/* Shoreline */}
          <ellipse cx="465" cy="474" rx="104" ry="54" fill="#F5DCBC" />
          {/* Island Surface */}
          <ellipse cx="465" cy="470" rx="98" ry="49" fill="#E8C290" />

          {/* Tiered Canyon Mesas */}
          <g transform="translate(395, 425)">
            <polygon points="-20,0 6,-25 28,-25 38,0" fill="#E08B5E" />
            <polygon points="6,-25 28,-25 22,0 3,0" fill="#EA9E75" />
            <polygon points="-20,0 3,0 3,32 -20,32" fill="#BC6D42" />
            <polygon points="3,0 38,0 38,32 3,32" fill="#D47E52" />
          </g>
          <g transform="translate(470, 385)">
            <polygon points="-26,0 5,-32 34,-32 45,0" fill="#E59368" />
            <polygon points="5,-32 34,-32 28,0 0,0" fill="#F0A67E" />
            <polygon points="-26,0 0,0 0,50 -26,50" fill="#B36237" />
            <polygon points="0,0 45,0 45,50 0,50" fill="#DB8255" />
          </g>

          {/* Cacti */}
          <g transform="translate(385, 500)">
            <line x1="0" y1="-18" x2="0" y2="8" stroke="#5C7F52" strokeWidth="4" strokeLinecap="round" />
            <path d="M -6 -9 H 0 V -3 H 6 V -12" stroke="#5C7F52" strokeWidth="2.6" fill="none" strokeLinecap="round" />
          </g>
          <g transform="translate(545, 495)">
            <line x1="0" y1="-16" x2="0" y2="7" stroke="#5C7F52" strokeWidth="3.6" strokeLinecap="round" />
            <path d="M -5 -7 H 0 V -2 H 5 V -10" stroke="#5C7F52" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          </g>

          {/* Research Outpost Cube */}
          <g transform="translate(460, 465)">
            <polygon points="0,0 -14,8 -14,24 0,16" fill="#FFFFFF" stroke="#E2D0B9" strokeWidth="1" />
            <polygon points="0,0 20,10 20,26 0,16" fill="#F8EFE4" stroke="#E2D0B9" strokeWidth="1" />
            <polygon points="-3,5 -10,9 -10,16 -3,12" fill="#B07B4A" />
            <polygon points="0,0 20,10 6,18 -14,8" fill="#75A69D" />
          </g>

          {/* Node 5: Automation */}
          <LevelNode
            x={435}
            y={520}
            level={5}
            name="Automation"
            status={getNodeStatus(5)}
            onClick={() => onSelectMission(5)}
          />

          {/* Node 6: Data Recovery */}
          <LevelNode
            x={515}
            y={465}
            level={6}
            name="Data Recovery"
            status={getNodeStatus(6)}
            onClick={() => onSelectMission(6)}
          />

          {/* Label */}
          <text x="465" y="585" textAnchor="middle" fill="#6E431F" fontSize="13" fontWeight="900" letterSpacing="0.08em">
            CANYON VAULT
          </text>
          <text x="465" y="600" textAnchor="middle" fill="#A8815F" fontSize="9.5" fontWeight="700">
            03 · LOOPS & LISTS
          </text>
        </g>


        {/* ======================================================== */}
        {/* BIOME 4: MOUNTAIN PASS (Top Center/Right, Levels 7 & 8) */}
        {/* ======================================================== */}
        <g className={"transition-opacity duration-300 " + (activeBiome === "all" || activeBiome === "alpine" ? "opacity-100" : "opacity-35")}>
          {/* 3D Extruded Rim */}
          <path
            d="M 455 290 C 455 355, 695 355, 695 290 L 695 306 C 695 371, 455 371, 455 306 Z"
            fill="#758E83"
          />
          {/* Shoreline Rim */}
          <ellipse cx="575" cy="294" rx="120" ry="60" fill="#D3E2DB" />
          {/* Island Surface */}
          <ellipse cx="575" cy="290" rx="114" ry="55" fill="#B6CBC0" />

          {/* Alpine Mountain Peaks */}
          <g transform="translate(520, 200)">
            <polygon points="0,0 -30,65 0,65" fill="#4B6673" />
            <polygon points="0,0 0,65 30,65" fill="#688796" />
            <polygon points="0,0 -14,30 0,34 14,30" fill="#FFFFFF" />
          </g>
          {/* Summit Peak */}
          <g transform="translate(580, 145)">
            <polygon points="0,0 -42,120 0,120" fill="#4E6B7A" />
            <polygon points="0,0 0,120 46,120" fill="#7595A6" />
            <polygon points="0,0 -19,52 0,60 21,52" fill="#FFFFFF" />
          </g>
          <g transform="translate(635, 210)">
            <polygon points="0,0 -28,58 0,58" fill="#4E6B7A" />
            <polygon points="0,0 0,58 26,58" fill="#658594" />
            <polygon points="0,0 -12,25 0,28 12,25" fill="#FFFFFF" />
          </g>

          {/* Alpine Pines */}
          <g transform="translate(485, 255)">
            <polygon points="0,0 -10,19 10,19" fill="#3D5A50" />
            <polygon points="0,7 -12,26 12,26" fill="#2E473E" />
          </g>
          <g transform="translate(660, 265)">
            <polygon points="0,0 -10,19 10,19" fill="#3D5A50" />
            <polygon points="0,7 -12,26 12,26" fill="#2E473E" />
          </g>

          {/* Observatory */}
          <g transform="translate(580, 275)">
            <polygon points="0,0 -12,7 -12,20 0,13" fill="#FFFFFF" stroke="#CCDCD5" strokeWidth="1" />
            <polygon points="0,0 16,9 16,22 0,13" fill="#E8F1EC" stroke="#CCDCD5" strokeWidth="1" />
            <polygon points="0,0 16,9 4,16 -12,7" fill="#70A29A" />
          </g>

          {/* Node 7: Code Builder */}
          <LevelNode
            x={545}
            y={320}
            level={7}
            name="Code Builder"
            status={getNodeStatus(7)}
            onClick={() => onSelectMission(7)}
          />

          {/* Node 8: Error Detector */}
          <LevelNode
            x={622}
            y={300}
            level={8}
            name="Error Detector"
            status={getNodeStatus(8)}
            onClick={() => onSelectMission(8)}
          />

          {/* Label */}
          <text x="575" y="380" textAnchor="middle" fill="#2B444C" fontSize="13" fontWeight="900" letterSpacing="0.08em">
            MOUNTAIN PASS
          </text>
          <text x="575" y="395" textAnchor="middle" fill="#68848C" fontSize="9.5" fontWeight="700">
            04 · FUNCTIONS & ERRORS
          </text>
        </g>


        {/* ======================================================== */}
        {/* BIOME 5: METRO GRID (Middle Right, Levels 9 & 10) */}
        {/* ======================================================== */}
        <g className={"transition-opacity duration-300 " + (activeBiome === "all" || activeBiome === "city" ? "opacity-100" : "opacity-35")}>
          {/* 3D Extruded Rim */}
          <path
            d="M 685 415 C 685 480, 885 480, 885 415 L 885 431 C 885 496, 685 496, 685 431 Z"
            fill="#B57C60"
          />
          {/* Shoreline */}
          <ellipse cx="785" cy="419" rx="100" ry="52" fill="#F4D4C4" />
          {/* Surface */}
          <ellipse cx="785" cy="415" rx="94" ry="47" fill="#E8BBA8" />

          {/* Skyscraper */}
          <g transform="translate(775, 305)">
            <polygon points="0,0 -14,9 -14,60 0,51" fill="#E28F74" />
            <polygon points="0,0 21,12 21,63 0,51" fill="#F0A68F" />
            <polygon points="0,0 21,12 7,21 -14,9" fill="#F5BAA7" />
            <g fill="#FFFFFF" opacity="0.85">
              <rect x="-10" y="14" width="2.5" height="3.5" />
              <rect x="-5" y="17" width="2.5" height="3.5" />
              <rect x="-10" y="23" width="2.5" height="3.5" />
              <rect x="-5" y="26" width="2.5" height="3.5" />
              <rect x="-10" y="32" width="2.5" height="3.5" />
              <rect x="-5" y="35" width="2.5" height="3.5" />
              <rect x="4" y="20" width="3.5" height="3.5" />
              <rect x="12" y="24" width="3.5" height="3.5" />
              <rect x="4" y="29" width="3.5" height="3.5" />
              <rect x="12" y="33" width="3.5" height="3.5" />
            </g>
          </g>

          {/* Isometric Townhouses */}
          <g transform="translate(745, 365)">
            <polygon points="0,0 -14,9 -14,27 0,18" fill="#FFFFFF" />
            <polygon points="0,0 18,11 18,29 0,18" fill="#E6EEEC" />
            <polygon points="-3,5 -10,9 -10,17 -3,13" fill="#437D73" />
            <polygon points="0,0 18,11 4,19 -14,9" fill="#679C93" />
          </g>
          <g transform="translate(805, 335)">
            <polygon points="0,0 -12,7 -12,29 0,22" fill="#F2A58F" />
            <polygon points="0,0 21,12 21,34 0,22" fill="#E28F74" />
            <polygon points="0,0 21,12 9,19 -12,7" fill="#75A8A0" />
          </g>
          <g transform="translate(840, 380)">
            <polygon points="0,0 -12,7 -12,22 0,15" fill="#FFFFFF" />
            <polygon points="0,0 15,9 15,24 0,15" fill="#E5ECE9" />
            <polygon points="0,0 15,9 3,16 -12,7" fill="#6EA69E" />
          </g>

          {/* Park Tree */}
          <g transform="translate(715, 395)">
            <line x1="0" y1="0" x2="0" y2="14" stroke="#68503D" strokeWidth="2.6" />
            <circle cx="0" cy="-3" r="12" fill="#9BA67D" />
          </g>

          {/* LEVEL 9-11 Pill Banner (Exact image match) */}
          <g
            transform="translate(785, 455)"
            className="cursor-pointer group"
            onClick={() => onSelectMission(9)}
          >
            <rect
              x="-46"
              y="-11"
              width="92"
              height="22"
              rx="11"
              fill="#FFFFFF"
              stroke="#E8BCAB"
              strokeWidth="1.4"
              filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.06))"
              className="transition-transform group-hover:scale-105"
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fill="#7A3A26"
              fontSize="9"
              fontWeight="800"
              letterSpacing="0.05em"
            >
              ≡ LEVELS 9–11
            </text>
          </g>

          {/* Label */}
          <text x="785" y="505" textAnchor="middle" fill="#7A3A26" fontSize="13" fontWeight="900" letterSpacing="0.08em">
            METRO GRID
          </text>
          <text x="785" y="520" textAnchor="middle" fill="#AD6A56" fontSize="9.5" fontWeight="700">
            05 · DATA & MODULES
          </text>
        </g>


        {/* ======================================================== */}
        {/* BIOME 6: FROST CORE (Bottom Right, Levels 11 & 12) */}
        {/* ======================================================== */}
        <g className={"transition-opacity duration-300 " + (activeBiome === "all" || activeBiome === "glacier" ? "opacity-100" : "opacity-35")}>
          {/* 3D Extruded Rim */}
          <path
            d="M 645 615 C 645 680, 865 680, 865 615 L 865 631 C 865 696, 645 696, 645 631 Z"
            fill="#75A69D"
          />
          {/* Shoreline */}
          <ellipse cx="755" cy="619" rx="110" ry="58" fill="#DDEFEA" />
          {/* Surface */}
          <ellipse cx="755" cy="615" rx="104" ry="53" fill="#BFE3DC" />

          {/* Ice Mountains */}
          <g transform="translate(700, 555)">
            <polygon points="0,0 -28,55 0,55" fill="#6992A4" />
            <polygon points="0,0 0,55 28,55" fill="#88B4C7" />
            <polygon points="0,0 -12,24 0,28 12,24" fill="#FFFFFF" />
          </g>
          <g transform="translate(825, 545)">
            <polygon points="0,0 -32,65 0,65" fill="#6992A4" />
            <polygon points="0,0 0,65 32,65" fill="#88B4C7" />
            <polygon points="0,0 -14,29 0,33 14,29" fill="#FFFFFF" />
          </g>

          {/* Monolith with glowing cyan slit windows */}
          <g transform="translate(755, 560)">
            <polygon points="0,0 -23,14 -23,48 0,34" fill="#507F91" />
            <g fill="#E0F7F6" opacity="0.95">
              <rect x="-18" y="14" width="2.6" height="20" rx="1" />
              <rect x="-11" y="18" width="2.6" height="20" rx="1" />
              <rect x="-4" y="22" width="2.6" height="20" rx="1" />
            </g>
            <polygon points="0,0 30,17 30,51 0,34" fill="#75A3B5" />
            <g fill="#E0F7F6" opacity="0.95">
              <rect x="6" y="21" width="3" height="20" rx="1" />
              <rect x="15" y="26" width="3" height="20" rx="1" />
              <rect x="24" y="31" width="3" height="20" rx="1" />
            </g>
            <polygon points="0,0 30,17 7,31 -23,14" fill="#8DB8C9" />
          </g>

          {/* Icy Fir Trees */}
          <g transform="translate(660, 600)">
            <polygon points="0,0 -10,18 10,18" fill="#5E8C82" />
            <polygon points="0,6 -12,24 12,24" fill="#4B776E" />
          </g>
          <g transform="translate(845, 615)">
            <polygon points="0,0 -10,18 10,18" fill="#5E8C82" />
            <polygon points="0,6 -12,24 12,24" fill="#4B776E" />
          </g>

          {/* LEVEL 12-18 Pill Banner (Exact image match) */}
          <g
            transform="translate(755, 655)"
            className="cursor-pointer group"
            onClick={() => onSelectMission(12)}
          >
            <rect
              x="-46"
              y="-11"
              width="92"
              height="22"
              rx="11"
              fill="#FFFFFF"
              stroke="#95C7BC"
              strokeWidth="1.4"
              filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.06))"
              className="transition-transform group-hover:scale-105"
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fill="#204958"
              fontSize="9"
              fontWeight="800"
              letterSpacing="0.05em"
            >
              ≡ LEVELS 12–18
            </text>
          </g>

          {/* Label */}
          <text x="755" y="700" textAnchor="middle" fill="#204958" fontSize="13" fontWeight="900" letterSpacing="0.08em">
            FROST CORE
          </text>
          <text x="755" y="715" textAnchor="middle" fill="#5E8291" fontSize="9.5" fontWeight="700">
            06 · BUILD & CREATE
          </text>
        </g>


        {/* ======================================================== */}
        {/* COMPASS ROSE (Top Right) */}
        {/* ======================================================== */}
        <g transform="translate(915, 65)" opacity="0.85">
          <text x="0" y="-23" textAnchor="middle" fill="#5C7C6B" fontSize="11" fontWeight="800">
            N
          </text>
          <circle cx="0" cy="0" r="16" stroke="#A7C2B4" strokeWidth="1.6" fill="#FFFFFF" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))" />
          <polygon points="0,-11 4,0 0,0" fill="#365C4B" />
          <polygon points="0,-11 -4,0 0,0" fill="#588571" />
          <polygon points="0,11 4,0 0,0" fill="#A8C7B8" />
          <polygon points="0,11 -4,0 0,0" fill="#C5DCD1" />
        </g>
      </svg>
    </div>
  );
}
