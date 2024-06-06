import React from "react";

import { FaArrowLeftLong } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

import { Link } from "react-router-dom";

import "./BreadCrumb.scss";

const BreadCrumb = ({backPath , pathName}) => {
  return (
    <div className="bread-crumb-container">
      <Link to={backPath}>
        <FaArrowLeftLong className="arrow-back" />
      </Link>
        <span className="current-path"> {pathName} </span>
        <div className="cart-container">
          <FiShoppingCart className="nav-cart" />
          <div className="badge"></div>
        </div>
    </div>
  );
};

export default BreadCrumb;
