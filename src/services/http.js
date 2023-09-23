import axios from 'axios';
import { useAuthStore } from '../stores/auth';

const baseUrl = import.meta.env.VUE_APP_BASE_URL;

axios.defaults.baseURL = baseUrl;
axios.interceptors.request.use(
    function (config) {
        const authStore = useAuthStore();
        config.headers['Authorization'] = 'Bearer ' + authStore.accessToken;
        config.headers['Content-Type'] = 'application/json'; // Set Content-Type based on your requirements
        return config;
    },
    function (error) {
        return Promise.reject(error.response);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (401 === error.response.status) {
            console.log(error);
        }
        return Promise.reject(error.response);
    }
);

export const HTTP = axios;
