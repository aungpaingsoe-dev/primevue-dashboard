import axios from 'axios';
// import store from "../store";
import router from '../router';
const baseUrl = import.meta.env.VUE_APP_BASE_URL;

axios.defaults.baseURL = baseUrl;
axios.interceptors.request.use(
    function (config) {
        // console.log(config)
        // config.headers.common["Authorization"] = store.getters["auth/getToken"];
        // config.headers.common["Content-Type"] = "application/json";
        //  config.headers.common["ngrok-skip-browser-warning"] = "application/json";
        // config.headers.common["Content-Type"] = "multipart/form-data";
        // { headers: {'Content-Type': 'multipart/form-data' }}
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (401 === error.response) {
            const user = {
                name: '',
                id: '',
                roles: [],
                permissions: []
            };
            //   store.commit("auth/setAuthUser", user);
            //   store.commit("auth/setToken", "");
            //   store.commit("auth/setAuth", false);

            //   router.push({ name: "login" });
        }
        return Promise.reject(error);
    }
);

export const HTTP = axios;

const http = axios.create();

const odooUrl = 'https://jsonplaceholder.typicode.com/';
http.defaults.OdooURL = odooUrl;

http.interceptors.request.use(
    function (config) {
        config.baseURL = odooUrl;
        // config.headers.common["Authorization"] = store.getters["auth/getToken"];
        config.headers.common['Content-Type'] = 'application/json';
        console.log('seconde is in ');
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export const HttpOdoo = http;
