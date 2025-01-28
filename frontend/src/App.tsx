import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductosList from './pages/Productos/ProductosList';
import Navbar from './components/Navbar'; // Importación corregida

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/productos" element={<ProductosList />} />
        <Route path="/" element={<ProductosList />} /> {/* Ruta por defecto */}
      </Routes>
    </Router>
  );
};

export default App;