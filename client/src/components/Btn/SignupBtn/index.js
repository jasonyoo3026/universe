import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";

const SignupBtn = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button text="Sign Up" onClick={() => loginWithRedirect({ screen_hint: "signup" })} />;
};

export default SignupBtn;
