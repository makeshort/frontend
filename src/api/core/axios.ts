import axios from 'axios';

// axios.defaults.baseURL = "https://sh.jus1d.ru/api/"; // Production URL
axios.defaults.baseURL = "http://localhost:8081/api/"; // Development URL
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("access_token");

    config.headers.Authorization = "Bearer " + accessToken;

    return config;
});

export default axios;