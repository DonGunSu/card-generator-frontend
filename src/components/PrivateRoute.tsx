import React, { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
  children?: ReactElement;
  authentication: boolean; // 인증 여부
}

const PrivateRoute = ({ authentication }: PrivateRouteProps) => {
  return authentication ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
