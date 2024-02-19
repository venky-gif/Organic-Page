import React from "react";
import heroBg from "./assets/heroBg.jpg";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="text-white text-center">
        <h2 className="font-bold mb-4 font-style:san-serif text-5xl">100% organic</h2>
        <h4 className="text-lg text-[40px]">Explore our amazing features</h4>
        <button className="border-solid border-2 border-spacing-4 m-5 p-2 rounded-md ">Get Now</button>
      </div>
    </div>
  );
};

export default Hero;
