import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dropbox-felipe-clone.herokuapp.com',
});

export default api;