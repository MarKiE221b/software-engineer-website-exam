import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";


function ModalCheck({animationImage}) {

  const [show, setShow] = useState(true);

  return (
    <Modal
      size="sm"
      show={show}
      onHide={() => setShow(false)}
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>
        <div
          style={{ width: "100%", height: "auto" }}
        ><Lottie animationData={animationImage} loop={false} /></div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalCheck;
