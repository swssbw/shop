import React from "react";
import { Input } from "antd";

const SearchRow = () => {
  const onSearch = () => {
    console.log("검색버튼 클릭");
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
