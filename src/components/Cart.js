import React, { useContext } from "react";
import { CartContext } from "./cartContext";
import {Container} from 'react-bootstrap'

const Cart = () => {
    const { cart, removeCart } = useContext(CartContext);
    return (
        <div>
            <Container>
        <h4>Carrito</h4>
            {cart.map((cartItem) => (
                <div>
                    <h3>{cartItem.title}</h3>
                    <h4> <strong>$ </strong>{cartItem.price}</h4>
                </div>
            ))}
            <button className="btn btn-outline-danger btn-sm" onClick={removeCart}>Remover todo</button>
            </Container>
        </div>
    );
};

export default Cart;
