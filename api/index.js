import axios from 'axios';

// central point to backend API
export default axios.create({
  baseURL: 'http://localhost:5000/api'
});
