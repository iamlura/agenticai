// Preset layouts for the grid system. Each cell's id stays stable
// across layouts so motion's `layoutId` can smart-animate cells as
// the layout changes. Content assignments preserve card identity:
// agent-terminal, devices, calendar.
//
// Canvas: 1840 × 1000 with GAP=20. Half cols: (1840-20)/2 = 910.
// Half rows: (1000-20)/2 = 490. Quarter col: (910-20)/2 = 445... we
// match the Figma spec which uses 455 for quarter cells (derived
// from 910/2 = 455, ignoring gap between quarters — gaps stack).

import type { GridLayout } from "./types";

// Cell IDs — stable across layouts.
const AGENT = "cell-agent-terminal";
const DEVICES = "cell-devices";
const CALENDAR = "cell-calendar";

export const landingLayout: GridLayout = {
  id: "landing",
  name: "Landing",
  cells: [
    { id: AGENT,    x: 0,   y: 0,   width: 910, height: 1000, content: "agent-terminal" },
    { id: DEVICES,  x: 930, y: 0,   width: 910, height: 490,  content: "devices" },
    { id: CALENDAR, x: 930, y: 510, width: 910, height: 490,  content: "calendar" },
  ],
};

export const fullScreenAgentLayout: GridLayout = {
  id: "full-agent",
  name: "Full — Agent",
  cells: [
    { id: AGENT, x: 0, y: 0, width: 1840, height: 1000, content: "agent-terminal" },
  ],
};

export const twoHorizontalEvenLayout: GridLayout = {
  id: "two-h-even",
  name: "Two Horizontal",
  cells: [
    { id: AGENT,   x: 0,   y: 0, width: 910, height: 1000, content: "agent-terminal" },
    { id: DEVICES, x: 930, y: 0, width: 910, height: 1000, content: "devices" },
  ],
};

export const twoVerticalEvenLayout: GridLayout = {
  id: "two-v-even",
  name: "Two Vertical",
  cells: [
    { id: AGENT,    x: 0, y: 0,   width: 1840, height: 490, content: "agent-terminal" },
    { id: CALENDAR, x: 0, y: 510, width: 1840, height: 490, content: "calendar" },
  ],
};

export const fourSplitEvenLayout: GridLayout = {
  id: "four-split",
  name: "Four Split",
  cells: [
    { id: AGENT,    x: 0,   y: 0,   width: 910, height: 490, content: "agent-terminal" },
    { id: DEVICES,  x: 930, y: 0,   width: 910, height: 490, content: "devices" },
    { id: CALENDAR, x: 0,   y: 510, width: 910, height: 490, content: "calendar" },
    { id: "cell-empty-1", x: 930, y: 510, width: 910, height: 490, content: "empty" },
  ],
};

export const threeSplitVerticalLayout: GridLayout = {
  id: "three-v",
  name: "Three Vertical",
  cells: [
    { id: AGENT,    x: 0,    y: 0, width: 910, height: 1000, content: "agent-terminal" },
    { id: DEVICES,  x: 930,  y: 0, width: 455, height: 1000, content: "devices" },
    { id: CALENDAR, x: 1405, y: 0, width: 455, height: 1000, content: "calendar" },
  ],
};

export const ALL_LAYOUTS: GridLayout[] = [
  landingLayout,
  fullScreenAgentLayout,
  twoHorizontalEvenLayout,
  twoVerticalEvenLayout,
  fourSplitEvenLayout,
  threeSplitVerticalLayout,
];
