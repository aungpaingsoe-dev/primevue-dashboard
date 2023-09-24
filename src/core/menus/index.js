import homeMenus from "./dashboard/home";
import saCoreHrisMenus from "./dashboard/sa-core-hris";
import userManagementMenus from "./dashboard/user-management";

const menus = [
    // Home
    ...homeMenus,
    // Sa Core Hris
    ...saCoreHrisMenus,
    // User Management
    ...userManagementMenus,
];

export default menus;
