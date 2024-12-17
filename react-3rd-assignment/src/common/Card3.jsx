import React from "react";
import { FaStar } from "react-icons/fa";

const cards = [
  { id: 1, image: "/s-2.png", title: "The melt", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4 },
  { id: 2, image: "/s-3.png", title: "Lokma", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 5 },
  { id: 3, image: "/s-4.png", title: "CThe snugard", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 3 },
];

const Card3 = () => {
  return (
    <section className="py-8 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Also discover...</h2>
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
              <p className="text-gray-500 mt-2">{card.description}</p>

              {/* Rating Section */}
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`text-yellow-500 text-lg ${
                      index < card.rating ? "fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card3;
