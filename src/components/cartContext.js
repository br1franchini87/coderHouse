import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
    /* estados y funciones globales aca */

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeCart = () => {
        setCart([]);
    };

    return (
        <div>
            <CartContext.Provider value={{ cart, addToCart, removeCart }}>{children}</CartContext.Provider>
        </div>
    );
};
