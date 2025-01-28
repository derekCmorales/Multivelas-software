export interface MovimientoInventario {
    id: number;
    productoId: number;
    cantidad: number;
    tipo: 'ENTRADA' | 'SALIDA' | 'TRANSFERENCIA';
    fecha: string;
    ubicacionOrigen?: string;
    ubicacionDestino?: string;
  }