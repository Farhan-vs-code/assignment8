import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialCards = [
  { id: 1, image: "r-1.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.8 },
  { id: 2, image: "r-2.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.2 },
  { id: 3, image: "r-3.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 5.0 },
  { id: 4, image: "r-4.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout..", rating: 4.5 },
  { id: 5, image: "r-5.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 3.9 },
  { id: 6, image: "r-6.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.7 },
  { id: 7, image: "r-7.png", title: "Bottega", description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.0 },
];

const RestaurantSection = () => {
  const [cards, setCards] = useState(initialCards);
  const [isOpen, setIsOpen] = useState(false); 
  const navigate = useNavigate();

  
  const handleFilter = (type) => {
    let sortedCards = [...cards];
    if (type === "highest") {
      sortedCards.sort((a, b) => b.rating - a.rating);
    } else if (type === "oldest") {
      sortedCards.sort((a, b) => a.rating - b.rating);
    }
    setCards(sortedCards);
    setIsOpen(false); 
  };
  const goToHome = () => {
    navigate("/");  
  };

  return (
    <section className="py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
     
        <div className="md:col-span-6 md:ml-14">
          <p className="font-semibold mb-2" onClick={goToHome}>Home / All Restaurants</p>
          <div className="flex gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">best restaurants in singapore</h2>
          <button
            className="mb-6 py-2 px-4 text-gray-500 rounded-full border"
            onClick={() => setIsOpen(!isOpen)}
          >
            Short
          </button>
          </div>
    
          {isOpen && (
            <div className="bg-white border rounded shadow-md p-4 w-48">
              <button
                className="block w-full text-left px-2 py-1 hover:bg-gray-200"
                onClick={() => handleFilter("highest")}
              >
                Highest Rating
              </button>
              <button
                className="block w-full text-left px-2 py-1 hover:bg-gray-200"
                onClick={() => handleFilter("oldest")}
              >
                Oldest Rating
              </button>
            </div>
          )}

      
          <div className="grid grid-cols-1 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => navigate(`/places/${card.id}`)}
                className="border-b-[1px] overflow-hidden cursor-pointer md:flex"
              >
                <img src={card.image} alt={card.title} className="object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{card.description}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`text-yellow-500 text-lg ${
                          index < Math.floor(card.rating) ? "" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-6 flex justify-center items-center">
          <img
            src="l-1.png"
            alt="Location"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
