import React,{  }  from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import productBgImg from "../../assets/hero/herobg2.png";

const ourProducts = [
  {
    name: "Mycodiff",
    description:
      "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product1,
  },
  {
    name: "MaraShield",
    description:
      "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product2,
  },
  {
    name: "Optimus Prime",
    description:
      "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product1,
  },
  {
    name: "V-GAR",
    description:
      "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product2,
  },
  {
    name: "Siriza",
    description:
      "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product1,
  },
];
const ProductsSlider = () => {
    const [selectedProduct, setSelectedProduct] = useState(ourProducts[0]);
    
      const handleProductClick = (product) => {
        setSelectedProduct(product);
      };
  return (
    <div>ProductsSlider</div>
  )
}

export default ProductsSlider