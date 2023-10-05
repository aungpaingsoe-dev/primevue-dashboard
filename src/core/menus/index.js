import homeMenus from "./dashboard/home";
import saCoreHrisMenus from "./dashboard/sa-core-hris";
import userManagementMenus from "./dashboard/user-management";
import employeeMenus from './dashboard/employees'

const menus = [
    // Home
    ...homeMenus,
    // Sa Core Hris
    ...saCoreHrisMenus,
    // Employee
    ...employeeMenus,
    // User Management
    ...userManagementMenus,
];

export default menus;
