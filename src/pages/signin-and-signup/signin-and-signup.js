import React from 'react';
import './signin-and-signup.styles.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInAndSignUpPage = () => (
  <div className="signin-and-signup">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUpPage;
