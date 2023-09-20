import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { set } from '../services/cookie';

export const useAuthStore = defineStore('auth', () => {
    const accessToken = ref(null);
    const userInfo = ref(null);
    const router = useRouter();

    const login = async (email, password) => {
        await Http.post('v1/login', {
            email: email,
            password: password
        })
            .then((response) => {
                accessToken.value = response.data.token;
                userInfo.value = response.data;
                set('access_token', response.data.token);
                set('user_info', response.data);
                router.push({
                    name: 'dashboard-home'
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const logout = () => {
        accessToken.value = null;
        userInfo.value = null;
    };

    const setUserInfo = (user_info) => {
        userInfo.value = user_info;
    };

    const setAccessToken = (access_token) => {
        accessToken.value = access_token;
    };

    const isAuthenticated = computed(() => !!accessToken.value && !!userInfo.value);

    return { accessToken, userInfo, setUserInfo, setAccessToken, login, logout, isAuthenticated };
});
