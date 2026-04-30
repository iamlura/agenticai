// Snap-to-designed-size helpers. Phase 2 resize lets users drag seams in
// pixel space, but on release we lock to one of the canonical positions
// the Figma variants were designed for. Keeping the snap set tight
// preserves visual fidelity (cards don't render at off-spec sizes) and
// guarantees `sizeFromDimensions` always returns a designed CellSize.
//
// Canvas: 1840 × 1000 with GAP=20.
//   Vertical seams sit between two cells. The seam X is the LEFT cell's
//   right edge; the right cell's left = seamX + GAP. Allowed left widths
//   in the current preset set are {455, 910, 1365} (1/4, 1/2, 3/4).
//   Horizontal: top heights {245, 367, 490, 735} (1/16-row, 3/4-short,
//   1/2, 3/4-half).
//
// Min cell width / height enforce that drag-resize won't produce a cell
// smaller than the smallest designed variant on its axis.

import { CANVAS_WIDTH, CANVAS_HEIGHT, GAP } from "./types";

// Canonical seam positions. These are the X (or Y) coords where a seam
// is allowed to land — i.e. the right edge of the left/top cell.
export const SNAP_SEAM_X = [455, 910, 1365] as const;
export const SNAP_SEAM_Y = [245, 367, 490, 735] as const;

// Canonical cell extents (= canonical right-edge minus left-edge), used
// for add-cell-from-edge sizing.
export const SNAP_CELL_WIDTH = [455, 910, 1365, 1840] as const;
export const SNAP_CELL_HEIGHT = [245, 367, 490, 735, 1000] as const;

// Smallest cell dimension we'll allow on resize. Below this we treat the
// drag as a remove gesture rather than resize.
export const MIN_CELL_WIDTH = 455;
export const MIN_CELL_HEIGHT = 245;

// Snap a raw px value to the nearest entry in `targets`. Pure utility.
export function snapTo(value: number, targets: readonly number[]): number {
  let best = targets[0];
  let bestDist = Math.abs(value - best);
  for (let i = 1; i < targets.length; i++) {
    const d = Math.abs(value - targets[i]);
    if (d < bestDist) {
      best = targets[i];
      bestDist = d;
    }
  }
  return best;
}

// Snap a candidate seam X position. Optional [min, max] clamps the seam
// to a sub-range — useful when neighboring seams already exist and we
// don't want this seam to pass them.
export function snapSeamX(value: number, range?: [number, number]): number {
  const candidates = range
    ? SNAP_SEAM_X.filter((x) => x >= range[0] && x <= range[1])
    : SNAP_SEAM_X;
  if (candidates.length === 0) return snapTo(value, SNAP_SEAM_X);
  return snapTo(value, candidates);
}

export function snapSeamY(value: number, range?: [number, number]): number {
  const candidates = range
    ? SNAP_SEAM_Y.filter((y) => y >= range[0] && y <= range[1])
    : SNAP_SEAM_Y;
  if (candidates.length === 0) return snapTo(value, SNAP_SEAM_Y);
  return snapTo(value, candidates);
}

// Clamp a px value to the canvas's draggable range, leaving room for the
// minimum cell + GAP on each side.
export function clampSeamX(value: number): number {
  return Math.max(
    MIN_CELL_WIDTH,
    Math.min(CANVAS_WIDTH - MIN_CELL_WIDTH - GAP, value),
  );
}

export function clampSeamY(value: number): number {
  return Math.max(
    MIN_CELL_HEIGHT,
    Math.min(CANVAS_HEIGHT - MIN_CELL_HEIGHT - GAP, value),
  );
}
