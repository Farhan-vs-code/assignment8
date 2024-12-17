"use client";
import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";

const cardItems = [
  { id: 1, image: "c-1.png", title: "Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.8 },
  { id: 2, image: "c-2.png", title: "Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.5 },
  { id: 3, image: "c-3.png", title: "Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.9 },
  { id: 4, image: "c-4.png", title: "Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 5.0 },
  { id: 5, image: "c-5.png", title: "Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.6 },
  { id: 6, image: "c-6.png", title: "Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.7 },
  { id: 7, image: "c-7.png", title: "Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.3 },
  { id: 8, image: "c-8.png", title: "Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.4 },
  { id: 9, image: "c-9.png", title: "Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.2 },
  { id: 10, image: "c-10.png", title: "Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.1 },
  { id: 11, image: "c-11.png", title: "Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.0 },
  { id: 12, image: "c-12.png", title: "Bella Italia", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.3 },
 
];

const Card1 = () => {
  return (
    <section className="py-8 px-14">
     
      <h2 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-6">
      The latest trends
      </h2>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cardItems.map((item) => (
          <Card key={item.id} className="bg-white shadow-lg rounded-lg">
            <CardBody className="p-4 flex flex-col items-center">
       
              <Image
                src={item.image}
                alt={item.title}
                className="w-full object-cover rounded-t-lg mb-4"
              />
         
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
           
              <p className="text-gray-600 text-sm text-center mb-2">
                {item.description}
              </p>
              {/* Rating */}
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-yellow-500 ${
                      index < Math.floor(item.rating) ? "text-yellow-500" : "text-gray-300"
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
        ))}
      </div>
      <div className="">
        <h1 className="text-center m-5 text-3xl font-bold">Discover more cool restaurants</h1>
        <Button className="bg-[#1677BD] text-white rounded-full md:mx-[47%] mx-24">Show more</Button>
      </div>
    </section>
  );
};

export default Card1;
