import axios from 'axios';

const BASE_URL = 'https://d97f-178-91-253-86.ngrok-free.app';
const LOGIN_ENDPOINT = '/users/login';

const apiService = {
  async login(email, password) {
    const url = `${BASE_URL}${LOGIN_ENDPOINT}`;

    try {
      const response = await axios.post(url, { email, password });
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },
};

export default apiService;
