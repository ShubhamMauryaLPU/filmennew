import axios from "axios";
import React, { useEffect } from "react";

const Drink =() => {
  const img = [];

  useEffect(() => {
    let generateImg=async()=>{
      for (let i = 1; i < 30; i++) {
        const img1 = await axios.get(
          `https://randomuser.me/api/portraits/women/${i}.jpg`
        );
        console.log(img1);
      }
    }
    generateImg()
  }, []);
  return <div>Drink</div>;
};

export default Drink;
