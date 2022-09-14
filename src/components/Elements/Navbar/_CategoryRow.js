import React, { useEffect, useState } from "react";
import { Button } from "antd";
import queryString from "query-string";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const TotalProducts = () => {
  const { search } = useLocation();
  const { category } = queryString.parse(search);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    console.log("선택된 카테고리", category);
    setSelectedCategory(category);
  }, [category]);

  return (
    <div className="totalProductRow">
      <div className="totalProductRow_container">
        <Button type="text" size="small">
          <Link to="/products">전체상품보기</Link>
        </Button>

        {categories.slice(0, 8).map((category) => (
          <Button type="text" size="small" className={selectedCategory === category ? "active" : ""}>
            <Link to={`/products?category=${category}`}>{category}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TotalProducts;
