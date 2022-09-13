import React from "react";
import { Input } from "antd";
import axios from "axios";

const SearchRow = () => {
  const onSearch = (value) => {
    console.log(value);
    // axios.get(`https://dummyjson.com/products/search?q=${value}`).then((response) => {

    // });
  };

  return (
    <div className="searchRow">
      <div className="searchRow_container">
        <Input.Search placeholder="검색어를 입력해 주세요" allowClear enterButton onSearch={onSearch} />
      </div>
    </div>
  );
};

export default SearchRow;
