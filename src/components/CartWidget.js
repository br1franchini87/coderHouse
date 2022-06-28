import React, {useContext} from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {

    const { iconCart } = useContext(CartContext);

    return (
        <div>
           {/*  <p style={{borderRadius:'50%', backgroundColor:'yellow'}}>{iconCart()}</p> */}
            <i className='fas fa-shopping-cart' />
        </div>
    );
};

export default CartWidget;
