// src/service/ProductService.js

// Example: A simple API call using fetch or axios
import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
