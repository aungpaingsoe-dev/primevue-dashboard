import EmployeeSalary from '@/views/dashboard/employees/salary/index.vue';
import EmployeeTurnovers from '@/views/dashboard/employees/turnovers/index.vue';
import EmployeeOvertimeHours from '@/views/dashboard/employees/overtime-hours/index.vue';
import EmployeeAbout from '@/views/dashboard/employees/about/index.vue';
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
    },
    {
        path: '/dashboard/employees/overtime-hours',
        name: 'dashboard-employees-overtime-hours',
        component: EmployeeOvertimeHours
    },
    {
        path: '/dashboard/employees/about',
        name: 'dashboard-employees-about',
        component: EmployeeAbout
    }
]

export default employeeRoutes;
