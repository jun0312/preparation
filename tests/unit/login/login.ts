import axios from 'axios';

export default {
  async authenticate(role: any, form: any) {
    try {
      return await axios.post('/api/login', role, form);
    } catch (error) {
      throw Error('API Error occurred.');
    }
  },
};
