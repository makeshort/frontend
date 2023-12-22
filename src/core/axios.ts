import axios from 'axios';

axios.defaults.baseURL = "https://sh.jus1d.ru/api/";
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("access_token");

    config.headers.Authorization = "Bearer " + accessToken;

    return config;
});

export default axios;