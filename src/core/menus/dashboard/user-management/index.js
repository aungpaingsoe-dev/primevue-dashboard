import usersMenus from './users';
import rolesMenus from './roles';
import permissionsMenus from './permissions';

const userManagementMenus = [
    {
        label: 'User Mangement',
        items: [
            ...usersMenus, 
            ...rolesMenus, 
            ...permissionsMenus
        ]
    }
];

export default userManagementMenus;
