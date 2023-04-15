import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserRoute = ({ children, ...rest }) => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? (
    <Routes>
      <Route {...rest}>{children}</Route>
    </Routes>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default UserRoute;
