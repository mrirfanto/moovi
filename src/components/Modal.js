import React from "react";

const Modal = ({ content, show, close }) => {
  const onCloseModal = () => {
    close();
  };

  return show ? (
    <>
      <div className="modal" onClick={onCloseModal}>
        <div className="modal__content">{content}</div>
      </div>
    </>
  ) : (
    ""
  );
};

export default Modal;
