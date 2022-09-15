import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import ProductCard from "../../Elements/ProductCard/ProductCard";
import { Spin } from "antd";

const LandingPage = () => {
  const { search } = useLocation();
  const { category } = queryString.parse(search);

  const [products, setProducts] = useState([]);
  const [target, setTarget] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [skip, setSkip] = useState(0);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("intersection,", skip);
          setSkip((prev) => prev + 20);
        }
      },
      { threshold: 0.5, rootMargin: "80px" }
    )
  );

  // 무한 스크롤
  useEffect(() => {
    const currentObserver = observer.current;
    if (target) {
      currentObserver.observe(target);
    }
    return () => {
      if (target) {
        currentObserver.unobserve(target);
      }
    };
  }, [target]);

  useEffect(() => {
    if (skip < 100) getProducts();
    console.log(skip);
  }, [skip]);

  const getProducts = async () => {
    setIsLoading(true);
    await axios.get(`https://dummyjson.com/products?limit=20&skip=${skip}`).then((response) => {
      setProducts((prev) => [...prev, ...response.data.products]);
    });
    setIsLoading(false);
  };

  // 카테고리별 상품 로딩
  useEffect(() => {
    if (category) {
      axios.get(`https://dummyjson.com/products/category/${category}`).then((response) => {
        setProducts(response.data.products);
      });
    } else getProducts();
  }, [category]);

  if (products.length === 0)
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
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
      <div className="landingPage_bottom">
        {isLoading && <Spin size="large" />}
        {!isLoading && <div ref={setTarget} />}
        {skip >= 100 && <span className="productsList_end">상품 목록 끝</span>}
      </div>
    </div>
  );
};

export default LandingPage;
