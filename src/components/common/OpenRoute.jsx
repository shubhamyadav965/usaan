import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


function OpenRoute({ children }) {

  const {token,user} = useSelector((state) => state.auth);

  if (!token) {
    return children;
  } else {
    return <Navigate to={`/dashboard/${user?.accountType}`} replace />;
  }
}

export default OpenRoute;
