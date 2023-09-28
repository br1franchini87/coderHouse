import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const queryProduct = doc(db, "items", id);
        getDoc(queryProduct)
            .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;
