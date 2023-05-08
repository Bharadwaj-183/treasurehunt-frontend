// import React, { useState } from "react";
// import Modal from "react-modal";
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     backgroundColor: "none",
//     width: 400,
//     height: 300,
//   },
// };

// function ReactModal() {
//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={setModalOpen}>Open Modal</button>
//       <Modal
//         isOpen={modalOpen}
//         onRequestClose={() => setModalOpen(false)}
//         style={customStyles}
//       >
//         <div>Login/Signup</div>

//         <button onClick={() => setModalOpen(false)}>Close Modal</button>
//       </Modal>
//     </div>
//   );
// }

// export default ReactModal;

// import { useState } from "react";
// import { CButton } from "@coreui/react";
// import { CModal } from "@coreui/react";
// import { CModalBody } from "@coreui/react";
// import { CModalHeader } from "@coreui/react";
// import { CModalTitle } from "@coreui/react";
// import { CModalFooter } from "@coreui/react";

// const ReactModal = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <>
//       <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
//       <CModal visible={visible} onClose={() => setVisible(false)}>
//         <CModalHeader onClose={() => setVisible(false)}>
//           <CModalTitle>Modal title</CModalTitle>
//         </CModalHeader>
//         <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//           <CButton color="primary">Save changes</CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };

// export default ReactModal;

// import React from "react";
// import Rodal from "rodal";

// // include styles
// import "rodal/lib/rodal.css";

// class ReactModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { visible: false };
//   }

//   show() {
//     this.setState({ visible: true });
//   }

//   hide() {
//     this.setState({ visible: false });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.show.bind(this)}>show</button>

//         <Rodal
//           visible={this.state.visible}
//           onClose={this.hide.bind(this)}
//           customStyles={{ backgroundImage: "/public/images/bg2.webp" }}
//         >
//           <div>Hello</div>
//         </Rodal>
//       </div>
//     );
//   }
// }

// export default ReactModal;

import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./ReactModal.css";

const ReactModal = (props) => {
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
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default ReactModal;
