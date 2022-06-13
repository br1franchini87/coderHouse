import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFetchOne } from "./../helpers/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        getFetchOne(id)
            .then((resp) => setProduct(resp))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;
