import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./shop.css";
const Shop = () => {
  return (
    <div className="shop">
      <div>
        <h1 className="shopTitle"> Shop Mall</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product className="product" data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
