import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import product1 from "../../assets/products/product1.png"
import product2 from "../../assets/products/product2.png"
import productBgImg from "../../assets/hero/herobg2.png"

const ourProducts = [
  {
    name: "Mycodiff",
    description: "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product1
  },
  {
    name: "MaraShield",
    description: "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product2
  },
  {
    name: "Optimus Prime",
    description: "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image:product1
  },
  {
    name: "V-GAR",
    description: "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product2
  },
  {
    name: "Siriza",
    description: "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product1
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(ourProducts[0]); 

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="products-section p-4  w-11/12 mx-auto rounded-xl"
    style={{
        backgroundImage: `url(${productBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    >
      <Swiper spaceBetween={10} slidesPerView={2.5}>
        {ourProducts.map((product, index) => (
          <SwiperSlide
            key={index}
            className="product-slide glass"
            onClick={() => handleProductClick(product)} 
          >
            {product.name}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="product-details text-white mt-4">
        <h1 className="product-name text-2xl font-bold">{selectedProduct.name}</h1>
        <p className="product-description mt-2">{selectedProduct.description}</p>
        <img
          className="product-pic mt-4 rounded"
          src={selectedProduct.image}
          alt={selectedProduct.name}
        />
      </div>
      <div className="buttons flex justify-between mt-2">
        <button className='bg-white py-1 px-3 rounded-xl hover:bg-green-400'>Learn More</button>
        <button className='bg-white py-1 px-3 rounded-xl hover:bg-green-400'>Order Product</button>
      </div>
    </div>
  );
};

export default Products;
