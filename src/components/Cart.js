import React, { useContext } from "react";
import { CartContext } from "./cartContext";

const Cart = () => {
    const { cart, removeCart } = useContext(CartContext);
    return (
        <div>
            {cart.map((chola) => {
                <h1>{chola.title}</h1>;
            })}
            <button onClick={removeCart}>vaciar</button>
        </div>
    );
};

export default Cart;
