import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../features/cart/cartSlice";
import CartItem from "./_CartItem.js";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItemList = useSelector((state) => state.cart.cartItemList);
  const [totalInfo, setTotalInfo] = useState({
    amount: 0,
    cost: 0,
  });

  useEffect(() => {
    let totalamount = 0,
      totalcost = 0;

    cartItemList.forEach((item) => {
      totalamount += item.count;
      totalcost += item.count * (Math.ceil((item.product.price * 1300) / 1000) * 1000);
    });

    setTotalInfo({
      amount: totalamount,
      cost: totalcost.toLocaleString(),
    });
  }, [cartItemList]);

  return (
    <div className="cartPage">
      <div className="cartPage_container">
        <div className="cartPage_section1">
          {cartItemList.map((cartItem) => (
            <CartItem item={cartItem} />
          ))}
        </div>
        <div className="cartPage_section2">
          <div className="total_amount">
            <span className="total_amount_title">총 구매 수량</span>
            <span className="total_amount_item">{totalInfo.amount} 개</span>
          </div>
          <div className="total_cost">
            <span className="total_cost_title">주문 금액</span>
            <span className="total_cost_item">{totalInfo.cost} 원</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
