# Inmobiliaria Frontend

Frontend de listado de propiedades inmobiliarias, hecho con Next.js, React, TypeScript y Tailwind CSS.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y ejecución en local

```bash
npm install
npm run dev
```

La aplicación quedará disponible en [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

- `npm run dev` — arranca el servidor de desarrollo
- `npm run build` — genera el build de producción
- `npm run start` — sirve el build de producción
- `npm run lint` — ejecuta el linter

## Estructura

- `src/app` — páginas y layout de la aplicación (Next.js App Router)
- `src/components` — componentes reutilizables (filtros, tarjetas de propiedad, etc.)
- `src/data` — datos de propiedades
- `src/types` — tipos de TypeScript
- `public` — imágenes y PDFs de las propiedades
