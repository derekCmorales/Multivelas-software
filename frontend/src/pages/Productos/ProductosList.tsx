import React, { useEffect, useState } from 'react';
import { Producto } from '../../types/product';
import { getProductos } from '../../api/productos';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ProductosList: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (err) {
        setError('Error al cargar los productos');
      }
    };
    fetchProductos();
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio (GTQ)</TableCell>
              <TableCell>Stock Actual</TableCell>
              <TableCell>Ubicación</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productos.map((producto) => (
              <TableRow key={producto.id}>
                <TableCell>{producto.sku}</TableCell>
                <TableCell>{producto.nombre}</TableCell>
                <TableCell>{producto.precio.toFixed(2)}</TableCell>
                <TableCell style={{ 
                  color: producto.stock_actual < producto.stock_minimo ? 'red' : 'inherit',
                  fontWeight: producto.stock_actual < producto.stock_minimo ? 'bold' : 'normal'
                }}>
                  {producto.stock_actual}
                </TableCell>
                <TableCell>{producto.ubicacion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductosList;