// Pure layout transformations. Each function takes a GridLayout and
// returns a new GridLayout with cell IDs preserved (so motion's
// layoutId animation can spring the bounding boxes). Cells that don't
// touch a seam pass through unchanged.

import { CANVAS_WIDTH, CANVAS_HEIGHT, GAP } from "./types";
import type { GridCell, GridLayout } from "./types";
import type { HorizontalSeam, VerticalSeam } from "./seams";
import { MIN_CELL_HEIGHT, MIN_CELL_WIDTH } from "./snap";

// Resize a vertical seam to a new X position. Adjacent cells' widths
// adjust by `delta = newPos - seam.position`:
//   leftCells: width += delta
//   rightCells: x += delta, width -= delta
// Other cells pass through unchanged.
//
// Returns the original layout if the move would shrink any affected
// cell below the minimum width — caller can decide to remove instead.
export function resizeVerticalSeam(
  layout: GridLayout,
  seam: VerticalSeam,
  newPosition: number,
): GridLayout {
  const delta = newPosition - seam.position;
  if (delta === 0) return layout;

  // Validate min size on every affected cell.
  for (const c of seam.leftCells) {
    if (c.width + delta < MIN_CELL_WIDTH) return layout;
  }
  for (const c of seam.rightCells) {
    if (c.width - delta < MIN_CELL_WIDTH) return layout;
  }

  const leftIds = new Set(seam.leftCells.map((c) => c.id));
  const rightIds = new Set(seam.rightCells.map((c) => c.id));

  const cells = layout.cells.map<GridCell>((c) => {
    if (leftIds.has(c.id)) return { ...c, width: c.width + delta };
    if (rightIds.has(c.id))
      return { ...c, x: c.x + delta, width: c.width - delta };
    return c;
  });
  return { ...layout, cells };
}

export function resizeHorizontalSeam(
  layout: GridLayout,
  seam: HorizontalSeam,
  newPosition: number,
): GridLayout {
  const delta = newPosition - seam.position;
  if (delta === 0) return layout;

  for (const c of seam.topCells) {
    if (c.height + delta < MIN_CELL_HEIGHT) return layout;
  }
  for (const c of seam.bottomCells) {
    if (c.height - delta < MIN_CELL_HEIGHT) return layout;
  }

  const topIds = new Set(seam.topCells.map((c) => c.id));
  const bottomIds = new Set(seam.bottomCells.map((c) => c.id));

  const cells = layout.cells.map<GridCell>((c) => {
    if (topIds.has(c.id)) return { ...c, height: c.height + delta };
    if (bottomIds.has(c.id))
      return { ...c, y: c.y + delta, height: c.height - delta };
    return c;
  });
  return { ...layout, cells };
}

// Generate a unique cell ID for a newly-added empty cell.
function newEmptyId(layout: GridLayout): string {
  let n = 1;
  const existing = new Set(layout.cells.map((c) => c.id));
  while (existing.has(`cell-empty-${n}`)) n++;
  return `cell-empty-${n}`;
}

export type CanvasEdge = "left" | "right" | "top" | "bottom";

// Add an empty cell of `size` px from the given outer edge of the canvas.
// Existing cells that touch that edge shrink by `size + GAP` to make
// room. If any would shrink below min, the layout is returned unchanged.
//
// Phase-2 simplification: only adds a cell that spans the full
// perpendicular axis (i.e. full height for left/right, full width for
// top/bottom). Mixed splits with existing seams aren't handled here.
export function addCellFromEdge(
  layout: GridLayout,
  edge: CanvasEdge,
  size: number,
): GridLayout {
  if (size <= 0) return layout;
  const id = newEmptyId(layout);

  switch (edge) {
    case "left": {
      // Validate: every existing cell touching x=0 has width >= size + GAP + MIN.
      const touching = layout.cells.filter((c) => c.x === 0);
      for (const c of touching) {
        if (c.width - size - GAP < MIN_CELL_WIDTH) return layout;
      }
      const cells: GridCell[] = layout.cells.map((c) => {
        if (c.x === 0)
          return { ...c, x: size + GAP, width: c.width - size - GAP };
        return c;
      });
      cells.push({
        id,
        x: 0,
        y: 0,
        width: size,
        height: CANVAS_HEIGHT,
        content: "empty",
      });
      return { ...layout, cells };
    }
    case "right": {
      const touching = layout.cells.filter(
        (c) => c.x + c.width === CANVAS_WIDTH,
      );
      for (const c of touching) {
        if (c.width - size - GAP < MIN_CELL_WIDTH) return layout;
      }
      const cells: GridCell[] = layout.cells.map((c) => {
        if (c.x + c.width === CANVAS_WIDTH)
          return { ...c, width: c.width - size - GAP };
        return c;
      });
      cells.push({
        id,
        x: CANVAS_WIDTH - size,
        y: 0,
        width: size,
        height: CANVAS_HEIGHT,
        content: "empty",
      });
      return { ...layout, cells };
    }
    case "top": {
      const touching = layout.cells.filter((c) => c.y === 0);
      for (const c of touching) {
        if (c.height - size - GAP < MIN_CELL_HEIGHT) return layout;
      }
      const cells: GridCell[] = layout.cells.map((c) => {
        if (c.y === 0)
          return { ...c, y: size + GAP, height: c.height - size - GAP };
        return c;
      });
      cells.push({
        id,
        x: 0,
        y: 0,
        width: CANVAS_WIDTH,
        height: size,
        content: "empty",
      });
      return { ...layout, cells };
    }
    case "bottom": {
      const touching = layout.cells.filter(
        (c) => c.y + c.height === CANVAS_HEIGHT,
      );
      for (const c of touching) {
        if (c.height - size - GAP < MIN_CELL_HEIGHT) return layout;
      }
      const cells: GridCell[] = layout.cells.map((c) => {
        if (c.y + c.height === CANVAS_HEIGHT)
          return { ...c, height: c.height - size - GAP };
        return c;
      });
      cells.push({
        id,
        x: 0,
        y: CANVAS_HEIGHT - size,
        width: CANVAS_WIDTH,
        height: size,
        content: "empty",
      });
      return { ...layout, cells };
    }
  }
}

// Remove a cell and reflow neighbors to fill the freed space. Phase-2
// strategy: if a single neighbor abuts the cell on the same axis,
// expand it to fill. If multiple neighbors abut on different sides,
// expand the leftmost / topmost neighbor (deterministic). If no
// neighbor fits cleanly, the cell becomes a hole — which the visual
// will show as canvas background.
export function removeCell(layout: GridLayout, cellId: string): GridLayout {
  const target = layout.cells.find((c) => c.id === cellId);
  if (!target) return layout;
  const others = layout.cells.filter((c) => c.id !== cellId);

  // Look for cells whose edge plus GAP equals one of target's edges
  // and whose perpendicular extent matches exactly — those can absorb.

  // Left neighbor: c.x + c.width + GAP === target.x AND y/height match.
  const leftN = others.find(
    (c) =>
      c.x + c.width + GAP === target.x &&
      c.y === target.y &&
      c.height === target.height,
  );
  if (leftN) {
    const cells = others.map((c) =>
      c.id === leftN.id
        ? { ...c, width: c.width + GAP + target.width }
        : c,
    );
    return { ...layout, cells };
  }

  // Right neighbor: target.x + target.width + GAP === c.x.
  const rightN = others.find(
    (c) =>
      target.x + target.width + GAP === c.x &&
      c.y === target.y &&
      c.height === target.height,
  );
  if (rightN) {
    const cells = others.map((c) =>
      c.id === rightN.id
        ? { ...c, x: target.x, width: c.width + GAP + target.width }
        : c,
    );
    return { ...layout, cells };
  }

  // Top neighbor.
  const topN = others.find(
    (c) =>
      c.y + c.height + GAP === target.y &&
      c.x === target.x &&
      c.width === target.width,
  );
  if (topN) {
    const cells = others.map((c) =>
      c.id === topN.id
        ? { ...c, height: c.height + GAP + target.height }
        : c,
    );
    return { ...layout, cells };
  }

  // Bottom neighbor.
  const bottomN = others.find(
    (c) =>
      target.y + target.height + GAP === c.y &&
      c.x === target.x &&
      c.width === target.width,
  );
  if (bottomN) {
    const cells = others.map((c) =>
      c.id === bottomN.id
        ? { ...c, y: target.y, height: c.height + GAP + target.height }
        : c,
    );
    return { ...layout, cells };
  }

  // No clean absorber — drop the cell, leave the hole.
  return { ...layout, cells: others };
}
