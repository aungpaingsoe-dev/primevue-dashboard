import axios from 'axios';
const baseUrl = import.meta.env.VUE_APP_BASE_URL;

axios.defaults.baseURL = baseUrl;
axios.interceptors.request.use(
    function (config) {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Content-Type'] = 'multipart/form-data';
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
        if (401 === error.response) {
            //
        }
        return Promise.reject(error.response);
    }
);

export const HTTP = axios;
