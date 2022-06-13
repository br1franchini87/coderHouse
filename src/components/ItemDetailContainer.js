import React from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const { id } = useParams();

    return (
    <div>
           {id}
      </div>
  )
}


export default ItemDetailContainer;
