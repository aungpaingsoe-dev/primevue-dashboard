<script setup>
import RoleEdit from '@/components/Dashboard/UserManagement/Roles/Edit.vue';
import { useBreadCrumbStore } from '@/stores/utli/breadcrumb';

const breadCrumbStore = useBreadCrumbStore();
breadCrumbStore.setItems([{ label: 'User Management' }, { label: 'Roles', to: '/dashboard/user-management/roles' }, { label: 'Edit', to: '/dashboard/user-management/roles/edit' }]);
</script>

<template>
    <RoleEdit />
</template>
