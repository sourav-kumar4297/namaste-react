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
    // console.log(filterData)
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

    console.log(json);

  };

  return (allRestaurants.length === 0) ? <Shrimmer/> : (
    <>
      <div className="main my-10">
        <div className="search px-4">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            className="w-50 p-2 me-4 border border-gray-300 rounded-md"
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
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
        <div className="product-list m-4 mt-6  grid grid-cols-1 gap-x-6  sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-8">
          {filteredRestraurants.map((item) => (
            <Link to = {`/restraunt/${item?.info?.id}`} key={item.info.id} className="restraunt-card group relative">
            <ProductCard product={item} key={item.info.id} />
            </Link>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default Main;
