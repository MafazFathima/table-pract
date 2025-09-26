
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-user.dev.hyosungpay.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*'
  },
  timeout: 10000
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));


api.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error?.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
