import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ItemCount from "./ItemCount";

import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    const initial = 1;
    const [count, setCount] = useState(initial);
    const onAdd = () => {
        setCount(count + 1);
    };

    const onDecrese = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <Container>
                <h4 className='mt-3'>{greeting}</h4>
                <ItemCount initial={initial} stock='7' onAdd={() => onAdd} onDecrese={() => onDecrese} />
                {count}
                <ItemList />
            </Container>
            )
        </div>
    );
};

export default ItemListContainer;
