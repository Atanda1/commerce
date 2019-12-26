import React from 'react';
import './sign-in-sign-up.styles.scss';
import SignIn from "../../components/signin/signin.component";
import Signup from "../../components/signup/signup.component";

function SignInSignUp() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <Signup />
      </div>
    );
  }

export default SignInSignUp;
