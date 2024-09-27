import UserDashboard from "../pages/User/UserDashboard";
import UsersLogin from "../pages/Auth/UsersLogin";
import Login from "../pages/Auth/Login";
import AdminDashboard from "../pages/Admin/AdminDashboard";

const routesConfig:any = [
  { path: "/user/login", component: UsersLogin, role: "user" },
  { path: "/user/dashboard", component: UserDashboard, role: "user" },
  { path: '/admin/login', component: Login, allowedRoles: ['user', 'admin'] },
  { path: '/admin/dashboard', component: AdminDashboard, role: 'admin' },
//   { path: '/admin/login', component: Login, allowedRoles: ['user', 'admin'] },
];

export default routesConfig;
