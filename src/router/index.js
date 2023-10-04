import { createRouter, createWebHistory } from 'vue-router';
import { get } from '@/services/cookie';
import AppLayout from '@/layout/AppLayout.vue';
// Utli Routes
import utliRoutes from './utli';
// Auth Routes
import authRoutes from '../router/auth'
// Home
import homeRoutes from './dashboard/home';
// Sa Core Management
import saCoreHrisRoutes from './dashboard/sa-core-hris';
// User Management
import userManagementRoutes from './dashboard/user-management';
// Turnovers
import turnoversRoutes from './dashboard/turnovers';
// Employee
import employeeRoutes from './dashboard/employee';

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
                // Sa Core Hris Management
                ...saCoreHrisRoutes,
                // Turnovers
                ...turnoversRoutes,
                // Employee
                ...employeeRoutes,
                // User Management
                ...userManagementRoutes,
            ],
            beforeEnter: (to, from, next) => {
                if (get('access_token')) {
                    next();
                } else next('/auth/login');
            }
        },
        ...authRoutes,
        ...utliRoutes
    ]
});

export default router;
