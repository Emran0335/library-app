import React, { useRef } from "react";
import "./LoginForm.css";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { loginUser } from "../../../../redux/slices/AuthenticationSlice";

const LoginForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const auth = useSelector((state: RootState) => state.authentication);
  console.log(auth.loggedInUser);
  const dispatch: AppDispatch = useDispatch();

  const handleLoginUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailRef && emailRef.current && passwordRef && passwordRef.current) {
      dispatch(
        loginUser({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  return (
    <form className="login-form">
      <h2>Please Login</h2>
      <div className="login-form-input-group">
        <h6>Email</h6>
        <input
          type="email"
          name="email"
          className="login-form-input"
          placeholder="email"
          required
          ref={emailRef}
        />
      </div>
      <div className="login-form-input-group">
        <h6>Password</h6>
        <input
          type="password"
          name="password"
          className="login-form-input"
          placeholder="password"
          required
          ref={passwordRef}
        />
      </div>
      <button className="login-form-submit" onClick={handleLoginUser}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
