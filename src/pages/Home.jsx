import React from "react";

import "./Home.scss";
import Navbar from "../layouts/Navbar";
import Search from "../components/Search";
import Cart from "../components/Cart";
import Explore from "../layouts/Explore";
import BestSelling from "../components/BestSelling";

const App = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="search-and-cart">
        <Search />
        <Cart />
      </div>

      <Explore />
      <BestSelling />
    </div>
  );
};

export default App;
