import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AppRoutes } from 'src/config/constants';

const PrivatePage = () => {
  const auth = localStorage.getItem('userId');
  return auth ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} replace />;
};

export default PrivatePage;
