import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ourProducts = [
  {
    name: "Mycodiff",
    description: "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings."
  },
  {
    name: "MaraShield",
    description: "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings."
  },
  {
    name: "Optimus Prime",
    description: "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings."
  },
  {
    name: "V-GAR",
    description: "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings."
  },
  {
    name: "Siriza",
    description: "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings."
  }
];

const Products = () => {
  return (
    <>
    <div className="products-section bg-green-900 py-4">
    <Swiper  
        spaceBetween={10}
        slidesPerView={2.5}
      >
        {ourProducts.map((product, index) => (
          <SwiperSlide key={index} className="product-slide glass">
            {product.name}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      

    </>
  );
};

export default Products;
