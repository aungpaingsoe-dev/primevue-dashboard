<script setup>
import RoleCreate from '@/components/Dashboard/UserManagement/Roles/Create.vue';
import { useBreadCrumbStore } from '@/stores/utli/breadcrumb';

const breadCrumbStore = useBreadCrumbStore();
breadCrumbStore.setItems([
    { label: 'User Management' },
    { label: 'Roles', to: '/dashboard/user-management/roles' },
    { label: 'Create', to: '/dashboard/user-management/roles/create' }
]);
</script>

<template>
    <RoleCreate />
</template>
