import { useState } from "react";
import { LayoutGroup } from "motion/react";
import GridCanvas from "./grid/GridCanvas";
import GridLayoutPicker from "./grid/GridLayoutPicker";
import { landingLayout } from "./grid/layouts";
import type { GridLayout } from "./grid/types";

// Owns layout state and renders the grid canvas + dev preset picker.
// LayoutGroup ensures motion's layoutId animations work across the
// cells inside GridCanvas as the layout swaps.
export default function LandingGrid() {
  const [layout, setLayout] = useState<GridLayout>(landingLayout);

  return (
    <LayoutGroup>
      <GridCanvas layout={layout} onLayoutChange={setLayout} />
      <GridLayoutPicker current={layout} onSelect={setLayout} />
    </LayoutGroup>
  );
}
