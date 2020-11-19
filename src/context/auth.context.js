import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const login = ({ email, password }) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const register = ({ email, password }) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    return auth.signOut();
  };

  const forgotPassword = ({ email }) => {
    return auth.sendPasswordResetEmail(email);
  };

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoadingUser(false);
    });
  }, []);

  const contextObj = {
    user,
    login,
    loadingUser,
    logOut,
    register,
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={contextObj}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("Context should be used inside provider");
  }
  return auth;
};
