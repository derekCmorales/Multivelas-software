import axios from 'axios';
import { MovimientoInventario } from '../types/movimiento'; 

const API_URL = 'http://localhost:8000/api';

export const createMovimiento = async (movimiento: Omit<MovimientoInventario, 'id'>) => {
  const response = await axios.post(`${API_URL}/movimientos/`, movimiento);
  return response.data;
};

export const getMovimientos = async (): Promise<MovimientoInventario[]> => {
  const response = await axios.get(`${API_URL}/movimientos/`);
  return response.data;
};