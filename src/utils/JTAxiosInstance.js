import axios from 'axios';
import BASE_URL from '../integrations/JTAPIs';
const JTAxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
});

export default JTAxiosInstance;