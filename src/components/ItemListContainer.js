import React from "react";
import { Container } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <Container>
                <h4 className='mt-3'>{greeting}</h4>
            </Container>
        </div>
    );
};

export default ItemListContainer;
