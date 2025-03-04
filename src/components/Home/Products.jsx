import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router";
import "swiper/css";
import productBgImg from "../../assets/hero/herobg2.png";



const Products = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState({
    "id": 1,
    "name": "V-GAR™ WP",
    "route":"vgar",
    "detail": "Natural, Residue-Free Nematode Control",
    "img":"/products/v-gar.png",
    "description": "V-GAR™ WP is an advanced bio-nematicide utilizing Paecilomyces lilacinus, a naturally occurring fungus, to control harmful nematodes like root-knot, cyst, and ring nematodes. This eco-friendly solution leaves zero harmful residues, is safe for beneficial soil organisms, and integrates seamlessly into IPM (Integrated Pest Management) systems, supporting sustainable farming and enhancing soil health.",
    "key_benefits": [
      "Effective Nematode Suppression: Controls major nematode species, including root-knot, cyst, and lesion nematodes, reducing crop losses significantly.",
      "Enhanced Soil Health: Improves soil structure and microbial diversity, supporting long-term soil fertility and plant health.",
      "IPM Compatible: Works well within Integrated Pest Management systems, helping reduce reliance on chemical treatments.",
      "Residue-Free and Safe for Harvest: V-GAR™ WP leaves no harmful residues, allowing use up to the day of harvest with zero pre-harvest interval (PHI).",
      "Safe for Beneficials: Harmless to pollinators, earthworms, and other non-target soil organisms, preserving ecological balance."
    ]
  });
  const [ourProducts, setOurProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOurProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div
      className="products-section p-4 w-11/12 mx-auto rounded-xl md:flex md:items-center md:justify-center md:gap-10 md:p-10 mt-10"
      style={{
        backgroundImage: `url(${productBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mobile-swiper">
        <Swiper spaceBetween={10} slidesPerView={2.5}>
          {ourProducts.map((product, index) => (
            <SwiperSlide
              key={index}
              className={`product-slide glass ${
                selectedProduct.name === product.name
                  ? "bg-white text-green-700 font-bold"
                  : "hover:bg-white hover:text-green-700"
              }`}
              onClick={() => handleProductClick(product)}
            >
              {product.name}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="desktop flex flex-col gap-2">
        {ourProducts.map((product, index) => (
          <button
            key={index}
            className={`glass product-slide ${
              selectedProduct.name === product.name
                ? "bg-white text-green-700 font-bold"
                : "hover:bg-white hover:text-green-700"
            }`}
            onClick={() => handleProductClick(product)}
          >
            {product.name}
          </button>
        ))}
      </div>
      <div className="middle-div md:w-1/3 md:pt-0">
        <div className="product-details text-white mt-4">
          <h1 className="product-name text-2xl font-bold">
            {selectedProduct.name}
          </h1>
          <p className="product-description mt-2">
            {selectedProduct.description}
          </p>
          <img
            className="md:hidden mt-4 rounded"
            src={selectedProduct.img}
            alt={selectedProduct.name}
          />
        </div>
        <div className="buttons flex justify-between mt-2 md:justify-start md:gap-4">
          <button className="bg-white py-1 px-3 rounded-xl hover:bg-buttonHover"
          onClick={() => navigate(`/products/${selectedProduct.route}`) }
          >
            Learn More
          </button>
          <button className="bg-white py-1 px-3 rounded-xl hover:bg-buttonHover"
          onClick={() => navigate(`/products/${selectedProduct.route}`) }
          >
            Order Product
          </button>
        </div>
      </div>
      <img
        className="desktop h-80 rounded"
        src={selectedProduct.img}
        alt={selectedProduct.name}
      />
    </div>
  );
};

export default Products;
