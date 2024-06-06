import React from "react";

import { Link } from "react-router-dom";

import "./Card.scss";

const Card = ({ src, alt, title, description, price, add, favourite, url }) => {
  return (
    <div className="product-container">
      <Link to={url}>
        {favourite}
        <img src={src} alt={alt} />
        <h3 className="title"> {title} </h3>
        <span className="description"> {description} </span>
      </Link>
      <div className="row">
        <span className="price"> ${price}.00 </span>
        <button className="add"> {add} </button>
      </div>
    </div>
  );
};

export default Card;
