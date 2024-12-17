"use client";
import React from "react";
import { Button, Image } from "@nextui-org/react";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        
        <div className="w-full md:w-1/2 text-center md:text-left">
       
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
          MyFeedback for Business has 
          resources to help you plan, start,
           grow, and advertise your small 
           business
          </h2>
         
          <p className="text-gray-600 mb-10 leading-relaxed">
            Explore our top-notch services that bring quality and satisfaction. 
            Whether it's design, performance, or user experience, we deliver excellence.
          </p>
         
          <Button
            radius="full"
            className="bg-black text-white"
          >
           Explore MyFeedback business
          </Button>
        </div>

        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <Image
            src="h-1.png"
            alt="Features"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
