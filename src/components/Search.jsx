import React from "react";
import { CiSearch } from "react-icons/ci";

import "./Search.scss";

const Search = () => {
  return (
    <div className="search-container">
      <CiSearch />
      <input type="search" id="search" placeholder="Search"/>
    </div>
  );
};

export default Search;
