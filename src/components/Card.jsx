import React from "react";

const Card = ({ image, imageWebp, imageAvif, title, description }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white min-h-75 p-4 my-3">
      <picture>
        <source srcSet={imageAvif} type="image/avif" media="(min-width: 1024px)" />
        <source srcSet={imageWebp} type="image/webp" media="(min-width: 768px)" />
        <img 
          className="w-full h-48 object-cover rounded-lg" 
          src={image} 
          alt={title} 
        />
      </picture>
      <div className="p-4 min-h-30">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;