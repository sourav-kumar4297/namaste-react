import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_LINK } from "../constants";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={IMG_CDN_LINK + product.info.cloudinaryImageId} alt="Product" />
      <h2>{product.info.name}</h2>
      <p>{product.info.cuisines.join(", ")}</p>
      <p>{product.info.costForTwo}</p>
      <p>
        {product.info.avgRatingString}
        <FontAwesomeIcon icon={faStar} />
      </p>
      <button>Order Now</button>
    </div>
  );
};

export default ProductCard;
