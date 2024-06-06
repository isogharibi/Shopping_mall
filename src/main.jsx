import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import PageNotFound from "./pages/404.jsx";
import Api from "./api.jsx";

import ProductDetails from "./components/ProductDetails.jsx";

const routes = [
  {
    url: "/products/tshirt",
    id: 1,
    src: "/assets/images/t-shirt.jpg",
    alt: "t-shirt",
    price: 250,
    title: "Black T-Shirt",
    firstColor: "black",
    secondColor: "gray",
    thridColor: "blue",
  },

  {
    url: "/products/jeans",
    id: 2,
    src: "/assets/images/jeans.jpg",
    alt: "Blue Jeans",
    price: 115,
    title: "Black T-Shirt",
    firstColor: "blue",
    secondColor: "black",
    thridColor: "orange",
  },
  {
    url: "/products/shoes",
    id: 3,
    src: "/assets/images/shoes.jpg",
    alt: "shoes",
    price: 125,
    title: "Orange Shoes",
    firstColor: "orange",
    secondColor: "purple",
    thridColor: "pink",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<App />} />
        {routes.map((detail) => (
          <Route
            key={detail.id}
            path={detail.url}
            element={
              <ProductDetails
                src={detail.src}
                alt={detail.alt}
                price={detail.price}
                title={detail.title}
                firstColor={detail.firstColor}
                secondColor={detail.secondColor}
                thirdColor={detail.thridColor}
                url={detail.url}
              />
            }
          />
        ))}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/Api" element={<Api />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
