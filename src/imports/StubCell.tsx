// Placeholder cell used for size variants that haven't been designed in
// Figma yet. Renders the component name, size label, and pixel dimensions
// against a theme-matched background so the grid state machine can be
// built against it. Swap for a real variant render once the Figma variant
// exists.

interface StubCellProps {
  className?: string;
  defaultClass: string;
  componentName: string;
  sizeName: string;
  width: number;
  height: number;
  // Tailwind text color + opacity classes, theme-specific.
  textColorClass?: string;
  mutedColorClass?: string;
  // Dashed border color class (e.g. "border-white/10").
  borderClass?: string;
}

export default function StubCell({
  className,
  defaultClass,
  componentName,
  sizeName,
  width,
  height,
  textColorClass = "text-white",
  mutedColorClass = "text-white/40",
  borderClass = "border-white/10",
}: StubCellProps) {
  return (
    <div className={className || defaultClass} data-name={`${componentName} ${sizeName} placeholder`}>
      <div className={`absolute inset-[12px] rounded-[48px] border border-dashed ${borderClass}`} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[6px] p-[40px] text-center">
        <p className={`font-['Gotham:Book',sans-serif] text-[13px] opacity-50 ${mutedColorClass}`}>
          {componentName}
        </p>
        <p className={`font-['Gotham:Medium',sans-serif] text-[28px] tracking-[-0.84px] opacity-80 ${textColorClass}`}>
          {sizeName}
        </p>
        <p className={`font-['Gotham:Light',sans-serif] text-[11px] opacity-50 ${mutedColorClass}`}>
          {width} × {height}
        </p>
        <p className={`font-['Gotham:Light',sans-serif] text-[10px] mt-[8px] opacity-30 ${mutedColorClass}`}>
          placeholder — pending Figma design
        </p>
      </div>
    </div>
  );
}
