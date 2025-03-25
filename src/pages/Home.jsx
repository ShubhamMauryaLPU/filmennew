import React from "react";


const Home = () => {
  return (
    <div className="w-full min-h-[70vh] bg-gradient-to-b from-orange-100 to-orange-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-orange-200 text-5xl font-bold flex justify-center items-center min-h-[50vh]">
        HI div1
      </div>
      <div className="bg-orange-400 text-5xl font-bold flex justify-center items-center min-h-[50vh]">
        HI div2
      </div>
      <div className="bg-orange-600 text-5xl font-bold flex justify-center items-center min-h-[50vh]">
        HI div3
      </div>
      <div className="bg-orange-800 text-5xl font-bold flex justify-center items-center min-h-[50vh]">
        HI div4
      </div>
    </div>
  );
};

export default Home;
