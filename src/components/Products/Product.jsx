import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Logo from '../../assets/hero/dark-logo.svg';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]); // Store related products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const foundProduct = data.products.find((p) => 
          p.route.replace(/\s+/g, "-").toLowerCase() === id
        );
        console.log(foundProduct);
        if (foundProduct) {
          setProduct(foundProduct);
          setRelatedProducts(data.products.filter(p => p.id !== foundProduct.id)); // Exclude current product
          console.log(relatedProducts);
        } else {
          setError("Product not found.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load product.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <div className="products">
      <div className="header">
        <img src={Logo} className="h-10 ml-2 mt-2" alt="Logo" />
      </div>
      <div className="product-details bg-gray-100 mt-10 w-11/12 mx-auto rounded-lg p-2">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <img src={product.img} alt={product.name} className="h-64 mx-auto" />
        <p className="text-green-800 font-bold text-xl my-3">{product.detail}</p>
        <p className="description">{product.description}</p>
        <h2 className="mt-4 font-semibold">Key Benefits:</h2>
        <ul className="list-disc pl-5">
          {product.key_benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2 className="text-2xl font-bold mt-10">Related Products</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="mySwiper"
        >
          {relatedProducts.map((relatedProduct) => (
            <SwiperSlide key={relatedProduct.id}>
              <div className="related-product border border-gray-300 rounded-lg p-2">
                <img
                  src={relatedProduct.img}
                  alt={relatedProduct.name}
                  className="h-48 w-full object-cover"
                />
                <h3 className="text-lg font-semibold">{relatedProduct.name}</h3>
                <button className="order-btn bg-buttonHover text-green-950 font-medium rounded-lg px-3 py-1">
                  Order Product
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
