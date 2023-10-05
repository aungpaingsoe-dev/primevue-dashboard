const employeeMenus = [
               {
                   label: 'Employees',
                   items: [
                       {
                           label: 'Salary',
                           icon: 'pi pi-fw pi-bookmark',
                           to: '/dashboard/employees/salary'
                       },
                       {
                        label: 'Turnovers',
                        icon: 'pi pi-fw pi-bookmark',
                        to: '/dashboard/employees/turnovers'
                    },
                    {
                        label: 'Overtime Hours',
                        icon: 'pi pi-fw pi-bookmark',
                        to: '/dashboard/employees/overtime-hours'
                    },
                    {
                        label: 'About',
                        icon: 'pi pi-fw pi-bookmark',
                        to: '/dashboard/employees/about'
                    }
                   ]
               },
           ]
           
           export default employeeMenus;