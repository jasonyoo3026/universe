import React from "react";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import SignupBtn from "./SignupBtn";
import { useAuth0 } from "@auth0/auth0-react";

const AuthBtn = () => {
  const { isAuthenticated: isUserAuthenticated } = useAuth0();

  return isUserAuthenticated ? (
    <LogoutBtn />
  ) : (
    <>
      <LoginBtn />
      <SignupBtn />
    </>
  );
};

export default AuthBtn;
