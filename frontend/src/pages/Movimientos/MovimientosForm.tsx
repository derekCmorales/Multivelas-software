import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Alert, MenuItem } from '@mui/material';
import { Producto } from '../../types/product';
import { getProductos } from '../../api/productos';
import { createMovimiento } from '../../api/movimientos';

const MovimientosForm: React.FC = () => {
  const [movimiento, setMovimiento] = useState({
    productoId: '',
    cantidad: 0,
    tipo: 'ENTRADA' as 'ENTRADA' | 'SALIDA' | 'TRANSFERENCIA',
    fecha: new Date().toISOString(),
  });
  const [productos, setProductos] = useState<Producto[]>([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getProductos();
      setProductos(data);
    };
    fetchProductos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createMovimiento({
        ...movimiento,
        productoId: Number(movimiento.productoId),
        fecha: new Date().toISOString(), 
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, margin: 'auto' }}>
      <TextField
        select
        label="Producto"
        value={movimiento.productoId}
        onChange={(e) => setMovimiento({ ...movimiento, productoId: e.target.value })}
        fullWidth
        margin="normal"
        required
      >
        {productos.map((producto) => (
          <MenuItem key={producto.id} value={producto.id}>
            {producto.nombre}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Cantidad"
        type="number"
        value={movimiento.cantidad}
        onChange={(e) => setMovimiento({ ...movimiento, cantidad: parseInt(e.target.value) })}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        select
        label="Tipo"
        value={movimiento.tipo}
        onChange={(e) => setMovimiento({ 
          ...movimiento, 
          tipo: e.target.value as 'ENTRADA' | 'SALIDA' | 'TRANSFERENCIA' // Conversión de tipo
        })}
        fullWidth
        margin="normal"
        required
      >
        <MenuItem value="ENTRADA">Entrada</MenuItem>
        <MenuItem value="SALIDA">Salida</MenuItem>
        <MenuItem value="TRANSFERENCIA">Transferencia</MenuItem>
      </TextField>
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Registrar Movimiento
      </Button>
      {success && <Alert severity="success" sx={{ mt: 2 }}>Movimiento registrado correctamente!</Alert>}
    </Box>
  );
};

export default MovimientosForm;