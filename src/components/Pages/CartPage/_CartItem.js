import React, { useEffect } from "react";

const CartItem = (props) => {
  const getOriginalPriceKR = (price) => {
    return (Math.ceil((price * 1300) / 1000) * 1000).toLocaleString();
  };

  const { item } = props;

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <div className="cartItem">
      <div className="cartItem_container">
        <div className="cartItem_thumbnail">
          <img src={item.product.thumbnail} alt="product thumbnail" width="80px" height="80px" />
        </div>
        <div className="cartItem_title">{item.product.title}</div>
        <div className="cartItem_count">수량 : {item.count} 개</div>
        <div className="cartItem_price">{getOriginalPriceKR(item.product.price)} 원</div>
      </div>
    </div>
  );
};

export default CartItem;
