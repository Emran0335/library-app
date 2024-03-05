import React, { useState } from "react";
import { AppDispatch } from "../../../../redux/ReduxStore";
import { useDispatch } from "react-redux";
import { setDisplayLogin } from "../../../../redux/slices/ModalSlice";
import { Modal } from "../../../../components";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { LoginForm } from "../LoginForm/LoginForm";

export const LoginRegisterModal: React.FC = () => {
  const [login, setLogin] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();

  const closeModal = () => {
    dispatch(setDisplayLogin(false));
  };

  const toggleLogin = () => {
    setLogin(() => !login);
  };
  return (
    <Modal
      content={
        login ? (
          <LoginForm toggleLoginRegister={toggleLogin} />
        ) : (
          <RegisterForm toggleLoginRegister={toggleLogin} />
        )
      }
      toggleModal={closeModal}
    />
  );
};
