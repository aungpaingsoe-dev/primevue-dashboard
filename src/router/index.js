import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
// Auth Routes
import Login from '@/views/auth/login.vue';
// Dashboard Routes
import Index from '@/views/index.vue';
import NotFound from '../views/not-found.vue';
// Home
import Home from '@/views/dashboard/home/index.vue';
// Sa Core Management
import SaCoreHrisAttended from '@/views/dashboard/sa-core-hris/attended/index.vue';
import SaCoreHrisVecancy from '@/views/dashboard/sa-core-hris/vecancy/index.vue';
// User Management
import UserManagementUsers from '@/views/dashboard/user-management/users/index.vue';
import UserManagementUsersCreate from '@/views/dashboard/user-management/users/create.vue';
import UserManagementUsersEdit from '@/views/dashboard/user-management/users/edit.vue';
import UserManagementRoles from '@/views/dashboard/user-management/roles/index.vue';
import UserManagementRolesCreate from '@/views/dashboard/user-management/roles/create.vue';
import UserManagementRolesEdit from '@/views/dashboard/user-management/roles/edit.vue';
import UserManagementPermissions from '@/views/dashboard/user-management/permissions/index.vue';
import UserManagementPermissionsCreate from '@/views/dashboard/user-management/permissions/create.vue';
import UserManagementPermissionsEdit from '@/views/dashboard/user-management/permissions/edit.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'index',
                    component: () => Index
                },
                // Home
                {
                    path: '/dashboard/home',
                    name: 'dashboard-home',
                    component: () => Home
                },
                // Sa Core Hris Management
                {
                    path: '/dashboard/sa-core-hris/attended',
                    name: 'dashboard-sa-core-hris-attended',
                    component: () => SaCoreHrisAttended
                },
                {
                    path: '/dashboard/sa-core-hris/vecancy',
                    name: 'dashboard-sa-core-hris-vecancy',
                    component: () => SaCoreHrisVecancy
                },
                // User Management
                {
                    path: '/dashboard/user-management/users',
                    name: 'dashboard-user-management-users',
                    component: () => UserManagementUsers
                },
                {
                    path: '/dashboard/user-management/create',
                    name: 'dashboard-user-management-create',
                    component: () => UserManagementUsersCreate
                },
                {
                    path: '/dashboard/user-management/users/edit',
                    name: 'dashboard-user-management-users-edit',
                    component: () => UserManagementUsersEdit
                },
                {
                    path: '/dashboard/user-management/roles',
                    name: 'dashboard-user-management-roles',
                    component: () => UserManagementRoles
                },
                {
                    path: '/dashboard/user-management/roles/create',
                    name: 'dashboard-user-management-roles-create',
                    component: () => UserManagementRolesCreate
                },
                {
                    path: '/dashboard/user-management/roles/edit',
                    name: 'dashboard-user-management-roles-edit',
                    component: () => UserManagementRolesEdit
                },
                {
                    path: '/dashboard/user-management/permissions',
                    name: 'dashboard-user-management-permissions',
                    component: () => UserManagementPermissions
                },
                {
                    path: '/dashboard/user-management/permissions/create',
                    name: 'dashboard-user-management-permissions-create',
                    component: () => UserManagementPermissionsCreate
                },
                {
                    path: '/dashboard/user-management/permissions/edit',
                    name: 'dashboard-user-management-permissions-edit',
                    component: () => UserManagementPermissionsEdit
                }
            ]
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => Login
        },
        {
            path: '/:notFound',
            name: 'notFound',
            component: () => NotFound
        }
    ]
});

export default router;
