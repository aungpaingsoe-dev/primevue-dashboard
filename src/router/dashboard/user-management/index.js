import userRoutes from './users';
import rolesRoutes from './roles';
import permissionsRoutes from './permissions';

const userManagenentRoutes = [
    ...userRoutes,
    ...rolesRoutes,
    ...permissionsRoutes
];

export default userManagenentRoutes;
