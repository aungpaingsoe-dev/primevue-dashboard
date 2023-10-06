import EmployeeSalary from '@/views/dashboard/employees/salary/index.vue';
import EmployeeTurnovers from '@/views/dashboard/employees/turnovers/index.vue';
import EmployeeIndividual from '@/views/dashboard/employees/individual/index.vue'

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
    }
]

export default employeeRoutes;
