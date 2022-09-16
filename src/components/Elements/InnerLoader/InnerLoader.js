import React from "react";
import { Spin } from "antd";

const InnerLoader = (props) => {
  const { text = "로딩중..." } = props;

  return (
    <div className="innerLoader">
      <div className="innerLoader_container">
        <span>{text}</span>
        <Spin />
      </div>
    </div>
  );
};

export default InnerLoader;
