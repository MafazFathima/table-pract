import api from './apiHelper';

// Login function
export const login = async (email, password) => {
  const response = await api.post(
    '/account/login-email-password',
    { email, password }, // request body
    {
      skipAuth: true, // do not attach auth header
      baseURL: import.meta.env.VITE_TANGOPLAY_USER_SERVER_URL, // override base URL
    }
  );
  return response.data;
};

// Get tickets function
export const getTickets = async (locationUids = '', batchNum = 1, batchSize = 10) => {
  const response = await api.get('/tickets/list', {
    params: { locationUid: locationUids, batchNum, batchSize },
    skipAuth: true, // do not attach auth header
    baseURL: import.meta.env.VITE_TANGOPLAY_USER_SERVER_URL, // override base URL
  });
  return response.data.data.ticket; // Extract the ticket array
};
