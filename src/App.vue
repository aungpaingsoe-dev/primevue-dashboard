<script setup>
import { get } from '@/services/cookie';
import { useAuthStore } from '../src/stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
    authStore.setUserInfo(get('user_info'));
    authStore.setAccessToken(get('access_token'));
});
</script>

<template>
    <router-view />
</template>

<style scoped></style>
