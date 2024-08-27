import Image from "next/image";
import React from "react";
import Image1 from "@/img/image.png";

function Hero() {
  return (
    <div className="flex px-[5vw]">
      <div className="w-1/2">
        <h1 className="text-white">Introducing Meha</h1>
      </div>
      <div className="w-1/2">
        <Image src={Image1} alt="Hero Image" className="w-3/4" />
      </div>
    </div>
  );
}

export default Hero;
