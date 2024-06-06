import React, { useState , useRef } from "react";

import { IoMdHeart } from "react-icons/io";
import { GoPlus } from "react-icons/go";

import "./Explore.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

import Card from "../components/Card";

const Explore = () => {
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
              <SwiperSlide className="card-slide" key={product.id}>
                <Card
                  url={product.url}
                  src={product.src}
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
              </SwiperSlide>
            </div>
          ))};
          <div>
            <Card
              url={SingelProduct.url}
              src={SingelProduct.src}
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
          ))
        </Swiper>
      </div>
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
