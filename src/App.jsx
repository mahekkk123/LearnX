import React from "react";
import { GameStateProvider, useGameState } from "./context/GameStateContext";
import { Sidebar } from "./components/Sidebar";
import { TopHeader } from "./components/TopHeader";
import { DashboardView } from "./views/DashboardView";
import { QuestMapView } from "./views/QuestMapView";
import { MissionLabView } from "./views/MissionLabView";
import { AchievementsView } from "./views/AchievementsView";
import { ProfileView } from "./views/ProfileView";
import { AuthView } from "./views/AuthView";

function MainContent() {
  const { activeView } = useGameState();

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardView />;
      case "quest_map":
        return <QuestMapView />;
      case "mission_lab":
        return <MissionLabView />;
      case "achievements":
        return <AchievementsView />;
      case "profile":
        return <ProfileView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden bg-[#F8F9F5]">
      <TopHeader />
      <main className="flex-1 pb-16">
        {renderView()}
      </main>
    </div>
  );
}

function AuthenticatedApp() {
  const { isAuthenticated } = useGameState();

  if (!isAuthenticated) {
    return <AuthView />;
  }

  return (
    <div className="flex min-h-screen bg-[#F8F9F5]">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default function App() {
  return (
    <GameStateProvider>
      <AuthenticatedApp />
    </GameStateProvider>
  );
}
