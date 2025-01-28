// src/api/productos.ts
import axios from 'axios';
import { Producto } from '../types/product';

const API_URL = 'http://localhost:8000/api';

export const getProductos = async (): Promise<Producto[]> => {
  const response = await axios.get(`${API_URL}/productos/`);
  return response.data;
};

export const createProducto = async (producto: Omit<Producto, 'id'>): Promise<Producto> => {
  const response = await axios.post(`${API_URL}/productos/`, producto);
  return response.data;
};