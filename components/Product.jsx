import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const Product = ({ product }) => {
  const {setQTY} =useStateContext();
  return <div>
 
   <Link href={`/product/${product.slug.current}`}>
    
      <div className="product-card">
        <img src={urlFor(product.image && product.image[0])}
        width={250}
        height={250}
        className="product-image"/>
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}€</p>
      </div>

    </Link>

  </div>;
};

export default Product;
