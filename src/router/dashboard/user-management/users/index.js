import UserManagementUsers from '@/views/dashboard/user-management/users/index.vue';
import UserManagementUsersCreate from '@/views/dashboard/user-management/users/create.vue';
import UserManagementUsersEdit from '@/views/dashboard/user-management/users/edit.vue';

const userManagementRoutes = [
    {
        path: '/dashboard/user-management/users',
        name: 'dashboard-user-management-users',
        component: UserManagementUsers
    },
    {
        path: '/dashboard/user-management/create',
        name: 'dashboard-user-management-create',
        component: UserManagementUsersCreate
    },
    {
        path: '/dashboard/user-management/users/edit/:id',
        name: 'dashboard-user-management-users-edit',
        component: UserManagementUsersEdit
    }
];

export default userManagementRoutes;
