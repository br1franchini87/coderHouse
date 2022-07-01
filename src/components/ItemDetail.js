import React, { useState } from "react";
import { Row, Col, Image, ListGroup, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ product }) => {
    
    const { img, title, stock, description, price } = product;

    const { cart, addToCart } = useContext(CartContext);

    const initial = 1;

    const [inputType, setInutType] = useState('button')

    const onAdd = (count) => {
        setInutType('input')
        addToCart({ ...product, cantidad: count });
    };
    return (
        <div>
            <Row style={{ flexDirection: "column", margin:'0' }}>
                <Col md={3}>
                    <Image src={img} alt={title} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{title}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>{description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Precio :</Col>
                                    <Col>
                                        <strong>${price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{stock > 0 ? <h6 style={{ color: "limegreen", fontWeight: "bold" }}>Disponible</h6> : <h6 style={{ color: "red" }}>Sin Stock!</h6>}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ margin: "0 auto", minHeight:'120px' }}>
                                {inputType === 'button' ? 
                                 <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
                                 : 
                                <Link to='/cart'> <button type="button" className="btn-sm btn btn-outline-info">Ir al carrito</button></Link>
                            }
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ItemDetail;
