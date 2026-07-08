export type PropertyStatus = "Disponible" | "Reservado" | "Vendido";

export type PropertyType =
  | "Piso"
  | "Ático"
  | "Chalet"
  | "Dúplex"
  | "Loft"
  | "Villa"
  | "Apartamento"
  | "Casa"
  | "Estudio";

export interface Property {
  id: string;
  title: string;
  city: string;
  type: PropertyType;
  price: number;
  size: number;
  bathrooms: number;
  status: PropertyStatus;
  image: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface SizeRange {
  min: number;
  max: number;
}

export interface BathroomsRange {
  min: number;
  max: number;
}

export interface PropertyFilters {
  cities: string[];
  types: PropertyType[];
  statuses: PropertyStatus[];
  price: PriceRange;
  size: SizeRange;
  bathrooms: BathroomsRange;
}
