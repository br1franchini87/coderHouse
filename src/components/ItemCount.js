import React from "react";

const ItemCount = ({ stock, onAdd, onDecrese }) => {
    return (
        <div>
            <button onClick={onAdd()}>+</button>
            <button onClick={onDecrese()}>-</button>
            <button disabled={stock === "0"}>agregar producto</button>
        </div>
    );
};

export default ItemCount;
