import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
const CartItem = (props) => {
  const { cartItems, addToCart, removeFromCart, changeInput } =
    useContext(ShopContext);
  const { id, price, productName, productImage } = props.data;

  return (
    <div className="cartItem">
      <img src={productImage} alt="item" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>₦{price}</b>
        </p>
        <div className="counterHanlde">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => changeInput(id, Number(e.target.value))}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
