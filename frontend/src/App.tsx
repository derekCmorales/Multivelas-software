import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductosList from './pages/Productos/ProductosList';
import AddProducto from './pages/Productos/AddProducto';
import MovimientosForm from './pages/Movimientos/MovimientosForm';
import AlertasStock from './components/AlertasStock';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductosList />} />
        <Route path="/" element={<AlertasStock />} />
        <Route path="/productos/nuevo" element={<AddProducto />} />
        <Route path="/movimientos" element={<MovimientosForm />} />

      </Routes>
    </Router>
  );
};

export default App;