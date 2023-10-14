<script setup>
import UserCreate from '@/components/Dashboard/UserManagement/Users/Create.vue';
import { useBreadCrumbStore } from '@/stores/utli/breadcrumb';

const breadCrumbStore = useBreadCrumbStore();
breadCrumbStore.setItems([
    { label: 'User Management' },
    { label: 'Users', to: '/dashboard/user-management/users' },
    { label: 'Create', to: '/dashboard/user-management/create' }
]);
</script>

<template>
    <UserCreate />
</template>
