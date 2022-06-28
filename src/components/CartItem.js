import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Row, Col, Image, ListGroup, Card } from "react-bootstrap";

const CartItem = ({ product }) => {
  const { removeItem } = useContext(CartContext);
  const { title, price, cantidad, id, img } = product;
  return (
    <div>
      <Row style={{ flexDirection: "row", marginBottom: "25px", borderBottom: "1px solid #39456B" }}>
        <Image style={{ height: "10%", width: "10%", margin: "auto 0" }} src={img} alt={title} fluid />
        <div style={{width:'90%'}}>
          <button style={{ float: "right" }} className="btn btn-outline-danger btn-sm" onClick={() => removeItem(id)}>
            X
          </button>

          <h6>{title}</h6>
          <h6>
            $  {' '}
            {price}
          </h6>
          <h6>
            Cantidad:  {' '}
            {cantidad}
          </h6>
        </div>
      </Row>
    </div>
  );
};

export default CartItem;
