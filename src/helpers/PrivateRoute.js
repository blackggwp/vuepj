import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { usersSelector } from "../slices/users";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const { isLoggedIn } = useSelector(usersSelector)
  const isLogin = localStorage.getItem('isLogin')
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
