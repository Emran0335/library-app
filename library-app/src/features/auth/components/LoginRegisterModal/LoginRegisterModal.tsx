import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayLogin } from "../../../../redux/slices/ModalSlice";
import { Modal } from "../../../../components";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { LoginForm } from "../LoginForm/LoginForm";

export const LoginRegisterModal: React.FC = () => {
  const [login, setLogin] = useState<boolean>(true);

  const authState = useSelector((state: RootState) => state.authentication);
  console.log(authState);

  const dispatch: AppDispatch = useDispatch();

  const toggle = () => {
    setLogin(!login);
  };
  const closeModal = () => {
    dispatch(setDisplayLogin(false));
  };

  useEffect(() => {
    return () => {
      if (authState.loggedInUser) {
        localStorage.setItem("userId", authState.loggedInUser._id);
      }
    };
  }, [authState.loggedInUser]);
  return (
    <Modal
      content={
        login ? (
          <LoginForm toggleLogin={toggle} />
        ) : (
          <RegisterForm toggleRegister={toggle} />
        )
      }
      toggleModal={closeModal}
    />
  );
};
