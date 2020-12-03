import axios from 'axios';

const api = axios.create({
    url: 'https://api.github.com/users/Tiaguin061'
});
export default api;