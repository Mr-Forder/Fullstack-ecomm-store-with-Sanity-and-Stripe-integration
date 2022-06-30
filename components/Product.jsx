import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import styled from "styled-components";
//passed in our product object and destructured the elements we want from it for brevity
const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img src={urlFor(image && image[0])} className="product-image"></img>
          <h2 className="product-name">{name}</h2>
          <div className="product-price">£{price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
