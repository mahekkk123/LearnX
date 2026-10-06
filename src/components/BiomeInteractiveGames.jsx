import React, { useState } from "react";
import {
  Waves, Radio, Sliders, ShieldCheck, CheckCircle2, RefreshCw, Zap, Play,
  RotateCcw, Sparkles, Bot, Activity, Wind, Sun, Droplets, Cpu, Layers, Thermometer,
  Lock, Unlock
} from "lucide-react";
import { soundEngine } from "../utils/audio";

// 1. OCEAN BIOME GAME: Sonar Signal Decrypter
export function OceanSonarGame({ onComplete }) {
  const [frequency, setFrequency] = useState(520);
  const [calibrated, setCalibrated] = useState(false);
  const targetFreq = 740;

  const handleTune = (val) => {
    setFrequency(val);
    if (Math.abs(val - targetFreq) <= 15 && !calibrated) {
      setCalibrated(true);
      soundEngine.playVictory();
      if (onComplete) onComplete();
    }
  };

  return (
    <div className="bg-[#F0F7F5] border border-[#CDE5DC] rounded-3xl p-6 space-y-4 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#E0F2EE] text-[#2A9D8F] flex items-center justify-center">
            <Radio className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-black text-[#172E26]">Reef Hydrophone Sonar Decrypter</h3>
            <p className="text-[11px] text-[#5A7468]">Tune the hydrophone frequency to align the terminal transmission packet.</p>
          </div>
        </div>
        <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#E0F2EE] text-[#2A9D8F]">
          Ocean Biome Game
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="relative h-44 bg-[#142B23] rounded-2xl overflow-hidden flex items-center justify-center border border-[#214337]">
          <div className="absolute w-36 h-36 rounded-full border border-[#2A9D8F] opacity-30 animate-pulse" />
          <div className="absolute w-24 h-24 rounded-full border border-[#2A9D8F] opacity-40" />
          <div className="absolute w-12 h-12 rounded-full border border-[#52B788] opacity-60" />
          <div className="z-10 text-center space-y-1">
            <div className="text-xs font-mono font-bold text-[#52B788]">
              {calibrated ? "PACKET DECRYPTED: \"Welcome to NEXA!\"" : "SCANNING: " + frequency + " Hz"}
            </div>
            <div className="text-[10px] font-mono text-[#A7D7C5]">
              Target: ~{targetFreq} Hz (Terminal Resonance)
            </div>
          </div>
        </div>

        <div className="space-y-4 p-4 bg-white rounded-2xl border border-[#DCEBE4]">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-[#172E26]">
              <span>Frequency Dial:</span>
              <span className="font-mono text-[#2A9D8F]">{frequency} Hz</span>
            </div>
            <input
              type="range"
              min="400"
              max="900"
              value={frequency}
              onChange={(e) => handleTune(Number(e.target.value))}
              className="w-full accent-[#2A9D8F] cursor-pointer"
            />
          </div>
          <div className="p-3 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] text-[11px] leading-relaxed text-[#355245]">
            <span className="font-bold text-[#2A9D8F]">Python Concept: </span>
            Functions like <code className="bg-[#EAF2ED] px-1 py-0.5 rounded text-[#1F543D]">print()</code> emit data streams to stdout just like this transmitter emits decrypted string packets!
          </div>
          {calibrated && (
            <div className="flex items-center gap-2 text-xs font-bold text-[#1E7268] bg-[#E3F4F1] p-2.5 rounded-xl animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-[#2A9D8F]" />
              <span>Hydrophone synchronized! Ready for coding mission.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 2. FOREST BIOME GAME: Bio-Dome Logic Gatekeeper
export function ForestLogicGame({ onComplete }) {
  const [temp, setTemp] = useState(18);
  const [humidity, setHumidity] = useState(50);
  const [doorOpen, setDoorOpen] = useState(false);

  const checkCondition = (t, h) => {
    const passed = t >= 24 && h >= 65;
    setDoorOpen(passed);
    if (passed && !doorOpen) {
      soundEngine.playVictory();
      if (onComplete) onComplete();
    }
  };

  return (
    <div className="bg-[#F0F7F2] border border-[#CCE3D3] rounded-3xl p-6 space-y-4 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#E2F2E7] text-[#2D6A4F] flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-black text-[#172E26]">Bio-Dome Logic Gatekeeper</h3>
            <p className="text-[11px] text-[#557162]">Simulate the environmental condition logic that triggers the Eco Woods blast gate.</p>
          </div>
        </div>
        <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#E2F2E7] text-[#2D6A4F]">
          Forest Biome Game
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#183024] border border-[#274B39] rounded-2xl p-5 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#81B29A]">CONDITION RULE:</span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#274B39] text-[#A7D7C5]">
              temp &gt;= 24 and humidity &gt;= 65
            </span>
          </div>
          <div className="my-6 text-center space-y-2">
            <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300" style={{ backgroundColor: doorOpen ? "#52B788" : "#E76F51" }}>
              {doorOpen ? <Unlock className="w-8 h-8 text-[#172E26]" /> : <Lock className="w-8 h-8 text-white" />}
            </div>
            <div className="text-sm font-bold font-mono tracking-wide">
              {doorOpen ? "BLAST GATE: UNLOCKED" : "BLAST GATE: LOCKED"}
            </div>
          </div>
          <div className="flex justify-around text-xs font-mono border-t border-[#294E3B] pt-3 text-[#A8C8B9]">
            <div>Temp: <span className={temp >= 24 ? "text-[#52B788] font-bold" : "text-[#FFA494]"}>{temp}°C</span></div>
            <div>Humidity: <span className={humidity >= 65 ? "text-[#52B788] font-bold" : "text-[#FFA494]"}>{humidity}%</span></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-[#D7E8DC] space-y-4">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-[#172E26]">
              <span>Temperature:</span>
              <span className="font-mono text-[#2D6A4F]">{temp}°C (req &gt;= 24)</span>
            </div>
            <input
              type="range"
              min="10"
              max="35"
              value={temp}
              onChange={(e) => { const v = Number(e.target.value); setTemp(v); checkCondition(v, humidity); }}
              className="w-full accent-[#2D6A4F] cursor-pointer"
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-[#172E26]">
              <span>Humidity:</span>
              <span className="font-mono text-[#2D6A4F]">{humidity}% (req &gt;= 65)</span>
            </div>
            <input
              type="range"
              min="20"
              max="95"
              value={humidity}
              onChange={(e) => { const v = Number(e.target.value); setHumidity(v); checkCondition(temp, v); }}
              className="w-full accent-[#2D6A4F] cursor-pointer"
            />
          </div>
          <div className="p-3 rounded-xl bg-[#F8FAF8] border border-[#E2EBE5] text-[11px] leading-relaxed text-[#355245]">
            <span className="font-bold text-[#2D6A4F]">Python Concept: </span>
            <code className="bg-[#EAF2ED] px-1 py-0.5 rounded text-[#1F543D]">if/else</code> statements evaluate boolean expressions to choose code paths dynamically.
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. CANYON BIOME GAME: Vault Excavator Loop Runner
export function CanyonLoopGame({ onComplete }) {
  const [iterations, setIterations] = useState(3);
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [collectedCrystals, setCollectedCrystals] = useState([]);

  const runLoop = () => {
    setIsRunning(true);
    setActiveStep(0);
    setCollectedCrystals([]);
    soundEngine.playClick();

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setActiveStep(step);
      setCollectedCrystals(prev => [...prev, "Crystal #" + step]);
      soundEngine.playHint();
      if (step >= iterations) {
        clearInterval(interval);
        setIsRunning(false);
        soundEngine.playVictory();
        if (onComplete) onComplete();
      }
    }, 600);
  };

  return (
    <div className="bg-[#FDF9F2] border border-[#F4E3C8] rounded-3xl p-6 space-y-4 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#FBF0DD] text-[#C98B4B] flex items-center justify-center">
            <RefreshCw className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-black text-[#172E26]">Vault Excavator Loop Runner</h3>
            <p className="text-[11px] text-[#6E5943]">Automate rover iterations using Python range() loop simulation.</p>
          </div>
        </div>
        <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#FBF0DD] text-[#C98B4B]">
          Canyon Biome Game
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#2B2317] border border-[#443825] rounded-2xl p-5 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between text-xs font-mono text-[#D4A373]">
            <span>LOOP: for i in range(1, {iterations + 1}):</span>
            <span>Iter: {activeStep} / {iterations}</span>
          </div>
          <div className="grid grid-cols-5 gap-2 my-5">
            {[1, 2, 3, 4, 5].map((idx) => {
              const isVisited = idx <= activeStep;
              const isCurrent = idx === activeStep;
              const isTarget = idx <= iterations;
              return (
                <div
                  key={idx}
                  className={`h-16 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${isCurrent ? "bg-[#C98B4B] border-white scale-105" : isVisited ? "bg-[#52B788] border-[#74C69D]" : isTarget ? "bg-[#3D3222] border-[#5E4D34]" : "bg-[#201A11] border-[#332A1C] opacity-40"}`}
                >
                  <span className="text-xs font-mono font-bold">Sec {idx}</span>
                  <span className="text-sm">{isVisited ? "💎" : "📦"}</span>
                </div>
              );
            })}
          </div>
          <div className="text-xs font-mono text-[#D7C3AA]">
            Collected: [{collectedCrystals.join(", ")}]
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-[#EDDCBF] space-y-4">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-[#172E26]">
              <span>Iteration Count (range stop):</span>
              <span className="font-mono text-[#C98B4B]">{iterations} cycles</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={iterations}
              disabled={isRunning}
              onChange={(e) => setIterations(Number(e.target.value))}
              className="w-full accent-[#C98B4B] cursor-pointer"
            />
          </div>
          <button
            onClick={runLoop}
            disabled={isRunning}
            className="w-full py-3 rounded-xl bg-[#C98B4B] hover:bg-[#B3793D] text-white font-bold text-xs shadow-soft transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>{isRunning ? "Executing Loop..." : "Run for-loop cycle"}</span>
          </button>
          <div className="p-3 rounded-xl bg-[#FDF9F2] border border-[#F4E3C8] text-[11px] leading-relaxed text-[#6E5943]">
            <span className="font-bold text-[#C98B4B]">Python Concept: </span>
            <code className="bg-[#FAF0E0] px-1 py-0.5 rounded text-[#915B25]">for i in range(1, 6)</code> repeats code blocks cleanly without repeating duplicate manual lines!
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. ALPINE BIOME GAME: Relay Weather Function Synthesizer
export function AlpineFunctionGame({ onComplete }) {
  const [altitude, setAltitude] = useState(1200);
  const [outputResult, setOutputResult] = useState(null);

  const calculateTelemetry = () => {
    soundEngine.playClick();
    const rawSignal = ((altitude * 1.8) / 10).toFixed(1);
    setOutputResult(rawSignal + " dBm");
    soundEngine.playVictory();
    if (onComplete) onComplete();
  };

  return (
    <div className="bg-[#F2F5F8] border border-[#D5DFE8] rounded-3xl p-6 space-y-4 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#E2EAF2] text-[#5E6B7A] flex items-center justify-center">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-black text-[#172E26]">Relay Weather Function Synthesizer</h3>
            <p className="text-[11px] text-[#556475]">Pass sensor inputs into modular Python functions with return values.</p>
          </div>
        </div>
        <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#E2EAF2] text-[#5E6B7A]">
          Alpine Biome Game
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#1C2631] border border-[#2F3F51] rounded-2xl p-5 text-white flex flex-col justify-between">
          <div className="text-xs font-mono text-[#94A3B8]">def transmit_telemetry(altitude):</div>
          <div className="my-5 flex items-center justify-between gap-2">
            <div className="p-3 bg-[#283849] rounded-xl border border-[#3C536B] text-center flex-1">
              <div className="text-[10px] text-[#9FB3C8]">Input (arg)</div>
              <div className="text-xs font-mono font-bold text-[#64B5F6]">{altitude}m</div>
            </div>
            <div className="text-[#64B5F6] font-bold">➔</div>
            <div className="p-3 bg-[#283849] rounded-xl border border-[#3C536B] text-center flex-1">
              <div className="text-[10px] text-[#9FB3C8]">Function (def)</div>
              <div className="text-xs font-mono font-bold text-[#81C784]">x * 1.8 / 10</div>
            </div>
            <div className="text-[#64B5F6] font-bold">➔</div>
            <div className="p-3 bg-[#283849] rounded-xl border border-[#3C536B] text-center flex-1">
              <div className="text-[10px] text-[#9FB3C8]">return</div>
              <div className="text-xs font-mono font-bold text-[#FFD54F]">{outputResult || "—"}</div>
            </div>
          </div>
          <div className="text-xs font-mono text-[#A0B2C6] border-t border-[#2F4155] pt-3">
            Signal Status: Nominal Uptime
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-[#DCE4EC] space-y-4">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-[#172E26]">
              <span>Altitude Parameter:</span>
              <span className="font-mono text-[#5E6B7A]">{altitude}m</span>
            </div>
            <input
              type="range"
              min="500"
              max="3500"
              step="100"
              value={altitude}
              onChange={(e) => setAltitude(Number(e.target.value))}
              className="w-full accent-[#5E6B7A] cursor-pointer"
            />
          </div>
          <button
            onClick={calculateTelemetry}
            className="w-full py-3 rounded-xl bg-[#5E6B7A] hover:bg-[#4E5967] text-white font-bold text-xs shadow-soft transition-all flex items-center justify-center gap-2"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Call transmit_telemetry({altitude})</span>
          </button>
          <div className="p-3 rounded-xl bg-[#F2F5F8] border border-[#D5DFE8] text-[11px] leading-relaxed text-[#475569]">
            <span className="font-bold text-[#5E6B7A]">Python Concept: </span>
            Functions encapsulate reusable logic with <code className="bg-[#E4ECF4] px-1 py-0.5 rounded text-[#2E3B4E]">def</code> and return computed results using <code className="bg-[#E4ECF4] px-1 py-0.5 rounded text-[#2E3B4E]">return</code>!
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. CITY BIOME GAME: Smart Grid & Traffic Dispatcher
export function CityGridGame({ onComplete }) {
  const [sectors, setSectors] = useState({
    Downtown: { power: true, congestion: 75 },
    TechPark: { power: true, congestion: 30 },
    Harbor: { power: false, congestion: 45 },
    WestGrid: { power: true, congestion: 85 }
  });

  const togglePower = (name) => {
    soundEngine.playClick();
    setSectors(prev => {
      const next = {
        ...prev,
        [name]: { ...prev[name], power: !prev[name].power }
      };
      const allPowered = Object.values(next).every(s => s.power);
      if (allPowered) {
        soundEngine.playVictory();
        if (onComplete) onComplete();
      }
      return next;
    });
  };

  return (
    <div className="bg-[#FDF4F0] border border-[#FADCD3] rounded-3xl p-6 space-y-4 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#FAE8E2] text-[#DD6245] flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-black text-[#172E26]">Metro Grid Smart Dispatcher</h3>
            <p className="text-[11px] text-[#71544D]">Update nested dictionary sectors and route emergency city power.</p>
          </div>
        </div>
        <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#FAE8E2] text-[#DD6245]">
          City Biome Game
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#2B1B17] border border-[#482D26] rounded-2xl p-4 text-white font-mono text-xs">
          <div className="text-[#E07A5F] mb-2 font-bold"># Python dictionary: grid_database</div>
          <pre className="text-[#F4A261] text-[11px] leading-relaxed whitespace-pre-wrap">
            {JSON.stringify(sectors, null, 2)}
          </pre>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-[#F4DDD5] space-y-3">
          <div className="grid grid-cols-2 gap-2.5">
            {Object.entries(sectors).map(([name, data]) => (
              <div
                key={name}
                onClick={() => togglePower(name)}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${data.power ? "bg-[#FDF4F0] border-[#E07A5F] shadow-sm" : "bg-[#F5F5F5] border-[#D6D6D6] opacity-60"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#172E26]">{name}</span>
                  <span className="text-xs">{data.power ? "⚡" : "🔌"}</span>
                </div>
                <div className="text-[10px] mt-2 font-mono text-[#735147]">
                  Power: <span className={data.power ? "text-[#2A6B53] font-bold" : "text-[#DD4A35]"}>{data.power ? "True" : "False"}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-[#FDF4F0] border border-[#FADCD3] text-[11px] leading-relaxed text-[#735147]">
            <span className="font-bold text-[#DD6245]">Python Concept: </span>
            Dictionaries store structured key-value data mappings like <code className="bg-[#FAE7E1] px-1 py-0.5 rounded text-[#963720]">grid["Downtown"]["power"]</code>.
          </div>
        </div>
      </div>
    </div>
  );
}

// 6. GLACIER BIOME GAME: Quantum Reactor Simulator
export function GlacierReactorGame({ onComplete }) {
  const [coreOnline, setCoreOnline] = useState(false);
  const [rebootStep, setRebootStep] = useState(0);

  const handleBoot = () => {
    soundEngine.playClick();
    setCoreOnline(true);
    setRebootStep(1);
    setTimeout(() => {
      setRebootStep(2);
      soundEngine.playHint();
    }, 600);
    setTimeout(() => {
      setRebootStep(3);
      soundEngine.playVictory();
      if (onComplete) onComplete();
    }, 1200);
  };

  return (
    <div className="bg-[#F0F6F9] border border-[#CCE0E8] rounded-3xl p-6 space-y-4 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#DCEBF2] text-[#3F819A] flex items-center justify-center">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-black text-[#172E26]">Quantum Reactor Capstone Simulator</h3>
            <p className="text-[11px] text-[#4F6873]">Instantiate the QuantumCore object and execute the continental reboot method.</p>
          </div>
        </div>
        <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#DCEBF2] text-[#3F819A]">
          Glacier Biome Game
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#14262E] border border-[#213C47] rounded-2xl p-5 text-white flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono text-[#89B9C9]">
            <span>CLASS: QuantumCore("NEXA-Prime")</span>
            <span>Temp: 4.2K</span>
          </div>
          <div className="my-6 text-center space-y-2">
            <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center transition-all duration-500 ${coreOnline ? "bg-[#3F819A] shadow-[0_0_25px_rgba(63,129,154,0.6)] animate-pulse" : "bg-[#253C47]"}`}>
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <div className="text-sm font-mono font-bold">
              {rebootStep === 3 ? "NEXA CONTINENT FULLY RESTORED! 🎉" : coreOnline ? "SYNCHRONIZING BIOMES..." : "STANDBY FOR REBOOT"}
            </div>
          </div>
          <div className="flex justify-between text-xs font-mono text-[#90B8C8] border-t border-[#23424E] pt-3">
            <span>Reboot sequence: {rebootStep}/3</span>
            <span>Status: {coreOnline ? "Active" : "Ready"}</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-[#D5E6ED] space-y-4">
          <div className="p-3 bg-[#F0F6F9] rounded-xl border border-[#D0E2EB] font-mono text-xs space-y-1 text-[#244E5E]">
            <div>class QuantumCore:</div>
            <div className="pl-4">def boot(self):</div>
            <div className="pl-8 text-[#1E7268]"># Reboots continental grid</div>
            <div className="pl-8">return "NEXA restored!"</div>
          </div>
          <button
            onClick={handleBoot}
            disabled={coreOnline}
            className="w-full py-3.5 rounded-xl bg-[#3F819A] hover:bg-[#2F687D] text-white font-bold text-xs shadow-soft transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            <span>{coreOnline ? "Reboot Cycle Completed" : "Execute core.boot()"}</span>
          </button>
          <div className="p-3 rounded-xl bg-[#F0F6F9] border border-[#D0E2EB] text-[11px] leading-relaxed text-[#355A6B]">
            <span className="font-bold text-[#3F819A]">Python Concept: </span>
            Classes combine variables (attributes) and functions (methods) into cohesive, scalable software architectures!
          </div>
        </div>
      </div>
    </div>
  );
}

// Map helper to render appropriate game for a biome
export function BiomeMiniGame({ biomeKey, onComplete }) {
  switch (biomeKey) {
    case "ocean":
      return <OceanSonarGame onComplete={onComplete} />;
    case "forest":
      return <ForestLogicGame onComplete={onComplete} />;
    case "canyon":
      return <CanyonLoopGame onComplete={onComplete} />;
    case "alpine":
      return <AlpineFunctionGame onComplete={onComplete} />;
    case "city":
      return <CityGridGame onComplete={onComplete} />;
    case "glacier":
      return <GlacierReactorGame onComplete={onComplete} />;
    default:
      return <OceanSonarGame onComplete={onComplete} />;
  }
}