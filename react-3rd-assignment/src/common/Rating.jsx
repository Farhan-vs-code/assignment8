import React from "react";

const ratings = [
  { stars: 5, percentage: 80 },
  { stars: 4, percentage: 60 },
  { stars: 3, percentage: 40 },
  { stars: 2, percentage: 20 },
  { stars: 1, percentage: 10 },
];

const RatingSection = () => {
  return (
    <section className="py-12 px-5">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-6 relative">
       
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="/s-1.png"
            alt="Logo"
            className="w-16 h-16 object-cover rounded-full shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Overall rating</h2>
            <p className="text-gray-600">834 Reviews</p>
          </div>
        </div>

       
        <div className="flex items-center space-x-2 mb-6">
          <div className="flex text-yellow-400 text-2xl">
            {[...Array(5)].map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>
          <p className="text-gray-600 font-semibold">4.8 out of 5</p>
        </div>

    
        <div className="space-y-4">
          {ratings.map((rating) => (
            <div key={rating.stars} className="flex items-center space-x-4">
              
              <div className="flex items-center space-x-1 text-gray-600 w-16">
                <span className="text-lg font-semibold">{rating.stars}</span>
                <span className="text-yellow-400 text-lg">★</span>
              </div>

             
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-[#1677BD]"
                  style={{ width: `${rating.percentage}%` }}
                ></div>
              </div>

              
              <span className="text-gray-600 font-semibold w-12">
                {rating.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
