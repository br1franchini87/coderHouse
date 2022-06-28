import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";

const ItemCount = ({ stock, onAdd, initial }) => {
  const [count, setCount] = useState(initial);

  const decrese = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const sum = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <ListGroup.Item disabled={stock === 0} style={stock ===0 ? {opacity:'.5', margin: "0 auto", textAlign: "center"}: {opacity:'1', margin: "0 auto", textAlign: "center"}}>
        <Button onClick={decrese} className="btn-sm btn btn-outline-info">
          -
        </Button>
        <span style={{ margin: "0 .3rem" }}>{count}</span>
        <Button onClick={sum} className="btn-sm btn btn-outline-info">
          +
        </Button>
        <br></br>
        <Button onClick={() => onAdd(count)} className="btn-sm btn btn-outline-info" style={{ marginTop: "1rem" }} type="button">
          Agregar al carrito
        </Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemCount;
