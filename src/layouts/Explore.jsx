import React, { useState, useRef, useEffect } from "react";

import { IoMdHeart } from "react-icons/io";
import { GoPlus } from "react-icons/go";

import "./Explore.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import Card from "../components/Card";

const Explore = () => {
  const [Productdata, SetproductDAta] = useState([]);
  const [SingelProduct, SetSingelProduct] = useState([]);
  const [weatherIR, setweather] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5&sort=asc")
      .then((res) => res.json())
      .then((otput) => SetproductDAta(otput));
  }, [Productdata]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/2")
      .then((res) => res.json())
      .then((otput) => SetSingelProduct(otput));
  }, [Productdata]);

  function ShowWeathe() {
    useEffect(() => {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?appid=d7bbe6d6df861ce08c8853f34f7829b2&q=tehran"
      )
        .then((res) => res.json())
        .then((weather) => setweather(weather));
    }, [weatherIR]);
  }

  return (
    <div className="explore-container">
      <h2> Explore </h2>
      <div className="slider-section">
        <Swiper
          className="cards-slider"
          loop={true}
          spaceBetween={0}
          slidesPerView={2}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Productdata.map((product) => (
            <div key={product.id}>
              <div key={product.id}>
                <Card
                  url={product.url}
                  src={product.image}
                  alt={product.alt}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  add={product.add}
                  favourite={
                    product.favourite && (
                      <div className="favourite">
                        <IoMdHeart />
                      </div>
                    )
                  }
                />
              </div>
            </div>
          ))}
          <div>
            <Card
              url={SingelProduct.url}
              src={SingelProduct.image}
              alt={SingelProduct.alt}
              title={SingelProduct.title}
              description={SingelProduct.description}
              price={SingelProduct.price}
              add={SingelProduct.add}
              favourite={
                SingelProduct.favourite && (
                  <div className="favourite">
                    <IoMdHeart />
                  </div>
                )
              }
            />
          </div>
        </Swiper>
      </div>
      <button onClick={ShowWeathe}>weather states</button>
    </div>
  );
};

export default Explore;

{
  /* <SwiperSlide className="cards-slide">
<Card
  src={"/assets/images/t-shirt.jpg"}
  alt={"t-shirt"}
  title={"Black T-Shirt"}
  description={"Description"}
  price={250.0}
  add={<GoPlus />}
/>
</SwiperSlide>
<SwiperSlide className="cards-slide">
<Card />
</SwiperSlide>
<SwiperSlide className="cards-slide">
<Card />
</SwiperSlide> */
}
