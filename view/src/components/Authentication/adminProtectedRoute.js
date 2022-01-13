import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../Authentication/auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => 
        localStorage.getItem("token") ? (
            <Component {...props} />
        ) : (
            <Redirect to="/admin/login" />
        )
      }
    />
  );
};
