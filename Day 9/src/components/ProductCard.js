import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_LINK } from "../constants";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card rounded-md max-h-120 overflow-auto bg-gray-100 lg:aspect-none p-4 mb-10">
      <img
        src={IMG_CDN_LINK + product.info.cloudinaryImageId}
        alt="Product"
        className="aspect-h-1 aspect-w-full m-auto  size-72 rounded-md"
      />
      <h2 className="text-lg font-medium mt-2">{product.info.name}</h2>
      <p className="text-sm">{product.info.cuisines.join(", ")}</p>
      <p className="font-bold">{product.info.costForTwo}</p>
      <p className="text-sm">
        {product.info.avgRatingString}
        <FontAwesomeIcon icon={faStar} />
      </p>
      <button className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white mt-2 hover:bg-gray-700 ">Order Now</button>
    </div>
  );
};

export default ProductCard;
