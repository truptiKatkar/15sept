import { Route, Routes } from "react-router-dom";
import { AdminDashboard } from "../pages/Admin/AdminDashboard";
import Login from "../pages/Auth/Login";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
