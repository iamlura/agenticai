import { useState, useEffect } from "react";
import Frame2055246507 from "../imports/Frame2055246507";
import { MainContentHome } from "../imports/Frame2055246609";
import { ContentOnly as MainContentWorking } from "../imports/Frame2055246552";
import { MainContentOnly as MainContentComplete } from "../imports/Frame2055246566";
import { MainContentGrid } from "../imports/Frame1010109735";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "agents-working" | "agents-complete" | "grid">("home");
  const [startProgress, setStartProgress] = useState(false);

  const navigateToAgents = () => {
    setCurrentView("agents-working");
    setStartProgress(false);
  };

  const navigateToHome = () => {
    setCurrentView("home");
    setStartProgress(false);
  };

  const navigateToGrid = () => {
    setCurrentView("grid");
    setStartProgress(false);
  };

  useEffect(() => {
    if (currentView === "agents-working") {
      // Start progress bars after fade completes
      const progressTimer = setTimeout(() => {
        setStartProgress(true);
      }, 1600);

      // Transition to completed state after all progress bars finish (1600ms fade + 4000ms slowest progress)
      const completeTimer = setTimeout(() => {
        setCurrentView("agents-complete");
      }, 1600 + 4000);

      return () => {
        clearTimeout(progressTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#F2F4F9] flex items-center justify-center">
      <div className="w-[1920px] h-[1200px] bg-[#e3e3e3] relative overflow-hidden">
        {/* Nav Bar - Always Visible */}
        <div className="-translate-x-1/2 absolute left-1/2 top-[36.41px] w-[1921px] h-[76px] z-10">
          <Frame2055246507 onNavigateToAgents={navigateToAgents} onNavigateToGrid={navigateToGrid} />
        </div>

        {/* Main Content Container */}
        <div className="absolute h-[1000px] left-[39.85px] top-[157.41px] w-[1840px]">
          {/* Black Background - Always Visible */}
          <div className="absolute bg-black h-[1000px] left-0 overflow-clip rounded-[60px] top-0 w-[1840px]" />

          {/* Content Layers - Crossfade only */}
          <div className="absolute inset-0">
            {/* Home State */}
            <div
              className={`absolute inset-0 transition-opacity duration-[1600ms] ${
                currentView === "home" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <MainContentHome />
            </div>

            {/* Agents Working State */}
            <div
              className={`absolute inset-0 transition-opacity duration-[1600ms] ${
                currentView === "agents-working" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <MainContentWorking startProgress={startProgress} />
            </div>

            {/* Agents Complete State */}
            <div
              className={`absolute inset-0 transition-opacity duration-[1600ms] ${
                currentView === "agents-complete" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <MainContentComplete onNavigateToGrid={navigateToGrid} />
            </div>

            {/* Grid State */}
            <div
              className={`absolute inset-0 transition-opacity duration-[1600ms] ${
                currentView === "grid" ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <MainContentGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}