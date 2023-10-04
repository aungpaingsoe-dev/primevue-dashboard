import homeMenus from "./dashboard/home";
import saCoreHrisMenus from "./dashboard/sa-core-hris";
import userManagementMenus from "./dashboard/user-management";
import turnoversMenus from "./dashboard/turnovers";
import employeeMenus from './dashboard/employee'

const menus = [
    // Home
    ...homeMenus,
    // Sa Core Hris
    ...saCoreHrisMenus,
    // Turnovers
    ...turnoversMenus,
    // Employee
    ...employeeMenus,
    // User Management
    ...userManagementMenus,
];

export default menus;
