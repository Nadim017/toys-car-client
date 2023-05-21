import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Component/AuthProvider/AuthProviders';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="text-center mt-10 mb-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" replace={true} state={{ from: location }}></Navigate>
  );
};

export default PrivateRoutes;
