import React, { useState } from "react";
import { BookOpen, Eye, EyeOff, ArrowRight, Sparkles, AlertCircle, CheckCircle2, User, Mail, Lock, ShieldCheck } from "lucide-react";
import { useGameState } from "../context/GameStateContext";
import { NovaMascot, OceanReefArt } from "../components/BiomeVectorArt";
import { soundEngine } from "../utils/audio";

export function AuthView() {
  const { login, signup } = useGameState();

  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const switchMode = (newMode) => {
    soundEngine.playClick();
    setMode(newMode);
    setErrorMsg("");
  };

  const handleDemoFill = () => {
    soundEngine.playClick();
    setEmail("alex@nexa.dev");
    setPassword("python123");
    setErrorMsg("");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email.trim()) {
      setErrorMsg("Please enter your email address.");
      soundEngine.playIncorrect();
      return;
    }
    if (!password) {
      setErrorMsg("Please enter your password.");
      soundEngine.playIncorrect();
      return;
    }

    setIsLoading(true);
    // Simulate brief smooth response
    setTimeout(() => {
      const res = login(email, password);
      if (!res.success) {
        setErrorMsg(res.error || "Invalid credentials.");
        soundEngine.playIncorrect();
        setIsLoading(false);
      }
    }, 250);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please enter your explorer name.");
      soundEngine.playIncorrect();
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      soundEngine.playIncorrect();
      return;
    }
    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      soundEngine.playIncorrect();
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match. Please re-check.");
      soundEngine.playIncorrect();
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const res = signup({ name, email, password });
      if (!res.success) {
        setErrorMsg(res.error || "Signup failed.");
        soundEngine.playIncorrect();
        setIsLoading(false);
      }
    }, 250);
  };

  return (
    <div className="min-h-screen bg-[#F8F9F5] flex flex-col justify-between items-center p-4 sm:p-6 select-none relative overflow-hidden">
      {/* Decorative ambient pastel glows matching cozy RPG theme */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#E3F3F1] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#FEF8EC] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#E8F5EE] rounded-full blur-3xl opacity-70 pointer-events-none" />

      {/* Top Header Logo */}
      <header className="w-full max-w-md flex items-center justify-between py-4 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#2A6B53] flex items-center justify-center text-white shadow-soft">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-2xl font-extrabold tracking-tight text-[#172E26]">LearnX</span>
            <span className="text-xs block font-semibold text-[#65756B] -mt-1">Python Expedition</span>
          </div>
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wider text-[#2A6B53] bg-[#EAF5EE] border border-[#D5EADB] px-3 py-1 rounded-full">
          NEXA Gateway
        </span>
      </header>

      {/* Main Authentication Card */}
      <main className="w-full max-w-md z-10 my-auto">
        <div className="bg-[#FFFFFF] border border-[#E4ECE4] rounded-3xl p-6 sm:p-8 shadow-float relative space-y-6">
          {/* NOVA Companion greeting banner */}
          <div className="bg-[#EFF7F2] border border-[#D5EADB] rounded-2xl p-4 flex items-start gap-3.5">
            <NovaMascot size={44} className="flex-shrink-0" />
            <div className="space-y-0.5">
              <div className="text-[10px] font-bold tracking-widest text-[#2A6B53] uppercase">
                NOVA · System Reception
              </div>
              <p className="text-xs text-[#3E5C4E] leading-relaxed italic">
                {mode === "login"
                  ? "“Welcome back, Explorer! The core terminals in Undersea Reef await your Python code.”"
                  : "“Welcome to NEXA! Register your explorer credentials and let's bring the biomes back to life.”"}
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex bg-[#F3F6F3] p-1.5 rounded-2xl border border-[#E5EDE6]">
            <button
              type="button"
              onClick={() => switchMode("login")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                mode === "login"
                  ? "bg-[#FFFFFF] text-[#172E26] shadow-soft"
                  : "text-[#65776C] hover:text-[#172E26]"
              }`}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => switchMode("signup")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                mode === "signup"
                  ? "bg-[#FFFFFF] text-[#172E26] shadow-soft"
                  : "text-[#65776C] hover:text-[#172E26]"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Error Alert Box */}
          {errorMsg && (
            <div className="bg-[#FDF2F0] border border-[#F7C6BF] text-[#8C2E21] text-xs font-medium p-3.5 rounded-2xl flex items-start gap-2.5 animate-fadeIn">
              <AlertCircle className="w-4 h-4 text-[#DD4A35] flex-shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* ======================================================== */}
          {/* LOGIN FORM */}
          {/* ======================================================== */}
          {mode === "login" && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#4B6256] flex items-center justify-between">
                  <span>Email address</span>
                  <span className="text-[11px] font-normal text-[#7E9387]">alex@nexa.dev</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8C9E93] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your explorer email"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F8FAF8] border border-[#E2EAE3] text-xs sm:text-sm text-[#172E26] font-medium focus:outline-none focus:ring-2 focus:ring-[#2A6B53] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#4B6256] flex items-center justify-between">
                  <span>Password</span>
                  <span className="text-[11px] font-normal text-[#7E9387]">python123</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#8C9E93] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                    className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-[#F8FAF8] border border-[#E2EAE3] text-xs sm:text-sm text-[#172E26] font-medium focus:outline-none focus:ring-2 focus:ring-[#2A6B53] focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-[#8C9E93] hover:text-[#172E26] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Demo Quick Fill Button */}
              <button
                type="button"
                onClick={handleDemoFill}
                className="w-full py-2 px-3 rounded-xl bg-[#F3F8F5] hover:bg-[#E7F2EB] text-[#2A6B53] font-bold text-[11px] border border-[#D5EADB] transition-colors flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E8A856]" />
                <span>One-Click Demo Login (Alex)</span>
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#2A6B53] hover:bg-[#205541] active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <span>{isLoading ? "Authenticating..." : "Log In to Expedition"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2">
                <span className="text-xs text-[#6B7F74]">Don't have an account? </span>
                <button
                  type="button"
                  onClick={() => switchMode("signup")}
                  className="text-xs font-bold text-[#2A6B53] hover:underline"
                >
                  Sign Up
                </button>
              </div>
            </form>
          )}

          {/* ======================================================== */}
          {/* SIGN UP FORM */}
          {/* ======================================================== */}
          {mode === "signup" && (
            <form onSubmit={handleSignupSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#4B6256]">Explorer Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8C9E93] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Rivera"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F8FAF8] border border-[#E2EAE3] text-xs sm:text-sm text-[#172E26] font-medium focus:outline-none focus:ring-2 focus:ring-[#2A6B53] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#4B6256]">Email address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8C9E93] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="explorer@nexa.dev"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F8FAF8] border border-[#E2EAE3] text-xs sm:text-sm text-[#172E26] font-medium focus:outline-none focus:ring-2 focus:ring-[#2A6B53] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#4B6256]">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#8C9E93] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 6 characters"
                    required
                    className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-[#F8FAF8] border border-[#E2EAE3] text-xs sm:text-sm text-[#172E26] font-medium focus:outline-none focus:ring-2 focus:ring-[#2A6B53] focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-[#8C9E93] hover:text-[#172E26] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#4B6256]">Confirm Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#8C9E93] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                    required
                    className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-[#F8FAF8] border border-[#E2EAE3] text-xs sm:text-sm text-[#172E26] font-medium focus:outline-none focus:ring-2 focus:ring-[#2A6B53] focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-[#8C9E93] hover:text-[#172E26] transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#2A6B53] hover:bg-[#205541] active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <span>{isLoading ? "Creating Account..." : "Create Explorer Account"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2">
                <span className="text-xs text-[#6B7F74]">Already have an account? </span>
                <button
                  type="button"
                  onClick={() => switchMode("login")}
                  className="text-xs font-bold text-[#2A6B53] hover:underline"
                >
                  Log In
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      {/* Footer info */}
      <footer className="w-full max-w-md text-center py-4 z-10 space-y-1">
        <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#7E9387]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2A6B53]" />
          <span>Local demo session stored securely in browser</span>
        </div>
        <p className="text-[10px] text-[#9FB0A5]">
          6 Environmental Biomes · 18 Python Missions · Bloom's Taxonomy Framework
        </p>
      </footer>
    </div>
  );
}
