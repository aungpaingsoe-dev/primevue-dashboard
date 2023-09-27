import UserManagementRoles from '@/views/dashboard/user-management/roles/index.vue';
import UserManagementRolesCreate from '@/views/dashboard/user-management/roles/create.vue';
import UserManagementRolesEdit from '@/views/dashboard/user-management/roles/edit.vue';

const rolesRoutes = [
    {
        path: '/dashboard/user-management/roles',
        name: 'dashboard-user-management-roles',
        component: UserManagementRoles
    },
    {
        path: '/dashboard/user-management/roles/create',
        name: 'dashboard-user-management-roles-create',
        component: UserManagementRolesCreate
    },
    {
        path: '/dashboard/user-management/roles/edit/:id',
        name: 'dashboard-user-management-roles-edit',
        component: UserManagementRolesEdit
    }
];

export default rolesRoutes;
