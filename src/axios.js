import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-d5e88.cloudfunctions.net/api'
  // 'http://localhost:5001/clone-d5e88/us-central1/api'
});

export default instance;

// Production
// https://us-central1-clone-d5e88.cloudfunctions.net/api
// Debugging
// http://localhost:5001/clone-d5e88/us-central1/api