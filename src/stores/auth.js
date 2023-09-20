import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const accessToken = ref(null);
    const userInfo = ref(null);

    const setUserInfo = (user) => {
        userInfo.value = user;
    };

    const login = async (email, password) => {
        await Http.post('v1/login', {
            email: email,
            password: password
        })
            .then((response) => {
                console.log(response);
                accessToken.value = response.data.token;
                userInfo.value    = response.data
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const logout = () => {
        accessToken.value = null;
        userInfo.value = null;
    };

    const isAuthenticated = computed(() => !!accessToken.value);

    return { accessToken, userInfo, login, logout, isAuthenticated };
});
