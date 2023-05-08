import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthBtn from "../AuthBtn";

const SignupBtn = () => {
  const { loginWithRedirect } = useAuth0();
  return <AuthBtn text="Sign Up" onClick={() => loginWithRedirect({ screen_hint: "signup" })} />;
};

export default SignupBtn;
