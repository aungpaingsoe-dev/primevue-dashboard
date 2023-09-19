import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    const authToken = ref(null);
    const userInfo = ref(null);

    function setAuthToken(token) {
        authToken.value = token;
    }

    function setUserInfo(user) {
        userInfo.value = user;
    }

    function logout() {
        authToken.value = null;
        userInfo.value = null;
    }

    const isAuthenticated = computed(() => !!authToken.value);

    return { authToken, userInfo, setAuthToken, setUserInfo, logout, isAuthenticated };
});
