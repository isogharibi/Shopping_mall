import React, { useState } from "react";

import { IoMdHeart } from "react-icons/io";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";

import "./ProductDetails.scss";
import BreadCrumb from "./BreadCrumb";

const ProductDetails = ({
  src,
  alt,
  price,
  title,
  firstColor,
  secondColor,
  thirdColor,
}) => {
  const [rating, setRating] = useState([0, 0, 0, 0, 0]);

  const handleRank = (index) => {
    setRating((prevRating) => {
      const newRating = [...prevRating];
      newRating[index] = (newRating[index] + 1) % 3;
      for (let i = 0; i < index; i++) {
        newRating[i] = 2;
      }
      if (newRating[index] === 0 && index < 4) {
        for (let i = index + 1; i < 5; i++) {
          newRating[i] = 0;
        }
      }
      return newRating;
    });
  };

  const renderStar = (state, index) => {
    switch (state) {
      case 2:
        return <TiStarFullOutline onClick={() => handleRank(index)} />;
      case 1:
        return <TiStarHalfOutline onClick={() => handleRank(index)} />;
      default:
        return <TiStarOutline onClick={() => handleRank(index)} />;
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleColor = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="product-details-container">
      <BreadCrumb backPath={'/products'} pathName={'Product'} />
      <div className="image-section">
        <div className="favourite">
          <IoMdHeart />
        </div>
        <img src={src} alt={alt} />
      </div>
      <div className="product-details">
        <div className="row">
          <div className="column">
            <div className="price">${price}.00</div>
            <div className="title">{title}</div>
          </div>
          <div className="ranking">
            {rating.map((star, index) => (
              <span key={index}>{renderStar(star, index)}</span>
            ))}
          </div>
        </div>

        <div className="color-options">
          <h4> Color option </h4>
          <div className="row">
            <div
              className={`opt1 ${firstColor} ${
                activeIndex === 0 && "active-color"
              }`}
              onClick={() => handleColor(0)}
            ></div>
            <div
              className={`opt2 ${secondColor} ${
                activeIndex === 1 && "active-color"
              }`}
              onClick={() => handleColor(1)}
            ></div>
            <div
              className={`opt3 ${thirdColor} ${
                activeIndex === 2 && "active-color"
              }`}
              onClick={() => handleColor(2)}
            ></div>
          </div>
        </div>

        <div className="description">
          <h4> Description </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non animi
            totam dolorum similique est consectetur.
          </p>
        </div>

        <div className="add-to-cart">
          + <span>Add to Cart</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
