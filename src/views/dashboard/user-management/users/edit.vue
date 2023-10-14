<script setup>
import UserEdit from '@/components/Dashboard/UserManagement/Users/Edit.vue';
import { useBreadCrumbStore } from '@/stores/utli/breadcrumb';

const breadCrumbStore = useBreadCrumbStore();
breadCrumbStore.setItems([
    { label: 'User Management' },
    { label: 'Users', to: '/dashboard/user-management/users' },
    { label: 'Edit', to: '/dashboard/user-management/edit' }
]);
</script>

<template>
    <UserEdit />
</template>
