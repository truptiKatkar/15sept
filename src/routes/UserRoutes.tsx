import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const UserDashboard = React.lazy(() => import("../pages/User/UserDashboard"));
const UsersLogin = React.lazy(() => import("../pages/Auth/UsersLogin"));

const UserRoutes = () => {
  console.log('Rendering UserRoutes');
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="login" element={<UsersLogin />} />
        <Route path="dashboard" element={<UserDashboard />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;

