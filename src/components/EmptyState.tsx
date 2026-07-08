export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-white/60 px-6 py-20 text-center animate-fade-in">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
        <svg
          className="h-8 w-8 text-neutral-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-4.34-4.34m0 0A7.5 7.5 0 1 0 5.5 5.5a7.5 7.5 0 0 0 11.16 11.16Z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-neutral-900">Sin resultados</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-500">
        No hemos encontrado propiedades que coincidan con tu búsqueda.
        Esperamos encontrar pronto la opción perfecta para ti.
      </p>
    </div>
  );
}
