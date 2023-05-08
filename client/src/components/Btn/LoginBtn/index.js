// LoginBtn.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthBtn from "../AuthBtn";

const LoginBtn = () => {
  const { loginWithRedirect } = useAuth0();
  return <AuthBtn text="Log In" onClick={() => loginWithRedirect()} />;
};

export default LoginBtn;
