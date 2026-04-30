import { motion } from "motion/react";
import AgentManagement from "../../imports/AgentManagement";
import DevicesAndAgents from "../../imports/DevicesAndAgents";
import Calendar from "../../imports/Calendar";
import { sizeFromDimensions } from "./sizeFromDimensions";
import type { CardContent, GridCell, GridLayout } from "./types";
import { CARD_RADIUS } from "./types";

// Spring used for cell bounding-box animation. The inner variant
// component snaps instantly (no transition) — only the outer cell
// container animates position/size.
const cellTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 30,
  mass: 0.9,
};

const bgClassForContent: Record<CardContent, string> = {
  "agent-terminal": "bg-black",
  devices: "bg-[#cfcfcf]",
  calendar: "bg-[#001a4e]",
  empty: "bg-[#222222]",
};

interface CellInnerProps {
  cell: GridCell;
  className: string;
}

function CellInner({ cell, className }: CellInnerProps) {
  const size = sizeFromDimensions(cell.width, cell.height);
  switch (cell.content) {
    case "agent-terminal":
      return <AgentManagement size={size} className={className} />;
    case "devices":
      return <DevicesAndAgents size={size} className={className} />;
    case "calendar":
      return <Calendar size={size} className={className} />;
    case "empty":
    default:
      return <div className={className} />;
  }
}

interface GridCanvasProps {
  layout: GridLayout;
}

// Renders the layout's cells as absolutely-positioned motion.divs.
// Each cell keeps a stable layoutId so motion smart-animates the
// bounding box across layout changes; the inner card re-renders with
// its new `size` and snaps instantly.
export default function GridCanvas({ layout }: GridCanvasProps) {
  return (
    <>
      {layout.cells.map((cell) => {
        const innerClassName = `${bgClassForContent[cell.content]} h-full overflow-clip relative w-full`;
        return (
          <motion.div
            key={cell.id}
            layoutId={cell.id}
            className="absolute"
            style={{
              left: cell.x,
              top: cell.y,
              width: cell.width,
              height: cell.height,
              borderRadius: CARD_RADIUS,
              overflow: "hidden",
            }}
            transition={cellTransition}
          >
            <CellInner cell={cell} className={innerClassName} />
          </motion.div>
        );
      })}
    </>
  );
}
