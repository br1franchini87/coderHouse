import React from "react";
import { Container } from "react-bootstrap";
import ItemCount from "./ItemCount";

import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    const initial = 1;

    const onAdd = (count) => {
        console.log(count);
    };

    return (
        <div>
            <Container>
                <h4 className='mt-3'>{greeting}</h4>
                <ItemCount initial={initial} stock='7' onAdd={onAdd} />
                <ItemList />
            </Container>
            )
        </div>
    );
};

export default ItemListContainer;
