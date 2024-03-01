import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/ReduxStore";
import { registerUser } from "../redux/slices/AuthenticationSlice";

export const RegisterForm: React.FC = () => {
  const authState = useSelector((state: RootState) => state.authentication);
  console.log(authState.registeredUser);

  const dispatch: AppDispatch = useDispatch();

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleRegisterUser = (e: React.MouseEvent<HTMLBRElement>) => {
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
    <form>
      <h2>Enter your information</h2>
      <div className="register-form-name-group">
        <div className="register-form-name-input-group">
          <h6>FirstName</h6>
          <input
            type="text"
            name="firstName"
            className="register-form-input-name"
            placeholder="firstName"
            ref={firstNameRef}
            required
          />
        </div>
        <div className="register-form-name-input-group">
          <h6>LastName</h6>
          <input
            type="text"
            name="lastName"
            className="register-form-input-name"
            placeholder="lastName"
            ref={lastNameRef}
            required
          />
        </div>
        <div className="register-form-name-input-group">
          <h6>Email</h6>
          <input
            type="email"
            name="email"
            className="register-form-input-name"
            placeholder="email"
            ref={emailRef}
            required
          />
        </div>
        <div className="register-form-name-input-group">
          <h6>Password</h6>
          <input
            type="password"
            name="password"
            className="register-form-input-name"
            placeholder="password"
            ref={passwordRef}
            required
          />
        </div>
      </div>
      <button className="register-form-submit" onClick={handleRegisterUser}>
        Register
      </button>
    </form>
  );
};
