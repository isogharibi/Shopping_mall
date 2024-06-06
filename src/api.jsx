import React, { useState, useRef } from "react";
import Product from "./pages/Products";

const Api = () => {
  const [Productdata, SetproductDAta] = useState([]);
  const [SingelProduct, SetSingelProduct] = useState([]);

  useState(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((otput) => SetproductDAta(otput));
  }, [Productdata]);

  useState(() => {
    fetch("https://fakestoreapi.com/products/2")
      .then((res) => res.json())
      .then((otput) => SetSingelProduct(otput));
  }, [Productdata]);

  return (
    <>
      {Productdata.map((product) => (
        <div key={product.id}>

          <h1>{product.title}</h1>
          <span>{product.price}</span>
          <img src={product.image} alt="" />
          <p>{product.description}</p>
        </div>
      ))}

    <div>
        <h1>{SingelProduct.title}</h1>
        <h1>{SingelProduct.price}</h1>
        <img src={SingelProduct.image} alt="" />
        <p>{SingelProduct.description}</p>
    </div>
    </>
  );
};

export default Api;
