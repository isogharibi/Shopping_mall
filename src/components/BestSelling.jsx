import React from "react";

import { FaArrowRight } from "react-icons/fa6";

import './BestSelling.scss';

const BestSelling = () => {
  return (
    <div className="best-selling-container">
      <h2>Best Selling</h2>

      <div className="best-product">
        <img src="/assets/images/shoes.jpg" alt="shoes" />
        <div className="column-details">
          <h3 className="title"> Shoes </h3>
          <span className="description"> Lorem Ipsum </span>
          <span className="price"> $125.00 </span>
        </div>
        <button className="forward">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BestSelling;
