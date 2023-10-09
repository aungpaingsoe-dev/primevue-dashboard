import axios from 'axios';
import { useAuthStore } from '../stores/auth';
import { useProgressStore } from '@/stores/utli/progress';
import App from '@/App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
const app = createApp(App);
app.use(createPinia());

const baseUrl = import.meta.env.VUE_APP_BASE_URL;

axios.defaults.baseURL = baseUrl;
axios.interceptors.request.use(
    function (config) {
        const progressStore = useProgressStore();
        if (progressStore.disabled) progressStore.showProgress();
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
        const progressStore = useProgressStore();
        progressStore.showProgress(false);
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
