import { Route, Routes } from "react-router-dom";
import { UserDashboard } from "../pages/User/UserDashboard";
import { UsersLogin } from "../pages/Auth/UsersLogin";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<UsersLogin />} />
      <Route path="dashboard" element={<UserDashboard />} />
    </Routes>
  );
};

export default UserRoutes;
