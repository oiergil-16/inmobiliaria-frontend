import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexo Inmobiliaria | Encuentra tu hogar ideal",
  description:
    "Descubre propiedades exclusivas seleccionadas para ti. Filtra por ciudad, tipo, precio y mucho más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
