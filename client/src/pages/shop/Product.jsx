import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
const Product = (props) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const { id, price, productName, productImage } = props.data;
  const cartAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₦{price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart {cartAmount > 0 && <>({cartAmount})</>}
      </button>
    </div>
  );
};

export default Product;
