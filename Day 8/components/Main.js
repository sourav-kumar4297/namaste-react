import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shrimmer from "./Shrimmer";
import {Link} from "react-router-dom";
const Main = () => {
  const [searchText, setsearchText] = useState("");
  const [filteredRestraurants, setFilteredRestraurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  function filterData(searchText, allRestaurants) {
    const filterData = allRestaurants.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filterData)
    return filterData;
  }

  useEffect(() => {
    // call back function
    getRestaurants();
  }, []); //dependency array

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // optional chaining
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

  };

  return (allRestaurants.length === 0) ? <Shrimmer/> : (
    <>
      <div className="main">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => {
              const data = filterData(searchText,allRestaurants);
              setFilteredRestraurants(data);
            }}
          >
            Search
          </button>
        </div>
        {/* <div className="banner">Image is in the background</div></div> */}
        <div className="product-list">
          {filteredRestraurants.map((item) => (
            <Link to = {`/restraunt/${item?.info?.id}`} key={item.info.id}>
            <ProductCard product={item} key={item.info.id} />
            </Link>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default Main;
