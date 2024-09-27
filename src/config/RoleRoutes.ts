import { lazy } from 'react';

const AdminRoutes = lazy(() => import('../routes/AdminRoutes'));
const UserRoutes = lazy(() => import('../routes/UserRoutes'));

const RoleRoutes = {
  admin: AdminRoutes,
  user: UserRoutes,
};

export default RoleRoutes;