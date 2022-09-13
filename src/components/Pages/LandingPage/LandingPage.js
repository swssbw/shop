import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Carousel } from "antd";

import ProductCard from "../../Elements/ProductCard/ProductCard";

const LandingPage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      console.log(response.data);
      setProducts(response.data.products);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderProducts = products.map((product) => {
    return (
      <Col lg={6} md={12} xs={24} key={product.id}>
        <ProductCard product={product} />
      </Col>
    );
  });

  return (
    <div className="landingPage">
      <div className="landingPage_container">
        {/* <Row gutter={[16, 16]}>{renderProducts}</Row> */}
        {/* <Row>{renderProducts}</Row> */}
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default LandingPage;
