// Visible blue/green drag handle for resizing seams + the
// transparent-but-cursored add-from-edge handles. All variants share the
// same pointer-event lifecycle: capture on down, report deltas on move,
// commit on up.
//
// Color convention from the handoff doc:
//   blue  → vertical seam (col-resize cursor, drag horizontal)
//   green → horizontal seam (row-resize cursor, drag vertical)
//   amber → add-from-edge (drag inward to add a cell)

import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { GAP } from "./types";

export type DragZoneAxis = "x" | "y";

interface DragZoneProps {
  // Position of the handle on the canvas, in canvas px.
  left: number;
  top: number;
  width: number;
  height: number;
  // Drag axis. 'x' = horizontal drag (vertical seam / left+right edges).
  axis: DragZoneAxis;
  // Visual color: 'blue' | 'green' | 'amber'.
  color: "blue" | "green" | "amber";
  // Called continuously while dragging with the px delta from start.
  onDrag?: (deltaPx: number) => void;
  // Called once on release with the final px delta. Parent applies snap.
  onCommit: (deltaPx: number) => void;
  // Optional title for hover tooltip / debugging.
  title?: string;
}

const COLOR_BG: Record<DragZoneProps["color"], string> = {
  blue: "rgba(59,130,246,0.55)",   // tailwind blue-500 @ 55%
  green: "rgba(34,197,94,0.55)",   // green-500 @ 55%
  amber: "rgba(245,158,11,0.0)",   // amber-500 — invisible until hover
};

const COLOR_BG_HOVER: Record<DragZoneProps["color"], string> = {
  blue: "rgba(59,130,246,0.85)",
  green: "rgba(34,197,94,0.85)",
  amber: "rgba(245,158,11,0.55)",
};

export default function DragZone({
  left,
  top,
  width,
  height,
  axis,
  color,
  onDrag,
  onCommit,
  title,
}: DragZoneProps) {
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  function handleDown(e: ReactPointerEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    startRef.current = { x: e.clientX, y: e.clientY };
    setActive(true);
  }

  function handleMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!startRef.current) return;
    const delta =
      axis === "x"
        ? e.clientX - startRef.current.x
        : e.clientY - startRef.current.y;
    onDrag?.(delta);
  }

  function handleUp(e: ReactPointerEvent<HTMLDivElement>) {
    if (!startRef.current) return;
    const delta =
      axis === "x"
        ? e.clientX - startRef.current.x
        : e.clientY - startRef.current.y;
    startRef.current = null;
    setActive(false);
    onCommit(delta);
  }

  const cursor = axis === "x" ? "col-resize" : "row-resize";
  const bg = active || hover ? COLOR_BG_HOVER[color] : COLOR_BG[color];

  return (
    <div
      role="separator"
      aria-orientation={axis === "x" ? "vertical" : "horizontal"}
      title={title}
      onPointerDown={handleDown}
      onPointerMove={handleMove}
      onPointerUp={handleUp}
      onPointerCancel={handleUp}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      style={{
        position: "absolute",
        left,
        top,
        width,
        height,
        cursor,
        background: bg,
        borderRadius: GAP / 2,
        zIndex: 30,
        touchAction: "none",
        transition: active ? undefined : "background 120ms ease",
      }}
    />
  );
}
