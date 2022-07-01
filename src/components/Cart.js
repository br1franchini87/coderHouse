import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Container } from "react-bootstrap";
import CartItem from './CartItem'

const Cart = () => {
  const { cart, removeCart, priceTotal } = useContext(CartContext);
  return (
    <div>
      <Container>
        <h4 style={{textAlign:'center', margin:'30px 0'}}>Tu carrito de compras</h4>
        {cart < 1 ? (
          <p>Nada que mostrar por aqui :( <br></br> Agrega prductos para llenar tu carrito</p>
        ) : (
          cart.map((cartItem) => (
            <CartItem key={cartItem.item.id} product={cartItem.item}/>
          ))
        )}
        <h5 style={cart < 1 ? {display:'none'}: {display:'block'}}>precio total: $ {priceTotal()}</h5>
        <button className="btn btn-outline-danger btn-sm" onClick={removeCart} style={cart < 1 ?{display:'none'}: {display:'block'}}>
          Vaciar carrito
        </button>
      </Container>
    </div>
  );
};

export default Cart;
