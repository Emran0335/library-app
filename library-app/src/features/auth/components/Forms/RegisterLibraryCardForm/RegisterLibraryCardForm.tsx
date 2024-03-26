import React, { useState } from "react";
import './RegisterLibraryCardForm.css'


const RegisterLibraryCardForm: React.FC = () => {
  const [card, setCard] = useState(false);
  return (
    <>
      {card ? (
        <div className="register-library-card-container">
          <h3 className="register-library-card-text">Welcome</h3>
          <h5 className="register-library-card-text">
            To signup for a new library card, or you forget the ID number on
            your card, use the button below.
          </h5>
          <p className="register-library-card-text">
            Your library card number:{" "}
          </p>
          <button className="register-library-modal-button">
            Get Library Card
          </button>
        </div>
      ) : (
        <div className="register-library-card-container">
          <h3 className="register-library-card-text">
            You must be a memeber of the library to obtain a library card.
          </h3>
          <h4 className="register-library-card-text">
            Use the button to login to your account or register for free.
          </h4>
          <button className="register-library-modal-button">Login Here</button>
        </div>
      )}
    </>
  );
};

export default RegisterLibraryCardForm;
