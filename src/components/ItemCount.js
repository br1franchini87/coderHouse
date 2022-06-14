import React, { useState } from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

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
            <ListGroup.Item style={{ margin: "0 auto", textAlign: "center" }}>
                <Button onClick={decrese} className='btn-sm btn btn-outline-info'>
                    -
                </Button>
                {count}
                <Button onClick={sum} className='btn-sm btn btn-outline-info'>
                    +
                </Button>
                <br></br>
                <Button onClick={() => onAdd(count)} className='btn-sm btn btn-outline-info' style={{ marginTop: "1rem" }} type='button' disabled={stock === 0}>
                    Agregar al carrito
                </Button>
            </ListGroup.Item>
        </div>
    );
};

export default ItemCount;
