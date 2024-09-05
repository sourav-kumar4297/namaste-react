import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { productList } from "../constants";

const Main = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState(productList);
  console.log(searchTerm);

  const handleSearch = () => {
    const results = productList.filter((item) =>
      item.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <div className="main">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="banner">{/* Image is in the background */}</div>
        <div className="product-list">
          {searchResults.map((item) => (
            <ProductCard product={item} key={item.info.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
