import React, { useState } from "react";

// Dummy Data for Cards
const cardsData = [
  { id: 1, image: "/h-2.png", title: "Card 1", description: "Singapore, Orchad boulevard", rating: 5, date: "2024-06-01", details: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },
  { id: 2, image: "/h-2.png", title: "Card 2", description: "Singapore, Orchad boulevard", rating: 4, date: "2024-06-02", details: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },
  { id: 3, image: "/h-2.png", title: "Card 3", description: "Singapore, Orchad boulevard", rating: 3, date: "2024-06-03", details: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },
  { id: 4, image: "/h-2.png", title: "Card 4", description: "Singapore, Orchad boulevard", rating: 5, date: "2024-06-04", details: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },
  { id: 5, image: "/h-2.png", title: "Card 5", description: "Singapore, Orchad boulevard", rating: 2, date: "2024-06-05", details: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },
  { id: 6, image: "/h-2.png", title: "Card 6", description: "Singapore, Orchad boulevard", rating: 4, date: "2024-06-06", details: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },
  { id: 7, image: "/h-2.png", title: "Card 7", description: "Singapore, Orchad boulevard", rating: 1, date: "2024-06-07", details: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },
  { id: 8, image: "/h-2.png", title: "Card 8", description: "Singapore, Orchad boulevard", rating: 3, date: "2024-06-08", details: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },
  { id: 9, image: "/h-2.png", title: "Card 9", description: "Singapore, Orchad boulevard", rating: 5, date: "2024-06-09", details: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },
];

const Cared2 = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter Logic
  const filteredCards = selectedRating
    ? cardsData.filter((card) => card.rating === selectedRating)
    : cardsData;

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        {/* Buttons */}
        <div className="flex justify-start space-x-4 mb-6">
          {/* Filter Button */}
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-4 py-2 bg-[#1677BD] text-white rounded hover:bg-[#246899] transition"
            >
              Filter
            </button>
            {/* Dropdown */}
            {isFilterOpen && (
              <div className="absolute mt-2 bg-white border rounded shadow-md">
                {[5, 4, 3, 2, 1].map((star) => (
                  <button
                    key={star}
                    onClick={() => setSelectedRating(star)}
                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  >
                    {star} Star
                  </button>
                ))}
                <button
                  onClick={() => setSelectedRating(null)}
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                >
                  Clear Filter
                </button>
              </div>
            )}
          </div>

          {/* Short Button */}
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Short
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredCards.map((card) => (
            <div key={card.id} className="bg-[#F8F8F8] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src={card.image} alt={card.title} className="object-cover p-4" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <p className="text-gray-600 mt-1">{card.description}</p>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400 text-lg">
                    {[...Array(card.rating)].map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-500 text-sm">{card.date}</span>
                </div>
                <p className="text-gray-600 mt-2">{card.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cared2;
