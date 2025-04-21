import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import foodData from '../data/foodData';

const ShowPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const pr = foodData.find((item) => item.id == id);
    setProduct(pr || null);
  }, [id]);

  const handleAddToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} added to cart!`);
  };

  if (!product) return <div className="p-6 text-lg text-red-600">Product not found.</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <picture>
            <source srcSet={product.imageAvif} type="image/avif" />
            <source srcSet={product.imageWebp} type="image/webp" />
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
            <p className="text-2xl font-bold text-green-500">₹ {product.price}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
