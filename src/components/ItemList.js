import React, { useEffect, useState } from "react";
import Item from "./Item";
import { getFetch } from "../helpers/products";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getFetch()
                .then((resp) => {
                    setProducts(resp.filter((products) => products.category === id));
                    setLoading(true);
                })
                .catch((err) => console.log(err))
                .finally(setLoading(false));
        } else {
            getFetch()
                .then((resp) => {
                    setProducts(resp);
                    setLoading(true);
                })
                .catch((err) => console.log(err))
                .finally(setLoading(false));
        }
    }, [id]);

    return (
        <div>
            {!loading ? (
                <Container style={{ display: "flex", justifyContent: "center" }}>
                    <Spinner animation='border' role='status' />
                </Container>
            ) : (
                <Item products={products} />
            )}
        </div>
    );
};

export default ItemList;
