import React from "react";
import { useAuth } from "../context/auth.context";

const Dashboard = () => {
  const { logOut } = useAuth();
  return (
    <div>
      <h1>Protected Dashboard</h1>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Dashboard;
