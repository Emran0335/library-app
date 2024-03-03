import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { registerUser } from "../../../../redux/slices/AuthenticationSlice";

import './RegisterForm.css'

export const RegisterForm: React.FC = () => {
  const authState = useSelector((state: RootState) => state.authentication);
  console.log(authState.registeredUser);

  const dispatch: AppDispatch = useDispatch();

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleRegisterUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      firstNameRef &&
      firstNameRef.current &&
      lastNameRef &&
      lastNameRef.current &&
      emailRef &&
      emailRef.current &&
      passwordRef &&
      passwordRef.current
    ) {
      dispatch(
        registerUser({
          type: "PATRON",
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  return (
    <form className="register-form">
    <h2>Enter your information</h2>
  
    <div className="register-form-name-group">
      <div className="register-form-name-input-group">
        <h6>First Name</h6>
        <input
          className="register-form-input-name"
          type="text"
          name="first"
          placeholder="firstName"
          ref={firstNameRef}
          required
        />
      </div>
      <div className="register-form-name-input-group">
        <h6>Last Name</h6>
        <input
          className="register-form-input-name"
          type="text"
          name="last"
          placeholder="lastName"
          ref={lastNameRef}
          required
        />
      </div>
    </div>
    <div className="register-form-input-group">
      <h6>Email</h6>
      <input
        className="register-form-input"
        type="email"
        name="email"
        placeholder="email"
        ref={emailRef}
        required
      />
    </div>
    <div className="register-form-input-group">
      <h6>Password</h6>
      <input
        className="register-form-input"
        type="password"
        name="password"
        placeholder="passowrd"
        ref={passwordRef}
        required
      />
    </div>
    <button className="register-form-submit" onClick={handleRegisterUser}>
      Register
    </button>
  </form>
  );
};
