import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/dashboard/index.vue')
                },
                {
                    path: '/dashboard2',
                    name: 'dashboard2',
                    component: () => import('@/views/dashboard/dashboard2.vue')
                }
            ],
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/auth/login.vue')
        },
    ]
});

export default router;
