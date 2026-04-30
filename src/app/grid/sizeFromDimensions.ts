// Maps pixel dimensions to a CellSize name so GridCanvas can pass the
// right `size` prop to each card component. Layouts define cells by
// w/h; the cards switch their variant off the resulting size name.

import type { CellSize } from "./types";

const map: Record<string, CellSize> = {
  // Designed variants
  "1840x1000": "full screen",
  "910x1000": "half long",
  "910x490": "quarter wide",
  "455x1000": "quarter long",
  "455x490": "eighth long",
  "455x245": "sixteenth",
  "455x734": "three sixteenth",
  // Grid-system extensions
  "1840x490": "half wide",
  "910x245": "eighth wide",
  "1365x490": "three quarter wide",
  "1365x1000": "three quarter long",
  "1365x735": "three quarter half",
  "910x367": "three quarter short",
  "910x735": "half tall",
  "1840x367": "half short",
};

export function sizeFromDimensions(width: number, height: number): CellSize {
  const key = `${width}x${height}`;
  return map[key] ?? "quarter wide";
}
