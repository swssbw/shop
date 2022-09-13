import React from "react";
import { StarTwoTone } from "@ant-design/icons";
import { Col, Row, Carousel } from "antd";

const ProductCard = (props) => {
  const { product } = props;

  const getOriginalPriceKR = (price) => {
    return (Math.ceil((price * 1300) / 1000) * 1000).toLocaleString();
  };

  const getDiscountedPriceKR = (price, discountPercentage) => {
    return ((Math.ceil((price * 1300) / 1000) * 1000 * (100 - Math.floor(discountPercentage))) / 100).toLocaleString();
  };

  return (
    <div className="productCard">
      <div className="productCard_container">
        {/* 상품 썸네일*/}
        <div className="product_image">
          <img alt="product image" src={product.thumbnail} width="280px" height="180px" />
          {/* <img alt="product image" src={product.thumbnail} /> */}
        </div>

        {/* 상품 설명 */}
        <div className="product_desc">
          <p className="product_desc_row1">
            <span className="product_title">{product.title}</span>
          </p>

          <p className="product_desc_row2">
            <span className="product_discountPercentage">{Math.floor(product.discountPercentage)}%</span>
            <span className="product_originalPrice">{getOriginalPriceKR(product.price)}</span>
          </p>

          <p className="product_desc_row3">
            <span className="product_discountedPrice">
              {getDiscountedPriceKR(product.price, product.discountPercentage)} 원
            </span>
          </p>

          <p className="product_desc_row4">
            <StarTwoTone />
            &nbsp; {product.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
