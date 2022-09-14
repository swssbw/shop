import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../../Elements/ProductCard/ProductCard";
import axios from "axios";

const SearchPage = () => {
  const { search } = useLocation();
  const { sword } = queryString.parse(search);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/search?q=${sword}`).then((response) => {
      setSearchResult(response.data.products);
    });
  }, [sword]);

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
