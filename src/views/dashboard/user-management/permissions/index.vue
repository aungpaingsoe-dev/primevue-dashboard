<script setup>
import Permission from '@/components/Dashboard/UserManagement/Permissions/List.vue';
import { useBreadCrumbStore } from '@/stores/utli/breadcrumb';

const breadCrumbStore = useBreadCrumbStore();
breadCrumbStore.setItems([
    { label: 'User Management' },
    { label: 'Permissions', to: '/dashboard/user-management/permissions' }
]);
</script>

<template>
    <Permission />
</template>
