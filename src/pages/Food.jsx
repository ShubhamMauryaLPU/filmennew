import React from "react";
import foodData from "../data/foodData";
import Card from "../components/Card";
const Food = () => {
  return (
    <div className="min-h-[100vh] w-full ">
      <div>
        <picture>
          <source
            srcSet={"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"}
            type="image/avif"
            media="(min-width: 1024px)"
          />
          <source
            srcSet={"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D"}
            type="image/webp"
            media="(min-width: 768px)"
          />
          <img
            className="w-full h-[90vh]  object-cover rounded-lg bg-no-repeat bg-cover"
            src={"https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"}
            alt={"Food"}
          />
        </picture>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1">
          {
            foodData.map((item,idx)=>(
              <div key={idx.id}>
                <Card image={item.image} title={item.title} description={item.description} imageAvif={item.imageAvif&&item.imageAvif} imageWebp={item.imageWebp&&item.imageWebp}  />
              </div>
            ))
          }
        </div>
    </div>
  );
};

export default Food;
