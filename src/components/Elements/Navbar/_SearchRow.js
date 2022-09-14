import React from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

const SearchRow = () => {
  let navigate = useNavigate();

  const onSearch = (value) => {
    if (!value) alert("검색어를 입력해주세요");
    else navigate(`search?sword=${value}`);
  };

  return (
    <div className="searchRow">
      <div className="searchRow_container">
        <Input.Search placeholder="검색어를 입력해 주세요" enterButton onSearch={onSearch} />
      </div>
    </div>
  );
};

export default SearchRow;
