import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../constants";

const RestrauntMenu = () => {
  const param = useParams();
  const [restrauntInfo, setRestrauntInfo] = useState({});

  useEffect(() => {
    getRestrauntInfo();
  }, []);

  const getRestrauntInfo = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${param.id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestrauntInfo(json.data);
    const info = json.data.cards[2]?.card?.card?.info;
    console.log(info);
  };

  return Object.keys(restrauntInfo).length === 0 ? (
    <div></div>
  ) : (
    <div className="restraunt-menu m-8">
      <h2 className="font-bold text-2xl">
        {restrauntInfo?.cards[0]?.card?.card?.text}
      </h2>
      <h5 className=" text-lg">
        {restrauntInfo?.cards[2]?.card?.card?.info?.areaName}
      </h5>
      <div className="restraunt-menu-top-card">
        <div className="restraunt-menu-image">
          <img
            src={
              IMG_CDN_LINK +
              restrauntInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId
            }
            className="h-80 w-full object-cover rounded-md"
          />
          <div className="restraunt-menu-top-card-info shadow-md mb-4 p-4 flex flex-col gap-1">
            <h3 className="font-bold text-lg">
              {restrauntInfo?.cards[2]?.card?.card?.info?.name}
            </h3>
            <p className="text-sm">
              {restrauntInfo?.cards[2]?.card?.card?.info?.city}📍
            </p>
            <p className="text-sm">
              {restrauntInfo?.cards[2]?.card?.card?.info?.avgRating}⭐ rating
            </p>
            <p className="text-sm font-bold">
              {restrauntInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
            </p>
            <div className="restraunt-menu-cuisines">
              <p className="text-sm">
                {restrauntInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="restraunt-menu-main-heading">
        <h3 className="font-bold text-2xl text-red-500 mt-4 text-center">
          Menu
        </h3>
        <div className="restraunt-menu-main">
          {restrauntInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
            (item, index) => {
              return (
                <div className="restraunt-menu-main-card" key={index}>
                  <h5 className="mb-4 font-bold">{item?.card?.card?.title}</h5>
                  {item?.card?.card?.itemCards?.map((item, index) => {
                    return (
                      <div
                        className="restraunt-menu-item mb-10 flex justify-between"
                        key={index}
                      >
                        <div className="restraunt-menu-item-info flex flex-row gap-10 ">
                          <img
                            className="w-36 h-28 rounded-md"
                            src={IMG_CDN_LINK + item?.card?.info?.imageId}
                            alt={item?.card?.info?.name}
                          />
                          
                          <div className="restraunt-menu-item-info-text">
                          <p className="block">
                            {item?.card?.info?.name}
                            <span className="block my-2">
                              {item?.card?.info?.isVeg === 1
                                ? "Veg - ✅"
                                : "Veg - ❌"}
                            </span>
                          </p>
                          <p className="text-l font-bold">
                            ₹{item?.card?.info?.price / 100}
                          </p>
                        </div>
                            
                        </div>
                        <button className="rounded-md bg-green-500 mx-10 h-min py-2 px-4 text-sm font-medium text-white hover:bg-green-700 ">
                          Add to cart
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default RestrauntMenu;
