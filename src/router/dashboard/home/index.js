import Index from '@/views/index.vue';
import Home from '@/views/dashboard/home/index.vue'

const homeRoutes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/dashboard/home',
        name: 'dashboard-home',
        component: Home
    }
];

export default homeRoutes;