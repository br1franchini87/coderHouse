import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Container } from "react-bootstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import ModalComponent from "./Modal";

const Cart = () => {
  const { cart, removeCart, priceTotal } = useContext(CartContext);

  const [show, setShow] = useState(false);
  const [orderResponse, setOrderResponse] = useState(false);

  const placeOrder = (e) => {
    /* e.preventDefault(); */
    let order = {};

    order.buyer = { formValues };
    order.total = priceTotal();

    order.items = cart.map((cartItem) => {
      const id = cartItem.item.id;
      const name = cartItem.item.title;
      const price = cartItem.item.price * cartItem.item.cantidad;

      return { id, name, price };
    });
    console.log(order, "order");

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((resp) => {
      console.log(resp, "order id?");
      setOrderResponse(resp);
    });
  };

  const intialValues = { name: "", lastname: "", email: "" };
  const [formValues, setFormValues] = useState(intialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (err) => {
    err.preventDefault();
    console.log(formValues, "form values");
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const mostrar = () => (handleShow(), placeOrder());

  return (
    <div>
      <Container>
        <h4 style={{ textAlign: "center", margin: "30px 0" }}>Tu carrito de compras</h4>
        {cart < 1 ? (
          <>
            <p>
              Nada que mostrar por aqui :( <br></br> Agrega prductos para llenar tu carrito
            </p>
            <Link to="/">
              <button type="button" className="btn-sm btn btn-outline-light">
                Buscar productos
              </button>
            </Link>
          </>
        ) : (
          <>
            {cart.map((cartItem) => (
              <CartItem key={cartItem.item.id} product={cartItem.item} />
            ))}
            <h5>Precio total: $ {priceTotal()}</h5>
            <button className="btn btn-outline-danger btn-sm" onClick={removeCart}>
              Vaciar carrito
            </button>
            <form style={{ margin: "2rem 0", width: "45%" }} onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label mt-3">Para continuar con el proceso de compra es necesario ingresar los siguientes datos:</label>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingName" placeholder="Nombre" name="name" value={formValues.name} onChange={handleChange} />
                  <label for="floatingName">Nombre</label>
                </div>
                <div className="form-floating">
                  <input type="text" className="form-control" id="floatingLastname" placeholder="Nombre" name="lastname" value={formValues.lastname} onChange={handleChange} />
                  <label for="floatingLastname">Apellido</label>
                </div>
                <div className="form-floating mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    aria-describedby="emailHelp"
                  />
                  <label for="floatingInput">Email</label>
                  <small id="emailHelp" className="form-text text-muted">
                    No te preocupes no te vamos a mandar spam ;).
                  </small>
                </div>
              </div>
              <button
                style={{ marginTop: "1rem" }}
                onClick={mostrar}
                className="btn btn-outline-success btn-sm"
                type="submit"
                disabled={formValues.name == "" || formValues.lastname == "" || formValues.email == ""}
              >
                Comprar
              </button>
            </form>
          </>
        )}
        {show ? <ModalComponent formValues={formValues} show={show} handleClose={handleClose} removeCart={removeCart} orderResponse={orderResponse} /> : ""}
      </Container>
    </div>
  );
};

export default Cart;
