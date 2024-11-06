import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async (page, limit) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
