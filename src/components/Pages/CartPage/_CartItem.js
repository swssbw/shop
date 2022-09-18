import React, { useEffect } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../features/cart/cartSlice";

const CartItem = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  const getOriginalPriceKR = (price) => {
    return (Math.ceil((price * 1300) / 1000) * 1000).toLocaleString();
  };

  useEffect(() => {
    console.log(item);
  }, [item]);

  const onRemoveClick = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cartItem">
      <div className="cartItem_container">
        <div className="cartItem_thumbnail">
          <img src={item.product.thumbnail} alt="product thumbnail" width="80px" height="80px" />
        </div>
        <div className="cartItem_title">{item.product.title}</div>
        <div className="cartItem_count">수량 : {item.count} 개</div>
        <div className="cartItem_price">{getOriginalPriceKR(item.product.price)} 원</div>
        <Button onClick={() => onRemoveClick(item.product.id)}>삭제</Button>
      </div>
    </div>
  );
};

export default CartItem;
