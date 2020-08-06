import axios from 'axios';

const api = axios.create({
  baseURL: 'http://nyx.vima.ekt.gr:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  fetchBooks: (params) => {
    return api.post('/books', params);
  },
};
