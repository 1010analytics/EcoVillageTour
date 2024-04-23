import React from "react";
import hero3 from "../assests/hero3.jpg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 py-10">
      <div className="hero_txt text-center m-auto text-lg text-orange-800">
        <h1 className="text-green-600 mb-5 text-3xl font-medium">Welcome to EcoVillageTour</h1>
        <Typewriter       
          options={{
            strings: ["・Agritourism・Farm stay ", "・Camping・Workshops", "・School trips・Corporate meets", "・Celebrations・Weddings"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className="hero_img">
        <img className = "w-full rounded-lg shadow-xl" src={hero3} />
      </div>
    </div>
  );
};

export default Hero;
