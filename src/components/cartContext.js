import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  /* estados y funciones globales aca */

  const [cart, setCart] = useState([]);
  const [addProduct, setAddProduct] = useState("");
  const [clearCart, setCleanCart] = useState(false);
  const [deleteOneItem, setDeleteOneItem] = useState(false);

  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      setAddProduct("error");
      setTimeout(() => {
        setAddProduct("");
      }, 7000);
    } else {
      setAddProduct("ok");
      setTimeout(() => {
        setAddProduct("");
      }, 4500);
      setCart([...cart, { item, cantidad }]);
    }
  };

  const removeCart = () => {
    setCleanCart(true);
    setTimeout(() => {
      setCleanCart(false);
    }, 5500);
    setCart([]);
  };

  const removeItem = (id) => {
    setDeleteOneItem(true);
    setTimeout(() => {
      setDeleteOneItem(false);
    }, 5500);
    const items = cart.filter((product) => product.item.id !== id);
    setCart(items);
  };

  const isInCart = (id) => {
    return cart && cart.some((i) => i.item.id === id);
  };

  const priceTotal = () => {
    return cart.reduce((acum, i) => acum + i.item.cantidad * i.item.price, 0);
  };

  const iconCart = () => {
    return cart.reduce((acum, i) => acum + i.item.cantidad, 0);
  };

  const addSuccess = () => {
    return (
      <div className="alert alert-dismissible alert-success" style={{ position: "absolute", top: "15%", right: "3%", zIndex: "999" }}>
        <button
          onClick={() => {
            setAddProduct("");
          }}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>Buenisimo!</strong> producto agregado correctamente.
      </div>
    );
  };

  const addError = () => {
    return (
      <div className="alert alert-dismissible alert-warning" style={{ position: "absolute", top: "15%", right: "3%", zIndex: "999" }}>
        <button
          onClick={() => {
            setAddProduct("");
          }}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>Ooops!</strong> El producto seleccionado ya se encuentra en tu carrito y no sera agregado nuevamente.
      </div>
    );
  };

  const cartCleaned = () => {
    return (
      <div className="alert alert-dismissible alert-danger" style={{ position: "absolute", top: "15%", right: "3%", zIndex: "999" }}>
        <button
          onClick={() => {
            setCleanCart(false);
          }}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>Todo borrado!</strong> el carrito quedo vacio
      </div>
    );
  };

  const deletedItem = () => {
    return (
      <div className="alert alert-dismissible alert-light" style={{ position: "absolute", top: "15%", right: "3%", zIndex: "999" }}>
        <button
          onClick={() => {
            setDeleteOneItem(false);
          }}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>Producto eliminado!</strong>
      </div>
    );
  };

  return (
    <div>
      {deleteOneItem ? deletedItem() : ""}
      {clearCart ? cartCleaned() : ""}
      {addProduct === "ok" ? addSuccess() : addProduct === "error" ? addError() : ""}
      <CartContext.Provider value={{ cart, addToCart, removeCart, removeItem, priceTotal, iconCart }}>{children}</CartContext.Provider>
    </div>
  );
};
