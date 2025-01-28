import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Multivelas Inventario
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/productos">
          Productos
        </Button>
        <Button color="inherit" component={Link} to="/proveedores">
          Proveedores
        </Button>
      </Toolbar>
      <Button color="inherit" component={Link} to="/productos/nuevo">
  Añadir Producto
</Button>
<Button color="inherit" component={Link} to="/movimientos">
  Movimientos
</Button>
    </AppBar>
  );
};

export default Navbar;