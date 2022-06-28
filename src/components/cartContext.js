import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
    /* estados y funciones globales aca */

    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {

        if(isInCart(item.id)) {
            alert('el producto seleccionado ya se encuentra en el carrito')
        } else {
            alert('producto agregado correctamente')
            setCart([...cart, {item, cantidad}]);
        }
    };

    const removeCart = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        const items = cart.filter((product)=> product.item.id !== id)
        setCart(items)
    }

    const isInCart = (id) => {
        return cart&&cart.some((i) => i.item.id === id)
    }

    const priceTotal = () => {
        return cart.reduce((acum, i) => acum + i.item.cantidad * i.item.price, 0)
    }

    const iconCart = () => {
        return cart.reduce((acum, i) => acum + i.item.cantidad, 0 )
    }

    return (
        <div>
            <CartContext.Provider value={{ cart, addToCart, removeCart, removeItem, priceTotal, iconCart }}>{children}</CartContext.Provider>
        </div>
    );
};
