import EmployeeSalary from '@/views/dashboard/employees/salary/index.vue';
import EmployeeTurnovers from '@/views/dashboard/employees/turnovers/index.vue';
import EmployeeIndividual from '@/views/dashboard/employees/individual/index.vue'
import EmployeeOvertimeHours from '@/views/dashboard/employees/overtime-hours/index.vue';
import EmployeeAbout from '@/views/dashboard/employees/about/index.vue';
import EmployeeContract from '@/views/dashboard/employees/contract/index.vue';
import EmployeeStatus from '@/views/dashboard/employees/status/index.vue';

const employeeRoutes = [
    {
        path: '/dashboard/employees/individual',
        name: 'dashboard-employees-individual',
        component: EmployeeIndividual
    },
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
    },
    {
        path: '/dashboard/employess/contract',
        name: 'dashboard-employees-contract',
        component: EmployeeContract
    },
    {
        path: '/dashboard/employess/status',
        name: 'dashboard-employees-status',
        component: EmployeeStatus
    }
]

export default employeeRoutes;
