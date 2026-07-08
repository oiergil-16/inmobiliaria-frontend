"use client";

import { useEffect, useMemo, useState } from "react";
import Filters from "@/components/Filters";
import PropertyCard from "@/components/PropertyCard";
import Loading from "@/components/Loading";
import EmptyState from "@/components/EmptyState";
import {
  bathroomsBounds,
  cities,
  priceBounds,
  properties,
  propertyStatuses,
  propertyTypes,
  sizeBounds,
} from "@/data/properties";
import { PropertyFilters } from "@/types/property";

const defaultFilters: PropertyFilters = {
  cities: [],
  types: [],
  statuses: [],
  price: { min: priceBounds.min, max: priceBounds.max },
  size: { min: sizeBounds.min, max: sizeBounds.max },
  bathrooms: { min: bathroomsBounds.min, max: bathroomsBounds.max },
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<PropertyFilters>(defaultFilters);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      if (filters.cities.length && !filters.cities.includes(property.city)) {
        return false;
      }
      if (filters.types.length && !filters.types.includes(property.type)) {
        return false;
      }
      if (filters.statuses.length && !filters.statuses.includes(property.status)) {
        return false;
      }
      if (property.price < filters.price.min || property.price > filters.price.max) {
        return false;
      }
      if (property.size < filters.size.min || property.size > filters.size.max) {
        return false;
      }
      if (
        property.bathrooms < filters.bathrooms.min ||
        property.bathrooms > filters.bathrooms.max
      ) {
        return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <main className="min-h-screen bg-neutral-50">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-tight text-neutral-900">
                Nexo Inmobiliaria
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center sm:py-20">
          <h1 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Encuentra la vivienda que se adapta a ti
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-500">
            Explora nuestra selección de propiedades y utiliza los filtros
            avanzados para descubrir el hogar perfecto.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          <Filters
            filters={filters}
            onChange={setFilters}
            onReset={() => setFilters(defaultFilters)}
            cities={cities}
            types={propertyTypes}
            statuses={propertyStatuses}
            priceBounds={priceBounds}
            sizeBounds={sizeBounds}
            bathroomsBounds={bathroomsBounds}
            resultCount={filteredProperties.length}
          />

          <section>
            {isLoading ? (
              <Loading />
            ) : filteredProperties.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
