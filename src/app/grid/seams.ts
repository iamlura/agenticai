// Seam detection. A "seam" is the GAP-wide strip between two abutting
// cells; dragging a seam resizes the cells on both sides. We compute
// seams from a GridLayout by finding cells that share a vertical edge
// (left.right + GAP === right.left) or horizontal edge.
//
// Seams can span multiple cells on either side. Example: in landingLayout
// the seam at X=910 has 1 left cell (AgentManagement, full height) and
// 2 right cells (Devices top, Calendar bottom). Dragging that seam
// must resize all three.
//
// The seam's `extent` (min/max along the perpendicular axis) is the
// overlap range where left and right cells actually meet — used to size
// the visible drag handle correctly.

import { GAP } from "./types";
import type { GridCell, GridLayout } from "./types";

export interface VerticalSeam {
  axis: "vertical";
  // X position of the gap's left edge = leftCells' right edge.
  position: number;
  // Cells whose right edge is exactly `position`.
  leftCells: GridCell[];
  // Cells whose left edge is exactly `position + GAP`.
  rightCells: GridCell[];
  // Y range over which the seam is visible (overlap of left+right cells).
  extent: [number, number];
}

export interface HorizontalSeam {
  axis: "horizontal";
  // Y position of the gap's top edge = topCells' bottom edge.
  position: number;
  topCells: GridCell[];
  bottomCells: GridCell[];
  // X range over which the seam is visible.
  extent: [number, number];
}

export type Seam = VerticalSeam | HorizontalSeam;

// Build a stable key for a seam, used as React key and to dedupe.
export function seamKey(seam: Seam): string {
  return seam.axis === "vertical"
    ? `v-${seam.position}-${seam.extent[0]}-${seam.extent[1]}`
    : `h-${seam.position}-${seam.extent[0]}-${seam.extent[1]}`;
}

// Find all internal seams in a layout. Layouts where cells don't share
// edges (rare) yield no seams; full-screen single-cell layouts likewise.
export function findSeams(layout: GridLayout): Seam[] {
  const cells = layout.cells;
  const out: Seam[] = [];

  // Vertical seams: group by left-cell right edge X.
  const rightEdges = new Map<number, GridCell[]>();
  const leftEdges = new Map<number, GridCell[]>();
  for (const c of cells) {
    const right = c.x + c.width;
    const left = c.x;
    if (!rightEdges.has(right)) rightEdges.set(right, []);
    rightEdges.get(right)!.push(c);
    if (!leftEdges.has(left)) leftEdges.set(left, []);
    leftEdges.get(left)!.push(c);
  }

  for (const [edgeX, leftCells] of rightEdges) {
    const rightCells = leftEdges.get(edgeX + GAP);
    if (!rightCells || rightCells.length === 0) continue;

    // Build the Y extent — overlap range of all left+right cells. Take
    // the min top and max bottom across all participating cells.
    const yTop = Math.min(
      ...leftCells.map((c) => c.y),
      ...rightCells.map((c) => c.y),
    );
    const yBottom = Math.max(
      ...leftCells.map((c) => c.y + c.height),
      ...rightCells.map((c) => c.y + c.height),
    );

    out.push({
      axis: "vertical",
      position: edgeX,
      leftCells,
      rightCells,
      extent: [yTop, yBottom],
    });
  }

  // Horizontal seams: same logic on Y.
  const bottomEdges = new Map<number, GridCell[]>();
  const topEdges = new Map<number, GridCell[]>();
  for (const c of cells) {
    const bottom = c.y + c.height;
    const top = c.y;
    if (!bottomEdges.has(bottom)) bottomEdges.set(bottom, []);
    bottomEdges.get(bottom)!.push(c);
    if (!topEdges.has(top)) topEdges.set(top, []);
    topEdges.get(top)!.push(c);
  }

  for (const [edgeY, topCells] of bottomEdges) {
    const bottomCells = topEdges.get(edgeY + GAP);
    if (!bottomCells || bottomCells.length === 0) continue;

    const xLeft = Math.min(
      ...topCells.map((c) => c.x),
      ...bottomCells.map((c) => c.x),
    );
    const xRight = Math.max(
      ...topCells.map((c) => c.x + c.width),
      ...bottomCells.map((c) => c.x + c.width),
    );

    out.push({
      axis: "horizontal",
      position: edgeY,
      topCells,
      bottomCells,
      extent: [xLeft, xRight],
    });
  }

  return out;
}

// Given a vertical seam, return the [min, max] X range its position
// can be dragged to without colliding with neighboring seams. Used to
// constrain snap targets so a seam doesn't jump past another seam.
export function verticalSeamRange(
  layout: GridLayout,
  seam: VerticalSeam,
): [number, number] {
  // Find the closest left-side and right-side cell edges that bound this
  // seam. Walk all cells; the seam can range between (leftMost-cell's
  // left + min) and (rightMost-cell's right - min). Simplest: use the
  // affected cells' outer edges as bounds.
  const leftBound = Math.max(...seam.leftCells.map((c) => c.x));
  const rightBound = Math.min(
    ...seam.rightCells.map((c) => c.x + c.width),
  );
  return [leftBound, rightBound - GAP];
}

export function horizontalSeamRange(
  layout: GridLayout,
  seam: HorizontalSeam,
): [number, number] {
  const topBound = Math.max(...seam.topCells.map((c) => c.y));
  const bottomBound = Math.min(
    ...seam.bottomCells.map((c) => c.y + c.height),
  );
  return [topBound, bottomBound - GAP];
}
