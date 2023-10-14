import userManagementMenus from "./dashboard/user-management";
import homeMenus from "./dashboard/home";

const menus = [
    // Home 
    ...homeMenus,
    // User Management
    ...userManagementMenus,
];

export default menus;
