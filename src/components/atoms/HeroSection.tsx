import React from "react";
import HeroSearchBox from "./HeroSearchBox";

const HeroSection: React.FC = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content lg:w-[760px] md:[720px] w-11/12">
        <div className="w-full">
          <HeroSearchBox />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
