import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import ProductCard from "../../Elements/ProductCard/ProductCard";
import InnerLoader from "../../Elements/InnerLoader/InnerLoader";
import axios from "axios";

const SearchPage = () => {
  const { search } = useLocation();
  const { sword } = queryString.parse(search);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setSearchResult([]);
    axios.get(`https://dummyjson.com/products/search?q=${sword}`).then((response) => {
      setSearchResult(response.data.products);
    });
  }, [sword]);

  if (searchResult.length === 0) return <InnerLoader text="검색결과를 가져오는중... " />;

  return (
    <div className="searchPage">
      <div className="searchPage_container">
        <div className="searchPage_row1">{sword}에 대한 검색결과</div>
        <div className="searchPage_row2">
          {searchResult.map((result) => (
            <ProductCard product={result} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
