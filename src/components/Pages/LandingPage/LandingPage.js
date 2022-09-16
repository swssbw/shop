import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";

import { getProducts, getProductsByCategory, getProductsByScroll } from "../../../features/products/productsSlice";
import ProductCard from "../../Elements/ProductCard/ProductCard";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { category } = queryString.parse(search);
  const [target, setTarget] = useState(null);
  const [skip, setSkip] = useState(0);

  const productsList = useSelector((state) => state.products.productsList);
  const isLoading = useSelector((state) => state.products.isLoading);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSkip((prev) => prev + 20);
        }
      },
      { threshold: 0.5, rootMargin: "80px" }
    )
  );

  useEffect(() => {
    const currentObserver = observer.current;
    if (target) {
      currentObserver.observe(target);

      if (category) {
        currentObserver.unobserve(target);
      }
    }

    return () => {
      if (target) {
        currentObserver.unobserve(target);
      }
    };
  }, [target, category]);

  // 스크롤 바닥 감지시 상품 로딩
  useEffect(() => {
    if (skip < 100) dispatch(getProductsByScroll(skip));
  }, [skip, dispatch]);

  // 카테고리별 상품 로딩
  useEffect(() => {
    if (category) dispatch(getProductsByCategory(category));
    else dispatch(getProducts());
  }, [category, dispatch]);

  if (productsList.length === 0)
    return (
      <div className="landingPageLoader">
        <div className="landingPageLoader_container">
          <span>상품목록 불러오는중... </span>
          <Spin />
        </div>
      </div>
    );

  return (
    <div className="landingPage">
      <div className="landingPage_container">
        {productsList.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
      <div className="landingPage_bottom">
        {isLoading && <Spin size="large" />}
        {skip < 100 && <div ref={setTarget} />}
      </div>
    </div>
  );
};

export default LandingPage;
