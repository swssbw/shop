import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../features/cart/cartSlice";
import CartItem from "./_CartItem.js";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItemList = useSelector((state) => state.cart.cartItemList);

  return (
    <div className="cartPage">
      <div className="cartPage_container">
        <div className="cartPage_section1">
          {cartItemList.map((cartItem) => (
            <CartItem item={cartItem} />
          ))}
        </div>
        <div className="cartPage_section2"></div>
      </div>
    </div>
  );
};

export default CartPage;
