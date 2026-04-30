import { motion } from "motion/react";
import AgentManagement from "../../imports/AgentManagement";
import DevicesAndAgents from "../../imports/DevicesAndAgents";
import Calendar from "../../imports/Calendar";
import { sizeFromDimensions } from "./sizeFromDimensions";
import type { CardContent, GridCell, GridLayout } from "./types";
import { CANVAS_HEIGHT, CANVAS_WIDTH, CARD_RADIUS, GAP } from "./types";
import DragZone from "./DragZone";
import {
  findSeams,
  horizontalSeamRange,
  seamKey,
  verticalSeamRange,
} from "./seams";
import {
  resizeHorizontalSeam,
  resizeVerticalSeam,
  removeCell,
  addCellFromEdge,
  type CanvasEdge,
} from "./resize";
import {
  snapSeamX,
  snapSeamY,
  snapTo,
  SNAP_CELL_HEIGHT,
  SNAP_CELL_WIDTH,
} from "./snap";

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

// Small × button shown on empty cells (Phase-2 remove gesture). Content
// cards aren't removable in Phase 2 — they'd vanish with no easy way to
// re-add until a layout preset is reselected.
interface RemoveButtonProps {
  onClick: () => void;
}
function RemoveButton({ onClick }: RemoveButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Remove cell"
      className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/30 hover:text-white"
    >
      <span aria-hidden className="text-lg leading-none">×</span>
    </button>
  );
}

interface GridCanvasProps {
  layout: GridLayout;
  onLayoutChange: (next: GridLayout) => void;
}

// Renders the layout's cells as absolutely-positioned motion.divs plus
// the Phase-2 drag affordances:
//   - blue seam handles (vertical seams, drag horizontal to resize)
//   - green seam handles (horizontal seams, drag vertical to resize)
//   - amber edge handles (drag inward from outer canvas edge to add)
//   - × buttons on empty cells (click to remove)
export default function GridCanvas({ layout, onLayoutChange }: GridCanvasProps) {
  const seams = findSeams(layout);

  return (
    <>
      {layout.cells.map((cell) => {
        const innerClassName = `${bgClassForContent[cell.content]} h-full overflow-clip relative w-full`;
        const showRemove = cell.content === "empty";
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
            {showRemove && (
              <RemoveButton
                onClick={() => onLayoutChange(removeCell(layout, cell.id))}
              />
            )}
          </motion.div>
        );
      })}

      {/* Vertical seams (blue, horizontal drag to resize column). */}
      {seams
        .filter((s) => s.axis === "vertical")
        .map((seam) => {
          if (seam.axis !== "vertical") return null;
          const [yTop, yBottom] = seam.extent;
          return (
            <DragZone
              key={seamKey(seam)}
              left={seam.position}
              top={yTop}
              width={GAP}
              height={yBottom - yTop}
              axis="x"
              color="blue"
              title={`Resize @ x=${seam.position}`}
              onCommit={(deltaPx) => {
                const range = verticalSeamRange(layout, seam);
                const target = snapSeamX(seam.position + deltaPx, range);
                if (target === seam.position) return;
                onLayoutChange(resizeVerticalSeam(layout, seam, target));
              }}
            />
          );
        })}

      {/* Horizontal seams (green, vertical drag to resize row). */}
      {seams
        .filter((s) => s.axis === "horizontal")
        .map((seam) => {
          if (seam.axis !== "horizontal") return null;
          const [xLeft, xRight] = seam.extent;
          return (
            <DragZone
              key={seamKey(seam)}
              left={xLeft}
              top={seam.position}
              width={xRight - xLeft}
              height={GAP}
              axis="y"
              color="green"
              title={`Resize @ y=${seam.position}`}
              onCommit={(deltaPx) => {
                const range = horizontalSeamRange(layout, seam);
                const target = snapSeamY(seam.position + deltaPx, range);
                if (target === seam.position) return;
                onLayoutChange(resizeHorizontalSeam(layout, seam, target));
              }}
            />
          );
        })}

      {/* Add-from-edge handles. Amber, transparent until hover. Drag
          inward; release commits an empty cell sized to the snapped drag
          distance. Skips an edge if no existing cell can absorb the new
          cell's width/height + GAP. */}
      <AddEdgeHandle edge="left" layout={layout} onLayoutChange={onLayoutChange} />
      <AddEdgeHandle edge="right" layout={layout} onLayoutChange={onLayoutChange} />
      <AddEdgeHandle edge="top" layout={layout} onLayoutChange={onLayoutChange} />
      <AddEdgeHandle edge="bottom" layout={layout} onLayoutChange={onLayoutChange} />
    </>
  );
}

// Amber edge handle. Sits as a thin (GAP-wide) strip on a canvas outer
// edge. Drag inward → commit creates an empty cell whose px size is the
// snapped drag distance. Outward drag is ignored.
interface AddEdgeHandleProps {
  edge: CanvasEdge;
  layout: GridLayout;
  onLayoutChange: (next: GridLayout) => void;
}
function AddEdgeHandle({ edge, layout, onLayoutChange }: AddEdgeHandleProps) {
  const isVertical = edge === "left" || edge === "right";
  const left = edge === "left" ? 0 : edge === "right" ? CANVAS_WIDTH - GAP : 0;
  const top = edge === "top" ? 0 : edge === "bottom" ? CANVAS_HEIGHT - GAP : 0;
  const width = isVertical ? GAP : CANVAS_WIDTH;
  const height = isVertical ? CANVAS_HEIGHT : GAP;

  return (
    <DragZone
      left={left}
      top={top}
      width={width}
      height={height}
      axis={isVertical ? "x" : "y"}
      color="amber"
      title={`Add cell from ${edge}`}
      onCommit={(deltaPx) => {
        const inward =
          edge === "left" || edge === "top" ? deltaPx : -deltaPx;
        const targets = isVertical ? SNAP_CELL_WIDTH : SNAP_CELL_HEIGHT;
        // Require half the smallest snap target to count as an "add"
        // gesture so a hover-twitch doesn't accidentally insert a cell.
        const threshold = targets[0] / 2;
        if (inward < threshold) return;
        const size = snapTo(inward, targets);
        if (size <= 0) return;
        onLayoutChange(addCellFromEdge(layout, edge, size));
      }}
    />
  );
}
