// import React, { Component } from "react";
// import Modal from "./Modal/Modal";
// import Backdrop from "./Backdrop/Backdrop";
// import Transition from "react-transition-group/Transition";

// class MyModal extends Component {
//   state = {
//     modalIsOpen: false,
//     showBlock: false,
//   };
//   showModal = () => this.setState({ modalIsOpen: true });
//   closeModal = () => this.setState({ modalIsOpen: false });

//   render() {
//     return (
//       <div className="App">
//         <Transition
//           in={this.state.showBlock}
//           timeout={300}
//           mountOnEnter
//           unmountOnExit
//           onEnter={() => {
//             console.log("Enter");
//           }}
//           onEntering={() => {
//             console.log("Entering");
//           }}
//           onEntered={() => {
//             console.log("Entered");
//           }}
//           onExit={() => {
//             console.log("Exit");
//           }}
//           onExiting={() => {
//             console.log("Exiting");
//           }}
//           onExited={() => {
//             console.log("Exited");
//           }}
//         >
//           {(state) => (
//             <div
//               style={{
//                 width: 100,
//                 height: 100,
//                 backgroundColor: "red",
//                 margin: "auto",
//                 transition: "opacity 1s ease-out",
//                 opacity: state === "exiting" ? 0 : 1,
//               }}
//             ></div>
//           )}
//         </Transition>

//         <Modal
//           show={this.state.modalIsOpen}
//           closed={this.closeModal}
//           data={"helo"}
//         />

//         <Backdrop />
//         <button className="Button" onClick={this.showModal}>
//           Open Modal
//         </button>
//       </div>
//     );
//   }
// }

// export default MyModal;

import React, { useState } from "react";
import Modal from "./Modal/Modal";
import Backdrop from "./Backdrop/Backdrop";
// import Transition from "react-transition-group/Transition";

const MyModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [showBlock, setShowBlock] = useState(false);

  const showModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="App">
      {/* <Transition
        in={showBlock}
        timeout={300}
        mountOnEnter
        unmountOnExit
        onEnter={() => {
          console.log("Enter");
        }}
        onEntering={() => {
          console.log("Entering");
        }}
        onEntered={() => {
          console.log("Entered");
        }}
        onExit={() => {
          console.log("Exit");
        }}
        onExiting={() => {
          console.log("Exiting");
        }}
        onExited={() => {
          console.log("Exited");
        }}
      >
        {(state) => (
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
              margin: "auto",
              transition: "opacity 1s ease-out",
              opacity: state === "exiting" ? 0 : 1,
            }}
          ></div>
        )}
      </Transition> */}

      <Modal show={modalIsOpen} closed={closeModal} data={"helo"} />

      <Backdrop />
      <button className="Button" onClick={showModal}>
        Open Modal
      </button>
    </div>
  );
};

export default MyModal;
