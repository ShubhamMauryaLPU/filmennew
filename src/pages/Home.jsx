import React, {useState,useEffect}from "react";
import foodData from "../data/foodData";
import drinkData from "../data/drinkData";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full min-h-[70vh] bg-gradient-to-b from-orange-100 to-orange-300 ">
      <div className="bg-[url('/images/img.jpg')] bg-no-repeat bg-cover h-[100vh] text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold font-serif ">Welcome to My Cafe</h1>
        <p>Your cozy place for great coffee and delicious treats.</p>
      </div>
      <div className="bg-orange-200 font-bold hover:bg-orange-400">
       <Link to={"/food"}>
       <h1 className="text-2xl py-2 px-5 ">Food <i className="fa-solid fa-greater-than text-xl"></i><i className="fa-solid fa-greater-than text-xl"></i></h1>
       </Link>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1">
          {
            foodData.map((item,idx)=>(
              idx<3&&
              <div key={idx.id} className="place-items-center">
                <Card image={item.image} title={item.title} description={item.description} imageAvif={item.imageAvif&&item.imageAvif} imageWebp={item.imageWebp&&item.imageWebp}  />
              </div>
            ))
          }
        </div>
      </div>
      <div className="bg-orange-200 font-bold hover:bg-orange-400">
       <Link to={"/drink"}>
       <h1 className="text-2xl py-2 px-5">Drink <i className="fa-solid fa-greater-than text-xl"></i><i className="fa-solid fa-greater-than text-xl"></i></h1>
       </Link>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1 ">
          {
            drinkData.map((item,idx)=>(
              idx<3&&
              <div key={idx.id} className="place-items-center">
                <Card image={item.image} title={item.title} description={item.description}  imageAvif={item.imageAvif&&item.imageAvif} imageWebp={item.imageWebp&&item.imageWebp}/>
              </div>
            ))
          }
        </div>
      </div>
      
    </div>
  );
};

export default Home;
