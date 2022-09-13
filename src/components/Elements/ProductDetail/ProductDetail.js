import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Row, Carousel } from "antd";
import { StarTwoTone } from "@ant-design/icons";

const ProductDetail = () => {
  let params = useParams();
  const [product, setProduct] = useState();
  const getOriginalPriceKR = (price) => {
    return (Math.ceil((price * 1300) / 1000) * 1000).toLocaleString();
  };

  const getDiscountedPriceKR = (price, discountPercentage) => {
    return ((Math.ceil((price * 1300) / 1000) * 1000 * (100 - Math.floor(discountPercentage))) / 100).toLocaleString();
  };

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.productId}`).then((response) => {
      setProduct(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="productDetail">
      {product ? (
        <div className="productDetail_container">
          <Carousel autoplay>
            {product.images.map((image) => (
              <div>
                <img src={image} alt="product thumbnail" />
              </div>
            ))}
          </Carousel>

          <div>제조사 : {product.brand}</div>
          <div>상품명 : {product.title}</div>
          <div>설명 : {product.description}</div>
          <div>할인 전 가격 : {getOriginalPriceKR(product.price)}</div>
          <div>할인율 : {product.discountPercentage}%</div>
          <div>할인 후 가격 : {getDiscountedPriceKR(product.price, product.discountPercentage)}</div>
          <div>
            평점 : <StarTwoTone />
            {product.rating}
          </div>
          <div>재고 : {product.stock} 개</div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default ProductDetail;
