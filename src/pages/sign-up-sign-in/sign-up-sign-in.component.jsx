import React from 'react';
import './sign-in-sign-up.styles.scss';
import SignIn from "../../components/signin/signin.component";
import Signup from "../../components/signup/signup.component";

function SignInSignUp() {
    return (
      <div>
        <SignIn />
        <Signup />
      </div>
    );
  }

export default SignInSignUp;
