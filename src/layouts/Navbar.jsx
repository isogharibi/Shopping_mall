import React from "react";

import { Link } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="menu-container">
        <button className="toggle-menu">
          <RiMenu4Fill />
        </button>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/products"> Products </Link>
          </li>
          <li>
            <Link to="/favourite"> Favourite </Link>
          </li>
        </ul>
      </div>
      <button className="panel">
        <Link to="/panel">
          <FaUser />
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
