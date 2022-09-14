import React from "react";
import { Skeleton } from "antd";

const ProductDetailLoading = () => {
  return (
    <div className="productDetailLoading">
      <div className="productDetail_container">
        <div className="productDetail_section1">
          <Skeleton.Image active className="productDetail_loader_img" />
        </div>
        <div className="productDetail_section2">
          <Skeleton active />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailLoading;
