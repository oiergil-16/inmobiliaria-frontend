function SkeletonCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-neutral-900/5">
      <div className="skeleton-shimmer aspect-[4/3] w-full" />
      <div className="flex flex-col gap-3 p-5">
        <div className="skeleton-shimmer h-4 w-2/3 rounded-full" />
        <div className="skeleton-shimmer h-3 w-1/3 rounded-full" />
        <div className="flex gap-3">
          <div className="skeleton-shimmer h-3 w-16 rounded-full" />
          <div className="skeleton-shimmer h-3 w-16 rounded-full" />
        </div>
        <div className="mt-2 pt-3 border-t border-neutral-100">
          <div className="skeleton-shimmer h-5 w-1/2 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 flex flex-col items-center gap-4 text-center">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-neutral-200 border-t-neutral-900" />
        </div>
        <div>
          <p className="text-lg font-medium text-neutral-900">
            Cargando propiedades...
          </p>
          <p className="mt-1 text-sm text-neutral-500">
            Buscando la mejor opción para ti...
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
