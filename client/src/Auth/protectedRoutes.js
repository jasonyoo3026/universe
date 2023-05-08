import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoutes = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <div>Loading...Please wait for a second</div>,
    })}
    {...args}
  />
);

export default ProtectedRoutes;
