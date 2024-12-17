"use client";
import React, { useState } from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

const carouselItems = [
  { id: 1, image: "ca-1.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 5.0 },
  { id: 1, image: "ca-2.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.8 },
  { id: 1, image: "ca-3.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.6 },
  { id: 1, image: "c-4.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 5.0 },
  { id: 1, image: "ca-1.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 3.0 },
  { id: 1, image: "ca-2.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 5.0 },
  { id: 1, image: "ca-3.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.9 },
  { id: 1, image: "ca-4.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 5.0 },
  
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % 2); 
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <section className="bg-[#1677BD] py-8 px-4">
      <h2 className="text-white text-2xl md:text-3xl text-center font-bold  mb-6">
      Find the best restaurant ratings below
      </h2>

      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-1/4 flex-shrink-0 px-2"
            >
              <Card className="bg-white shadow-md rounded-lg">
                <CardBody className="p-4 flex flex-col items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center mb-2">
                    {item.description}
                  </p>
                  {/* Rating */}
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`text-yellow-500 ${
                          index < Math.floor(item.rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-gray-700 font-medium">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>


        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          &#8594;
        </button>
      </div>


      <div className="flex justify-center mt-4">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              currentIndex === index
                ? "bg-white"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
