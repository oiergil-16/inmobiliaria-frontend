"use client";

interface RangeSliderProps {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
  formatValue?: (value: number) => string;
}

export default function RangeSlider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  formatValue = (v) => String(v),
}: RangeSliderProps) {
  const range = Math.max(max - min, 1);
  const minPercent = ((value.min - min) / range) * 100;
  const maxPercent = ((value.max - min) / range) * 100;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), value.max);
    onChange({ ...value, min: newMin });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), value.min);
    onChange({ ...value, max: newMax });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-neutral-800">{label}</span>
        <span className="text-xs text-neutral-500 tabular-nums">
          {formatValue(value.min)} — {formatValue(value.max)}
        </span>
      </div>
      <div className="relative h-5 flex items-center">
        <div className="absolute w-full h-1 rounded-full bg-neutral-200" />
        <div
          className="absolute h-1 rounded-full bg-neutral-900"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value.min}
          onChange={handleMinChange}
          className="absolute w-full h-5 z-10"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value.max}
          onChange={handleMaxChange}
          className="absolute w-full h-5 z-20"
        />
      </div>
    </div>
  );
}
