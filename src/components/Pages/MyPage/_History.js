import React from "react";

const History = (props) => {
  const { history } = props;

  return (
    <div className="history">
      <div className="history_container">
        <p>
          <span>주문번호</span>
          <span>{history.id}</span>
        </p>
        <div className="history_item_container">
          <div className="history_item_section1">
            {history.products.map((product) => (
              <div className="history_item">
                <span>{product.title}</span>
                <span>{product.price} 원</span>
                <span>{product.quantity} 개</span>
              </div>
            ))}
          </div>

          <div className="history_item_section2">
            <span>합계</span>
            <span>{history.discountedTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
