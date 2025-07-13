import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // adjust if using a deployed backend
});

export default instance;
