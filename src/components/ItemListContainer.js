import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import ItemCount from "./ItemCount";
import getFetch from "../helpers/products";
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

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getFetch()
            .then((resp) => {
                setProducts(resp);
                setLoading(true);
            })
            .catch((err) => console.log(err))
            .finally(setLoading(false));
    }, []);

    return (
        <div>
            <Container>
                <h4 className='mt-3'>{greeting}</h4>
                <ItemCount initial={initial} stock='7' onAdd={() => onAdd} onDecrese={() => onDecrese} />
                {count}
            </Container>
            {!loading ? (
                <Container style={{ display: "flex", justifyContent: "center" }}>
                    <Spinner animation='border' role='status' />
                </Container>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
