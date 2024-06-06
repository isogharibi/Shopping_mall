import React, { useState } from "react";
import "./Products.scss";

import Card from "../components/Card";
import BreadCrumb from "../components/BreadCrumb";

import { IoMdHeart } from "react-icons/io";
import { GoPlus } from "react-icons/go";

const Product = () => {
  const [productList, setProductList] = useState([
    {
      id: 1,
      url: "/products/tshirt",
      src: "/assets/images/t-shirt.jpg",
      alt: "t-shirt",
      title: "Black T-Shirt",
      description: "Description",
      price: 250,
      add: <GoPlus />,
      favourite: true,
    },

    {
      id: 2,
      url: "/products/jeans",
      src: "/assets/images/jeans.jpg",
      alt: "jeans",
      title: "Blue jeans",
      description: "Description",
      price: 115,
      add: <GoPlus />,
      favourite: false,
    },

    {
      id: 3,
      url: "/products/shoes",
      src: "/assets/images/shoes.jpg",
      alt: "shoes",
      title: "Orange Shoes",
      description: "Description",
      price: 125,
      add: <GoPlus />,
      favourite: false,
    },
  ]);

  return (
    <div className="products-container">
      <BreadCrumb backPath={"/"} pathName={"Products"} />
      <div className="cards-section">
        {productList.map((product) => (
          <Card
            key={product.id}
            src={product.src}
            alt={product.alt}
            title={product.title}
            description={product.description}
            price={product.price}
            add={product.add}
            url={product.url}
            favourite={
              product.favourite && (
                <div className="favourite">
                  <IoMdHeart />
                </div>
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
