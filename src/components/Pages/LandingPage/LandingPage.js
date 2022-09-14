import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import ProductCard from "../../Elements/ProductCard/ProductCard";
import { Spin } from "antd";

const LandingPage = () => {
  const { search } = useLocation();
  const { category } = queryString.parse(search);
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    // axios.get("https://dummyjson.com/products").then((response) => {
    axios.get("https://dummyjson.com/products?limit=20&skip=0").then((response) => {
      setProducts(response.data.products);
    });
  };

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
    </div>
  );
};

export default LandingPage;
