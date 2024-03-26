import React, { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/ReduxStore";
import {
  registerUser,
  resetRegisterSuccess,
} from "../../../../../redux/slices/AuthenticationSlice";
import "./RegisterForm.css";

interface RegisterFormProps {
  toggleRegister(): void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  toggleRegister,
}) => {
  const authState = useSelector((state: RootState) => state.authentication);
  const dispatch: AppDispatch = useDispatch();
  console.log(authState);
  const firstRef = useRef<HTMLInputElement>(null);
  const lastRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleRegisterUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      firstRef &&
      firstRef.current &&
      lastRef &&
      lastRef.current &&
      emailRef &&
      emailRef.current &&
      passwordRef &&
      passwordRef.current
    ) {
      dispatch(
        registerUser({
          type: "PATRON",
          firstName: firstRef.current.value,
          lastName: lastRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetRegisterSuccess());
    };
  }, [dispatch]);

  return (
    <form className="register-form">
      <h2>Enter your information</h2>
      {authState.error ? (
        <p className="register-form-error">There was an error</p>
      ) : (
        <></>
      )}
      <div className="register-form-name-group">
        <div className="register-form-name-input-group">
          <h6>First Name</h6>
          <input
            className="register-form-input-name"
            type="text"
            name="first"
            placeholder="firstName"
            ref={firstRef}
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
            ref={lastRef}
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
      {authState.registerSuccess ? (
        <p>
          Registered successfully.{" "}
          <span className="register-form-login" onClick={toggleRegister}>
            Login here
          </span>
        </p>
      ) : (
        <></>
      )}
    </form>
  );
};
