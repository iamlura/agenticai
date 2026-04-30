// Shared types + constants for the grid state machine.
// All 16 CellSize values match the `size` prop unions on the three
// variant-driven card components (AgentManagement, DevicesAndAgents,
// Calendar). 7 are Figma-designed; 9 render StubCell placeholders.

export type CellSize =
  // Designed in Figma
  | "full screen"          // 1840 × 1000
  | "half long"            //  910 × 1000
  | "quarter wide"         //  910 ×  490
  | "quarter long"         //  455 × 1000
  | "eighth long"          //  455 ×  490
  | "sixteenth"            //  455 ×  245
  | "three sixteenth"      //  455 ×  734
  // Grid-system extensions (StubCell placeholders for now)
  | "half wide"            // 1840 ×  490
  | "eighth wide"          //  910 ×  245
  | "three quarter wide"   // 1365 ×  490
  | "three quarter long"   // 1365 × 1000
  | "three quarter half"   // 1365 ×  735
  | "three quarter short"  //  910 ×  367
  | "three quarter tall"   //  455 ×  734
  | "half short"           // 1840 ×  367
  | "half tall"            //  910 ×  735;

export type CardContent =
  | "agent-terminal"
  | "devices"
  | "calendar"
  | "empty";

export interface GridCell {
  id: string;              // stable across layouts for layoutId animation
  x: number;               // px from canvas left
  y: number;               // px from canvas top
  width: number;           // px
  height: number;          // px
  content: CardContent;
}

export interface GridLayout {
  id: string;
  name: string;
  cells: GridCell[];
}

export const CANVAS_WIDTH = 1840;
export const CANVAS_HEIGHT = 1000;
export const GAP = 20;
export const CARD_RADIUS = 60;
