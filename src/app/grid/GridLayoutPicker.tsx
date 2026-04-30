import { ALL_LAYOUTS } from "./layouts";
import type { GridLayout } from "./types";

interface GridLayoutPickerProps {
  current: GridLayout;
  onSelect: (layout: GridLayout) => void;
}

// Floating dev overlay (bottom-right) for switching between preset
// layouts during development. Not shown in production builds — wrap
// in `import.meta.env.DEV` at the call site if needed.
export default function GridLayoutPicker({
  current,
  onSelect,
}: GridLayoutPickerProps) {
  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 rounded-xl bg-black/80 p-3 backdrop-blur-md"
      style={{ minWidth: 180 }}
    >
      <div className="px-1 text-xs uppercase tracking-wider text-white/50">
        Layout
      </div>
      {ALL_LAYOUTS.map((preset) => {
        const active = current.id === preset.id;
        return (
          <button
            key={preset.id}
            type="button"
            onClick={() => onSelect(preset)}
            className={
              "rounded-md px-3 py-1.5 text-left text-sm transition-colors " +
              (active
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20")
            }
          >
            {preset.name}
          </button>
        );
      })}
    </div>
  );
}
