<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    /**
     * Home
     */
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard/home' }]
    },
    /**
     * As Cores Hris
     */
    {
        items: [
            {
                label: 'As Core Hris',
                icon: 'pi pi-fw pi-chart-pie',
                items: [
                    {
                        label: 'Attended',
                        icon: 'pi pi-fw pi-bookmark',
                        to: '/dashboard/sa-core-hris/attended'
                    },
                    {
                        label: 'Vecancy',
                        icon: 'pi pi-fw pi-bookmark',
                        to: '/dashboard/sa-core-hris/vecancy'
                    }
                ]
            }
        ]
    },
    /**
     * User Management
     */
    {
        label: 'User Mangement',
        items: [
            {
                label: 'Users',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-bookmark',
                        to: '/dashboard/user-management/users'
                    },
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-bookmark',
                        to: '/dashboard/user-management/create'
                    }
                ]
            }
        ]
    },
    {
        items: [
            {
                label: 'Roles',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-bookmark',
                        to: '/dashboard/user-management/roles'
                    },
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-bookmark',
                        to: '/dashboard/user-management/roles/create'
                    }
                ]
            }
        ]
    },
    {
        items: [
            {
                label: 'Permissions',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-bookmark',
                        to: '/dashboard/user-management/permissions'
                    },
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-bookmark',
                        to: '/dashboard/user-management/permissions/create'
                    }
                ]
            }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
