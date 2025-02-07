import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Store a single product, not an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("../../../public/products.json") 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Assuming data is an array of products
        const foundProduct = data.products.find((p) => p.name.replace(/\s+/g, "-").toLowerCase() === id);
        if (foundProduct) {
          setProduct(foundProduct);
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
  }, [id]); // Runs whenever the `id` parameter changes

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <div className="product-details">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="h-64 mx-auto" />
      <p className="italic">{product.detail}</p>
      <p className="description">{product.description}</p>
      <h2 className="mt-4 font-semibold">Key Benefits:</h2>
      <ul className="list-disc pl-5">
        {product.key_benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
