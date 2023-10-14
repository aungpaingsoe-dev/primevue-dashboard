<script setup>
import PermissionCreate from '@/components/Dashboard/UserManagement/Permissions/Create.vue';
import { useBreadCrumbStore } from '@/stores/utli/breadcrumb';

const breadCrumbStore = useBreadCrumbStore();
breadCrumbStore.setItems([
    { label: 'User Management' },
    { label: 'Permissions', to: '/dashboard/user-management/permissions' },
    { label: 'Create', to: '/dashboard/user-management/permissions/create' }
]);
</script>

<template>
    <PermissionCreate />
</template>
