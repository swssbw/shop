import axios from "axios";
import React, { useEffect, useState } from "react";
import InnerLoader from "../../Elements/InnerLoader/InnerLoader";

const MyPage = () => {
  const [history, setHistory] = useState();

  const getOriginalPriceKR = (price) => {
    return (Math.ceil((price * 1300) / 1000) * 1000).toLocaleString();
  };

  useEffect(() => {
    axios.get("https://dummyjson.com/users/5/carts").then((response) => {
      setHistory(response.data.carts[0]);
    });
  }, []);

  if (!history) return <InnerLoader text="내 정보를 가져오는중..." />;
  return (
    <div className="myPage">
      <div className="myPage_container">
        <div className="myPage_row1">
          <p className="myPage_row1_title">내 정보</p>
          <p className="myPage_info">
            <span className="title">이름</span>
            <span className="content">홍길동</span>
          </p>
          <p className="myPage_info">
            <span className="title">연락처</span>
            <span className="content">010-1234-5678</span>
          </p>
          <p className="myPage_info">
            <span className="title">이메일</span>
            <span className="content">user1@abcd.net</span>
          </p>
          <p className="myPage_info">
            <span className="title">주소</span>
            <span className="content">제주 서귀포시 행복한 우리집</span>
          </p>
        </div>
        <div className="myPage_row2">
          <p className="myPage_row2_title">주문 내역</p>

          <div className="history">
            <div className="history_container">
              <p className="history_info">
                <span className="title">주문번호</span>
                <span className="title">{history.id}</span>
              </p>
              <div className="history_item_container">
                <div className="history_item_section1">
                  {history.products.map((product) => (
                    <div className="history_item">
                      <span className="title">{product.title}</span>
                      <span className="price">{getOriginalPriceKR(product.price)}원</span>
                      <span className="quantity">({product.quantity}개)</span>
                    </div>
                  ))}
                </div>

                <div className="history_item_section2">
                  <span className="total_title">합계</span>
                  <span className="total_price">{getOriginalPriceKR(history.discountedTotal)}원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
