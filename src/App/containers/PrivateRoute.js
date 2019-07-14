import React from "react";
import { Route, Redirect } from "react-router-dom";

import UserContext from "../contexts/user";

const PrivateRoute = ({ component: Component, ...others }) => {
  return (
    <UserContext.Consumer>
      {({ signedIn }) => {
        return (
          <Route
            {...others}
            render={props =>
              signedIn ? (
                <Component {...props} />
              ) : (
                // Redirigimos a /login en otro caso
                <Redirect
                  to={{
                    pathname: "/auth",
                    state: {
                      message: "Por favor, haz login primero"
                    }
                  }}
                />
              )
            }
          />
        );
      }}
    </UserContext.Consumer>
  );
};

export default PrivateRoute;
