import React from "react";
import  FormInput from "../form-input/form-input.component"

import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils"
import "./signup.styles.scss"


class Signup extends React.Component {
    constructor () {
        super ();

        this.state = {
        displayName : "",
        email: "",
        password:"",
        confirmPassword : ""
    }
}

handleSubmit = async event => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword)
     {alert (`Passwords don't match`);
      return;
    }
    
    try {
        const {user} = await auth.createUserWithEmailAndPassword(
            email,
            password
        );
        createUserProfileDocument(user, {displayName});

        
        this.setState = {
            displayName : "",
            email: "",
            password:"",
            confirmPassword : ""
        }
    }
    catch(error) {
        console.error(error);
    }
}

handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
}
render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
          <h2 className="title">I do not have an account</h2>
          <span>Sign up with your email</span>
          <form className ="sign-up-form" onSubmit= {this.handleSubmit}>
          <FormInput
            name='displayName'
            type='text'
            onChange={this.handleChange}
            value={displayName}
            label='Display Name'
            required
          />

          <FormInput
            name='email'
            type='email'
            onChange={this.handleChange}
            value={email}
            label='email'
            required
          />

         <FormInput
            name='password'
            type='password'
            onChange={this.handleChange}
            value={password}
            label='password'
            required
          />


        <FormInput
            name='confirmPassword'
            type='password'
            onChange={this.handleChange}
            value={confirmPassword}
            label='Confirm Password'
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
          </form>
      </div>
    );
  }
};

export default Signup;