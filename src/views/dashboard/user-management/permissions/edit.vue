<script setup>
import PermissionEdit from '@/components/Dashboard/UserManagement/Permissions/Edit.vue';
import { useBreadCrumbStore } from '@/stores/utli/breadcrumb';

const breadCrumbStore = useBreadCrumbStore();
breadCrumbStore.setItems([
    { label: 'User Management' },
    { label: 'Permissions', to: '/dashboard/user-management/permissions' },
    { label: 'Edit', to: '/dashboard/user-management/permissions/edit' }
]);
</script>

<template>
    <PermissionEdit />
</template>
