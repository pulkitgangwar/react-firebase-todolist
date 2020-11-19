import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const ProtectedRoute = ({ ...props }) => {
  const { user, loadingUser } = useAuth();
  if (loadingUser) {
    return <h1>Loading ....</h1>;
  }
  return <> {user ? <Route {...props} /> : <Redirect to="/login" />}</>;
};

export default ProtectedRoute;
