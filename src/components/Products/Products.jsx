import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router";
import "swiper/css";

import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";

const ourProducts = [
  {
    name: "Mycodiff",
    route: "mycodiff",
    scientificName: "Mycobacterium diffusa",
    description:
      "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product1,
  },
  {
    name: "MaraShield",
    route: "marashield",
    scientificName: "Marasmius shieldii",
    description:
      "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product2,
  },
  {
    name: "Optimus Prime",
    route: "optimusprime",
    scientificName: "Optimus primus",
    description:
      "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product1,
  },
  {
    name: "V-GAR",
    route: "vgar",
    scientificName: "Vitis garcinia",
    description:
      "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product2,
  },
  {
    name: "Siriza",
    route: "siriza",
    scientificName: "Siriza viridis",
    description:
      "A fast-acting, non-selective solution for eliminating weeds and unwanted vegetation. Designed for residential, agricultural, and industrial use, it targets a wide range of plant species, providing long-lasting results. Easy to apply, rainproof, and eco-conscious, it ensures effective weed control while protecting your surroundings.",
    image: product1,
  },
];
const ProductsSlider = () => {
  const navigate = useNavigate();
  return (
    <div className="our-products">
      <div className="mobile-swiper mt-10">
        <Swiper spaceBetween={10} slidesPerView={1.25}>
          {ourProducts.map((product, index) => (
            <SwiperSlide
              key={index}
              className="products-card border border-gray-300 rounded-lg p-2"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="image-holder">
                <img
                  src={product.image}
                  alt={product.name}
                  className="border border-gray-300 rounded-lg h-48"
                />
              </div>
              <h1 className="product-name text-xl text-green-950 font-bold">
                {product.name}
              </h1>
              <p className="scientific-name italic text-sm">
                {product.scientificName}
              </p>
              <button
                className="order-btn text-green-950 font-medium bg-buttonHover rounded-lg mx-1 hover:bg-gray-300 active:bg-green-600 px-3 py-1"
                onClick={() =>
                  navigate(
                    `/products/${product.route
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`
                  )
                }
              >
                Order Product
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="desktop mt-10 w-11/12 mx-auto md:w-5/6 md:mx-auto md:flex md:flex-row gap-2">
        {ourProducts.map((product, index) => (
          <div
            key={index}
            className="products-card border border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 p-2"
          >
            <div className="image-holder">
              <img
                src={product.image}
                alt={product.name}
                className="border border-gray-300 rounded-lg h-48"
              />
            </div>
            <h1 className="product-name text-xl text-green-950 font-bold">
              {product.name}
            </h1>
            <p className="scientific-name italic text-sm">
              {product.scientificName}
            </p>
            <button
              className="order-btn text-green-950 font-medium bg-buttonHover rounded-lg mx-1 hover:bg-gray-300 active:bg-green-600 px-3 py-1"
              onClick={() =>
                navigate(
                  `/products/${product.route.replace(/\s+/g, "-").toLowerCase()}`
                )
              }
            >
              Order Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSlider;
