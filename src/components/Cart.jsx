import React from "react";

import { Link } from "react-router-dom";

import './Cart.scss';

import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  return (
    <Link to='/cart' className="cart">
      <FiShoppingCart />
      <div className="badge"></div>
    </Link>
  );
};

export default Cart;
