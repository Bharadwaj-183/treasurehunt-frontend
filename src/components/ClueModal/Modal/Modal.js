import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

const Modal = (props) => {
  const animationTiming = {
    enter: 400,
    exit: 1000,
  };
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      <div className="Modal">
        <p>Wohooo!! You have unlocked a clue!!</p>
        <h1 id="clue">{props.data}</h1>
        <button className="pirate success" onClick={props.closed}>
          Continue
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
