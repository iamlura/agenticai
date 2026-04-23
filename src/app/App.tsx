import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Frame2055246507 from "../imports/Frame2055246507";
import { ContentOnly as MainContentWorking } from "../imports/Frame2055246552";
import { MainContentOnly as MainContentComplete } from "../imports/Frame2055246566";
import { MainContentGrid as MainContentLanding } from "../imports/Frame1010109735";

// Shared smart-animate-style transition. Scale + opacity gives cells a
// subtle "expand/shrink into the canvas" feel rather than a pure crossfade.
// The canvas (outer black rounded rectangle) is persistent, so the content
// appears to resize within a stable frame.
const canvasTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] } as const;
const canvasMotion = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
};

export default function App() {
  // "landing" is the 2-column / 3-cell dashboard (Figma 34:7038 / 47:26844).
  // It is both the initial view and where the Q3 flow loops back to when
  // the user clicks "proceed all" on the complete state.
  const [currentView, setCurrentView] = useState<"landing" | "agents-working" | "agents-complete">("landing");
  const [startProgress, setStartProgress] = useState(false);

  const navigateToAgents = () => {
    setCurrentView("agents-working");
    setStartProgress(false);
  };

  const navigateToLanding = () => {
    setCurrentView("landing");
    setStartProgress(false);
  };

  useEffect(() => {
    if (currentView === "agents-working") {
      // Start progress bars after the smart-animate transition in.
      const progressTimer = setTimeout(() => {
        setStartProgress(true);
      }, 600);

      // Transition to complete state after progress bars finish.
      const completeTimer = setTimeout(() => {
        setCurrentView("agents-complete");
      }, 600 + 4000);

      return () => {
        clearTimeout(progressTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#F2F4F9] flex items-center justify-center">
      <div className="w-[1920px] h-[1200px] bg-[#e3e3e3] relative overflow-hidden">
        {/* Nav Bar - Always Visible. Home icon returns to landing; typing
            "create q3 summary" + Enter triggers the agents flow. */}
        <div className="-translate-x-1/2 absolute left-1/2 top-[36.41px] w-[1921px] h-[76px] z-10">
          <Frame2055246507 onNavigateToAgents={navigateToAgents} onNavigateToGrid={navigateToLanding} />
        </div>

        {/* Main Content Container. The persistent black rounded rectangle is
            the "canvas" that all states share, so transitions read as the
            cells resizing inside a stable frame (smart-animate feel). */}
        <div className="absolute h-[1000px] left-[39.85px] top-[157.41px] w-[1840px]">
          <div className="absolute bg-black h-[1000px] left-0 overflow-clip rounded-[60px] top-0 w-[1840px]" />

          <div className="absolute inset-0">
            <AnimatePresence mode="wait" initial={false}>
              {currentView === "landing" && (
                // Landing (Figma 34:7038 / 47:26844): Agent Terminal left-full,
                // Devices top-right, Calendar bottom-right.
                <motion.div
                  key="landing"
                  className="absolute inset-0"
                  style={{ transformOrigin: "50% 50%" }}
                  {...canvasMotion}
                  transition={canvasTransition}
                >
                  <MainContentLanding />
                </motion.div>
              )}

              {currentView === "agents-working" && (
                // Agents Working (Figma 47:34681): title + 3 filling cells with pause/cancel.
                <motion.div
                  key="agents-working"
                  className="absolute inset-0"
                  style={{ transformOrigin: "50% 50%" }}
                  {...canvasMotion}
                  transition={canvasTransition}
                >
                  <MainContentWorking startProgress={startProgress} />
                </motion.div>
              )}

              {currentView === "agents-complete" && (
                // Agents Complete (Figma 47:35288): filled cells with proceed all/cancel.
                // "proceed all" loops back to the landing view.
                <motion.div
                  key="agents-complete"
                  className="absolute inset-0"
                  style={{ transformOrigin: "50% 50%" }}
                  {...canvasMotion}
                  transition={canvasTransition}
                >
                  <MainContentComplete onNavigateToGrid={navigateToLanding} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}