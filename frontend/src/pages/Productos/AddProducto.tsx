// src/pages/Productos/AddProducto.tsx
import React, { useState } from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import { Producto } from '../../types/product'; // Ruta corregida
import { createProducto } from '../../api/productos'; // Ruta corregida

const AddProducto: React.FC = () => {
  const [producto, setProducto] = useState<Omit<Producto, 'id'>>({
    sku: '',
    nombre: '',
    precio: 0,
    stock_actual: 0,
    stock_minimo: 5,
    ubicacion: 'Almacén Principal',
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProducto(producto);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, margin: 'auto' }}>
      <TextField
        label="SKU"
        value={producto.sku}
        onChange={(e) => setProducto({ ...producto, sku: e.target.value })}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Nombre"
        value={producto.nombre}
        onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Guardar Producto
      </Button>
      {success && <Alert severity="success" sx={{ mt: 2 }}>Producto añadido correctamente!</Alert>}
    </Box>
  );
};

export default AddProducto;