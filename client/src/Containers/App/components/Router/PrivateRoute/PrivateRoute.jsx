import React, { useMemo } from "react";
import { Route, Redirect } from "react-router-dom";

import { PublicRoutes } from "utils/routes";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useMemo(() => {
    return localStorage.getItem("authToken") || false;
  }, []);

  return isLoggedIn ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to={`${PublicRoutes.auth}?type=login`} />
  );
};

export default PrivateRoute;
