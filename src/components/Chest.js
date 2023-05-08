import "./Chest.css";
import Modal from "./ClueModal/Modal/Modal";
import { useState } from "react";
const Chest = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
    // setTimeout(() => {
    // //   navigate("/pirate/stage2");
    // }, 1000);
  };
  return (
    <div>
      <Modal show={modalIsOpen} closed={closeModal} data={props.data} />
      <img
        onClick={() => {
          setModalIsOpen(true);
        }}
        className="move"
        id="chestimage"
        src="/images/chest2.png"
      />
    </div>
  );
};
export default Chest;
