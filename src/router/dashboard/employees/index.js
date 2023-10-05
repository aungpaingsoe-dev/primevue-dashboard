import EmployeeSalary from '@/views/dashboard/employees/salary/index.vue';
import EmployeeTurnovers from '@/views/dashboard/employees/turnovers/index.vue';
const employeeRoutes = [
    {
        path: '/dashboard/employees/salary',
        name: 'dashboard-employees-salary',
        component: EmployeeSalary
    },
    {
        path: '/dashboard/employees/turnovers',
        name: 'dashboard-employees-turnovers',
        component: EmployeeTurnovers
    }
]

export default employeeRoutes;
