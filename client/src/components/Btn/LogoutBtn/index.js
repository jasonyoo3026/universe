import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthBtn from "../AuthBtn";

const LogoutBtn = () => {
  const { logout } = useAuth0();
  return <AuthBtn text="Log Out" onClick={() => logout({ returnTo: window.location.origin })} />;
};

export default LogoutBtn;
