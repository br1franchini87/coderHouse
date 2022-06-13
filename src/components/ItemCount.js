import React, { useState } from "react";

const ItemCount = ({ stock, onAdd, initial }) => {
    const [count, setCount] = useState(initial);

    const decrese = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const sum = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <div>
            {count}
            <button onClick={sum}>+</button>
            <button onClick={decrese}>-</button>
            <button disabled={stock === "0"} onClick={() => onAdd(count)}>
                agregar producto
            </button>
        </div>
    );
};

export default ItemCount;
