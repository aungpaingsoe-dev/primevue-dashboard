<script setup>
import User from '@/components/Dashboard/UserManagement/Users/List.vue';
import { useBreadCrumbStore } from '@/stores/utli/breadcrumb';

const breadCrumbStore = useBreadCrumbStore();
breadCrumbStore.setItems([
    { label: 'User Management' },
    { label: 'Users', to: '/dashboard/user-management/users' }
]);
    
</script>

<template>
    <User />
</template>
