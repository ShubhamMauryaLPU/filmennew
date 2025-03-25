import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let navData = [
    { id: 1, name: "Home", link: "/home", icon: "fa-house" },
    { id: 2, name: "Movies", link: "/movies", icon: "fa-film" },
    { id: 3, name: "Tv Shows", link: "/shows", icon: "fa-tv" },
  ];
  return (
    <div className="bg-gray-950 py-3 text-white flex">
      <Link to={"/"}>
        <span className="uppercase flex px-10 font-bold font-serif text-3xl text-white cursor-pointer">
          Fil <span className="text-red-600">men</span>
        </span>
      </Link>
      <ul className="flex justify-center items-center w-full">
        {navData.map((item) => (
          <Link to={item.link} key={item.id}>
            <li  className="px-5 lg:px-10 flex justify-center items-center hover:text-red-600">
              <i className={`fa-solid ${item.icon}`}></i>
              <span className="px-2 hidden md:flex lg:flex ">{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
