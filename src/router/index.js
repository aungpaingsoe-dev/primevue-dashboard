import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
// Utli Routes
import utliRoutes from './utli';
// Auth Routes
import authRoutes from '../router/auth';
// Home
import homeRoutes from './dashboard/home';
// User Management
import userManagementRoutes from './dashboard/user-management';

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: (to, from, savedPosition) => {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                // Home 
                ...homeRoutes,
                // User Management
                ...userManagementRoutes
            ]
            // beforeEnter: (to, from, next) => {
            //     if (get('access_token')) {
            //         next();
            //     } else next('/auth/login');
            // }
        },
        ...authRoutes,
        ...utliRoutes
    ]
});

export default router;
