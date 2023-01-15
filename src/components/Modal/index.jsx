import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ children }) => {
  const elementRef = useRef(null);
  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elementRef.current);
    return () => modalRoot.removeChild(elementRef.current);
  }, []);
  return createPortal(
    <>
      <div className="overlay_container"></div>
      {children}
    </>,
    elementRef.current
  );
};

export default Modal;
