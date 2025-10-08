import axios from 'axios';

const instance = axios.create({
  timeout: 120000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

instance.interceptors.request.use(
  async config => {
    if (config.skipAuth) {
      return config;
    }

    // Set default baseURL if not already set
    config.baseURL = config.baseURL || import.meta.env.VITE_TANGOPLAY_SERVER_URL;

    const accessToken = sessionStorage.getItem('accessToken');

    if (!accessToken) {
      sessionStorage.clear();
      localStorage.clear();
      return Promise.reject(new Error('Authentication required'));
    }

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      sessionStorage.clear();
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default instance;
