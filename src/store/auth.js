import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    // Store the authentication token and user information
    const authToken = ref(null);
    const userInfo = ref(null);

    // Initialize the store with values from localStorage or other sources if needed
    // For example, you can check if there's a token in localStorage and set it initially
    // authToken.value = localStorage.getItem('authToken')

    // Function to set the authentication token
    function setAuthToken(token) {
        authToken.value = token;
        // You can also save the token to localStorage or a secure storage here
        // For example: localStorage.setItem('authToken', token)
    }

    // Function to set user information
    function setUserInfo(user) {
        userInfo.value = user;
    }

    // Function to clear the authentication token and user information
    function logout() {
        authToken.value = null;
        userInfo.value = null;
        // You should also remove the token from localStorage or storage
        // For example: localStorage.removeItem('authToken')
    }

    // Check if the user is authenticated
    const isAuthenticated = computed(() => !!authToken.value);

    return { authToken, userInfo, setAuthToken, setUserInfo, logout, isAuthenticated };
});
