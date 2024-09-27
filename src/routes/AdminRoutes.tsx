import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AdminDashboard = React.lazy(() => import("../pages/Admin/AdminDashboard"));
const Login = React.lazy(() => import("../pages/Auth/Login"));

const AdminRoutes = () => {
  console.log('Rendering AdminRoutes');
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Routes>
    </Suspense>
  );
};

export default AdminRoutes;

