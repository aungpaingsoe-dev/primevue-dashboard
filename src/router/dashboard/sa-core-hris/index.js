import SaCoreHrisAttended from '@/views/dashboard/sa-core-hris/attended/index.vue';
import SaCoreHrisVecancy from '@/views/dashboard/sa-core-hris/vecancy/index.vue';

const saCoreHrisRoutes = [
    {
        path: '/dashboard/sa-core-hris/attended',
        name: 'dashboard-sa-core-hris-attended',
        component: () => SaCoreHrisAttended
    },
    {
        path: '/dashboard/sa-core-hris/vecancy',
        name: 'dashboard-sa-core-hris-vecancy',
        component: () => SaCoreHrisVecancy
    }
]

export default saCoreHrisRoutes;
