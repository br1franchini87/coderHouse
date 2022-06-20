import React, { useContext } from "react";
import { CartContext } from "./cartContext";
import {Container} from 'react-bootstrap'

const Cart = () => {
    const { cart, removeCart } = useContext(CartContext);
    return (
        <div>
            <Container>
            {cart.map((chola) => (
                <h1>{chola.title}</h1>
            ))}
            <button onClick={removeCart}>vaciar</button>
            </Container>
        </div>
    );
};

export default Cart;
