import axios from 'axios';

// central point to backend API
export default axios.create({
  baseURL: 'https://samith-instagram-server.herokuapp.com/api/'
});
