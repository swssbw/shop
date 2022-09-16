import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, InputNumber } from "antd";
import { StarTwoTone } from "@ant-design/icons";
import ProductDetailLoading from "./ProductDetailLoading";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";

const ProductDetail = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const [count, setCount] = useState(1);

  const getOriginalPriceKR = (price) => {
    return (Math.ceil((price * 1300) / 1000) * 1000).toLocaleString();
  };

  const getDiscountedPriceKR = (price, discountPercentage) => {
    return ((Math.ceil((price * 1300) / 1000) * 1000 * (100 - Math.floor(discountPercentage))) / 100).toLocaleString();
  };

  const onClickCart = () => {
    dispatch(addToCart({ product, count }));
    // alert("장바구니에 추가되었습니다.");
  };

  const onCounterClick = (value) => setCount(value);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.productId}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  if (!product) return <ProductDetailLoading />;
  return (
    <div className="productDetail">
      <div className="productDetail_container">
        <div className="productDetail_section1">
          <img src={product.images[0]} alt="product thumbnail" />
        </div>

        <div className="productDetail_section2">
          <p className="productDetail_brand">{product.brand}</p>
          <p className="productDetail_title">{product.title}</p>
          <p className="productDetail_desc">{product.description}</p>
          <p className="productDetail_originalPrice">
            <span className="productDetail_originalPrice_percentage">{product.discountPercentage}%</span>
            <span className="productDetail_originalPrice_price">{getOriginalPriceKR(product.price)}원</span>
          </p>
          <p className="productDetail_discountedPrice">
            {getDiscountedPriceKR(product.price, product.discountPercentage)} 원
          </p>
          <p className="productDetail_ratio">
            <StarTwoTone /> &nbsp;
            {product.rating}
          </p>
          <div className="productDetail_buttons">
            <InputNumber min={1} max={10} value={count} onChange={onCounterClick} />
            <Button type="primary" onClick={() => onClickCart(product)}>
              장바구니에 추가하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
