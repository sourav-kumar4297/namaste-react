import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  function filterData(searchTerm, searchResults) {
    const filterData = searchResults.filter((item) =>
      item.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filterData;
  }

  useEffect(() => {
    // call back function
    getRestaurants();
  }, []); //dependency array

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // optional chaining
    setSearchResults(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
          <button
            type="submit"
            onClick={() => {
              const data = filterData(searchTerm, productList);
              setSearchResults(data);
            }}
          >
            Search
          </button>
        </div>
        {/* <div className="banner">Image is in the background</div></div> */}
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
