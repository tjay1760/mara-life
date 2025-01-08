import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
const ourProducts =[
    {
        name:"Mycodiff",
        description: "a fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings."
    },
    {
        name:"MaraShield",
        description: "a fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings."
    },
    {
        name:"Optimus Prime",
        description: "a fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings."
    },
    {
        name:"V-GAR",
        description: "a fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings."
    },
    {
        name:"Siriza",
        description: "a fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings."
    }

]

const Products = () => {
  return (
   <>
   <Swiper>
    {ourProducts.map((product, index)=><SwiperSlide key={index}>{product.name}</SwiperSlide>)}
   </Swiper>
   </>
  )
}

export default Products