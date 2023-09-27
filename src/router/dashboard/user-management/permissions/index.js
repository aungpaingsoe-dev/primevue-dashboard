import UserManagementPermissions from '@/views/dashboard/user-management/permissions/index.vue';
import UserManagementPermissionsCreate from '@/views/dashboard/user-management/permissions/create.vue';
import UserManagementPermissionsEdit from '@/views/dashboard/user-management/permissions/edit.vue';

const permissionsRoutes = [
    {
        path: '/dashboard/user-management/permissions',
        name: 'dashboard-user-management-permissions',
        component: UserManagementPermissions
    },
    {
        path: '/dashboard/user-management/permissions/create',
        name: 'dashboard-user-management-permissions-create',
        component: UserManagementPermissionsCreate
    },
    {
        path: '/dashboard/user-management/permissions/edit/:id',
        name: 'dashboard-user-management-permissions-edit',
        component: UserManagementPermissionsEdit
    }
]

export default permissionsRoutes;