
import api from './apiHelper'

export const login = async (email, password) => {
  const response = await api.post('/account/login-email-password', {
    email,
    password
  });
  return response.data;
};
