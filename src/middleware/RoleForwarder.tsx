import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

interface RoleForwarderProps {
  userRole: string;
  roleRoutes: { [key: string]: React.ElementType };
}

const RoleForwarder: React.FC<RoleForwarderProps> = ({ userRole, roleRoutes }) => {
  const Component = roleRoutes[userRole];

  console.log('User Role:', userRole);
  console.log('Component to Render:', Component);

  if (!Component) {
    console.error(`No component found for role: ${userRole}`);
    return <Navigate to="/" />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default RoleForwarder;
