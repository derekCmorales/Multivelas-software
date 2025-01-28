// src/components/AlertasStock.tsx
import React, { useEffect, useState } from 'react';
import { Alert, Box } from '@mui/material';
import { Producto } from '../types/product';
import { getProductos } from '../api/productos';

const AlertasStock: React.FC = () => {
  const [productosBajoStock, setProductosBajoStock] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getProductos();
      setProductosBajoStock(data.filter((p) => p.stock_actual < p.stock_minimo));
    };
    fetchProductos();
  }, []);

  return (
    <Box sx={{ mt: 2 }}>
      {productosBajoStock.map((producto) => (
        <Alert key={producto.id} severity="warning" sx={{ mb: 1 }}>
          {`${producto.nombre} está por debajo del stock mínimo (${producto.stock_actual}/${producto.stock_minimo}).`}
        </Alert>
      ))}
    </Box>
  );
};

export default AlertasStock;