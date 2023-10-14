<script setup>
import Role from '@/components/Dashboard/UserManagement/Roles/List.vue';
import { useBreadCrumbStore } from '@/stores/utli/breadcrumb';

const breadCrumbStore = useBreadCrumbStore();
breadCrumbStore.setItems([
    { label: 'User Management' },
    { label: 'Roles', to: '/dashboard/user-management/roles' }
]);
</script>

<template>
    <Role />
</template>
