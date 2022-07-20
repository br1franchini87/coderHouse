import React from "react";
import Modal from "react-bootstrap/Modal";
import Like from "../assets/green-checkmark.svg";

const ModalComponent = ({ formValues, show, handleClose, removeCart, orderResponse }) => {
  const closeAndClear = () => (handleClose(), removeCart());

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={closeAndClear}>Compra confirmada!</Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <img src={Like} style={{ width: "60px", height: "60px" }} />
          </div>
          <p>
            Gracias {formValues.name} {formValues.lastname} por tu compra. Un email de confirmacion fue enviado a {formValues.email}
          </p>
          <p>
            El numero de identificacion de tu compra es: <strong>{orderResponse.id}</strong>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button style={{ marginTop: "1rem" }} onClick={closeAndClear} className="btn btn-outline-light btn-sm">
            Aceptar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
