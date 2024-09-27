import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface DynamicRouteMiddlewareProps {
  userRole: string;
  routes: {
    path: string;
    component: React.ElementType;
    role: string;
    allowedRoles?: string[];
  }[];
}

const DynamicRouteMiddleware: React.FC<DynamicRouteMiddlewareProps> = ({
  userRole,
  routes,
}) => {
  const loginRoutes = routes.filter((route) => route.allowedRoles);
  const canAccessLoginRoute = loginRoutes.some((route) =>
    route.allowedRoles?.includes(userRole)
  );
  
  if (!canAccessLoginRoute) {
	return <Navigate to={`/${userRole}/dashboard`} />;
  }

  return <Outlet />;
};

export default DynamicRouteMiddleware;
