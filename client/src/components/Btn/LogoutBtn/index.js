import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";

const LogoutBtn = () => {
  const { logout } = useAuth0();
  return <Button text="Log Out" onClick={() => logout({ returnTo: window.location.origin })} />;
};

export default LogoutBtn;
