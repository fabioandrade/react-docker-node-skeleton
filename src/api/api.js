
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8001/api/categories/1'
});

export default api;