// src/types/product.ts
export interface Producto {
    id: number;
    sku: string;
    nombre: string;
    precio: number;
    stock_actual: number;
    stock_minimo: number;
    ubicacion: string;
  }