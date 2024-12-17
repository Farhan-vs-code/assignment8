"use client";
import React from "react";
import { Card, CardBody, Avatar, Image, Button } from "@nextui-org/react";

const reviews = [
  {
    id: 1,
    name: "Leslie sakho",
    role: "Canada, toronto",
    rating: 4.8,
    date: "09/11/2024",
    description1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    description2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: ["f-1.png", "f-2.png", "f-3.png"],
  },
  {
    id: 2,
    name: "Chris macari",
    role: "Singapour",
    rating: 4.5,
    date: "14/09/2024",
    description1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    description2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: ["f-4.png", "f-5.png", "f-6.png"],
  },
  {
    id: 3,
    name: "Jojo alba",
    role: "Kuala lumpur",
    rating: 5.0,
    date: "28/09/2024",
    description1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    description2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: ["f-7.png", "f-3.png", "f-9.png",]
  },
];

const ReviewSection = () => {
  // Function to generate star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <span key={i} className="text-yellow-500 text-lg">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300 text-lg">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <section className=" py-8 px-4">
      {/* Section Heading */}
      <h2 className="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-6">
      Recents avtivities
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {reviews.map((review) => (
          <Card key={review.id} className="bg-[#F8F8F8] shadow-lg rounded-lg">
            <CardBody className="p-4">
        
              <div className="flex items-center mb-4">
                <Image
                  src={`h-2.png`}
                  size="lg"
                  className="mr-4 p-2 rounded-full object-cover bg-white"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>

         
              <div className="flex items-center  mb-4">
                <div className="flex items-center">
                  {renderStars(review.rating)}
                  <span className="ml-2 text-gray-700 font-medium">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
                <p className="text-gray-500 text-sm ml-2">{review.date}</p>
              </div>

      
              <p className="text-gray-700 text-sm mb-2">{review.description1}</p>
              <p className="text-gray-700 text-sm mb-4">{review.description2}</p>

       
              <div className="flex space-x-2 mb-4">
                {review.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`review-image-${index}`}
                    className="  object-cover rounded-md"
                  />
                ))}
              </div>

              <div className="underline">
                <a href="#">Discover</a>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
