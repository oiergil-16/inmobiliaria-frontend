"use client";

import { PropertyFilters, PropertyStatus, PropertyType } from "@/types/property";
import RangeSlider from "./RangeSlider";

interface FiltersProps {
  filters: PropertyFilters;
  onChange: (filters: PropertyFilters) => void;
  onReset: () => void;
  cities: string[];
  types: PropertyType[];
  statuses: readonly PropertyStatus[];
  priceBounds: { min: number; max: number };
  sizeBounds: { min: number; max: number };
  bathroomsBounds: { min: number; max: number };
  resultCount: number;
}

const currencyFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function ChipGroup<T extends string>({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: readonly T[];
  selected: T[];
  onToggle: (value: T) => void;
}) {
  return (
    <div>
      <span className="text-sm font-medium text-neutral-800">{label}</span>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              aria-pressed={isActive}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Filters({
  filters,
  onChange,
  onReset,
  cities,
  types,
  statuses,
  priceBounds,
  sizeBounds,
  bathroomsBounds,
  resultCount,
}: FiltersProps) {
  const toggleValue = <K extends keyof Pick<PropertyFilters, "cities" | "types" | "statuses">>(
    key: K,
    value: PropertyFilters[K][number]
  ) => {
    const current = filters[key] as unknown as string[];
    const exists = current.includes(value as string);
    const next = exists
      ? current.filter((v) => v !== value)
      : [...current, value as string];
    onChange({ ...filters, [key]: next });
  };

  return (
    <aside className="flex h-fit flex-col gap-8 rounded-2xl bg-white p-6 shadow-card ring-1 ring-neutral-900/5 lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto filter-scroll">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-neutral-900">Filtros</h2>
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
        >
          Limpiar
        </button>
      </div>

      <ChipGroup
        label="Ciudad"
        options={cities}
        selected={filters.cities}
        onToggle={(v) => toggleValue("cities", v)}
      />

      <ChipGroup
        label="Tipo de propiedad"
        options={types}
        selected={filters.types}
        onToggle={(v) => toggleValue("types", v)}
      />

      <ChipGroup
        label="Estado"
        options={statuses}
        selected={filters.statuses}
        onToggle={(v) => toggleValue("statuses", v)}
      />

      <div className="flex flex-col gap-7 border-t border-neutral-100 pt-6">
        <RangeSlider
          label="Precio"
          min={priceBounds.min}
          max={priceBounds.max}
          step={5000}
          value={filters.price}
          onChange={(price) => onChange({ ...filters, price })}
          formatValue={(v) => currencyFormatter.format(v)}
        />

        <RangeSlider
          label="Metros cuadrados"
          min={sizeBounds.min}
          max={sizeBounds.max}
          step={5}
          value={filters.size}
          onChange={(size) => onChange({ ...filters, size })}
          formatValue={(v) => `${v} m²`}
        />

        <RangeSlider
          label="Baños"
          min={bathroomsBounds.min}
          max={bathroomsBounds.max}
          step={1}
          value={filters.bathrooms}
          onChange={(bathrooms) => onChange({ ...filters, bathrooms })}
          formatValue={(v) => String(v)}
        />
      </div>

      <div className="border-t border-neutral-100 pt-5 text-sm text-neutral-500">
        <span className="font-semibold text-neutral-900">{resultCount}</span>{" "}
        propiedad{resultCount !== 1 ? "es" : ""} encontrada{resultCount !== 1 ? "s" : ""}
      </div>
    </aside>
  );
}
