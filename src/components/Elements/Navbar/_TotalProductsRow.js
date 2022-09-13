import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const TotalProducts = () => {
  return (
    <div className="totalProductRow">
      <div className="totalProductRow_container">
        <Button type="text" size="small">
          <Link to="/">전체상품보기</Link>
        </Button>
      </div>
    </div>
  );
};

export default TotalProducts;
