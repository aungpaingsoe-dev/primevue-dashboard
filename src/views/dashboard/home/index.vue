<script setup>
import Home from '@/components/Dashboard/Home/Home.vue';
import { useBreadCrumbStore } from '@/stores/utli/breadcrumb';

const breadCrumbStore = useBreadCrumbStore();
breadCrumbStore.setItems([{ label: 'Dashboard' }, { label: 'Home', to: '/dashboard/home' }]);
</script>

<template>
    <Home />
</template>