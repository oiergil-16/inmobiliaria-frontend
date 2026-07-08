import Image from "next/image";
import { Property, PropertyStatus } from "@/types/property";

const statusStyles: Record<PropertyStatus, string> = {
  Disponible: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20",
  Reservado: "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20",
  Vendido: "bg-neutral-100 text-neutral-500 ring-1 ring-neutral-400/20",
};

const currencyFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const isSold = property.status === "Vendido";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-neutral-900/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover animate-slide-up">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
            isSold ? "grayscale-[35%]" : ""
          }`}
        />
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${statusStyles[property.status]}`}
          >
            {property.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-base font-semibold text-neutral-900 leading-snug">
            {property.title}
          </h3>
          <p className="mt-0.5 text-sm text-neutral-500">
            {property.city} · {property.type}
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm text-neutral-600">
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9.776c0-.376.212-.72.55-.892l7.25-3.75a1 1 0 0 1 .9 0l7.25 3.75a1 1 0 0 1 .55.892v9.974a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75V9.776Z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
            </svg>
            {property.size} m²
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M6 12v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6M7 12V7a2 2 0 0 1 2-2h1M4 12h1"
              />
            </svg>
            {property.bathrooms} baño{property.bathrooms !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="mt-auto pt-3 border-t border-neutral-100">
          <p className="text-lg font-semibold text-neutral-900 tabular-nums">
            {currencyFormatter.format(property.price)}
          </p>
        </div>
      </div>
    </article>
  );
}
