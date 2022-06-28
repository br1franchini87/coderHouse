import React from "react";
import { Container } from "react-bootstrap";

import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <Container>
                <h4 style={{textAlign:'center'}} className='mt-3'>{greeting}</h4>
                <ItemList />
            </Container>
        </div>
    );
};

export default ItemListContainer;
