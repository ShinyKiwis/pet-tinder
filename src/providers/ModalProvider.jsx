import { createContext, useState } from "react";

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const toggleModal = (message) => {
    setMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider
      value={{ toggleModal, message, closeModal, showModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
