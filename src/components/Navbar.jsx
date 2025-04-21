import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [active,setActive]=useState(false);
  let navData = [
    { id: 1, name: "Home", link: "/home", icon: "fa-house" },
    { id: 2, name: "Food", link: "/food", icon: "fa-utensils" },
    { id: 3, name: "Drink", link: "/drink", icon: "fa-wine-glass-empty" },
  ];
  let handleOnClick=()=>{
    setActive((prev)=>!prev);
  }
  return (
    <>
    <div className="bg-gray-950 py-3 text-white flex">
      <Link to={"/"}>
        <span className="uppercase flex px-10 font-bold font-serif text-3xl text-white cursor-pointer">
          My <span className="text-red-600">Cafe</span>
        </span>
      </Link>
      <ul className="hidden md:flex lg:flex justify-center items-center w-full">
        {navData.map((item) => (
          <Link to={item.link} key={item.id}>
            <li  className="px-5 lg:px-10 flex justify-center items-center hover:text-red-600">
              <i className={`fa-solid ${item.icon}`}></i>
              <span className="px-2 hidden lg:flex ">{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
      <span onClick={handleOnClick} className="w-full px-10 text-3xl md:hidden lg:hidden"><i className="fa-solid fa-bars lg:hidden float-right"></i></span>
    </div>
    {
      active&&
      <div className="bg-blue-400">
      <ul className="md:hidden lg:hidden flex flex-col justify-center items-center w-full ">
        {navData.map((item) => (
          <Link to={item.link} key={item.id}>
            <li  className="px-5 lg:px-10 flex justify-center items-center border-b-2 w-full hover:text-red-600" onClick={handleOnClick}>
              <i className={`fa-solid ${item.icon}`}></i>
              <span className="px-2 flex  ">{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
      </div>
    }
   
    </>
  );
};

export default Navbar;
