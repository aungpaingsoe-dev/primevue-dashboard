import SaCoreHrisAttended from '@/views/dashboard/sa-core-hris/attended/index.vue';
import SaCoreHrisVecancy from '@/views/dashboard/sa-core-hris/vecancy/index.vue';
import SaCoreHrisTodayAttendance from '@/views/dashboard/sa-core-hris/today-attendance/index.vue';

const saCoreHrisRoutes = [
    {
        path: '/dashboard/sa-core-hris/attended',
        name: 'dashboard-sa-core-hris-attended',
        component: SaCoreHrisAttended
    },
    {
        path: '/dashboard/sa-core-hris/vecancy',
        name: 'dashboard-sa-core-hris-vecancy',
        component: SaCoreHrisVecancy
    },
    {
        path: '/dashboard/sa-core-hris/today-attendance',
        name: 'dashboard-sa-core-hris-today-attendance',
        component: SaCoreHrisTodayAttendance
    }
]

export default saCoreHrisRoutes;
