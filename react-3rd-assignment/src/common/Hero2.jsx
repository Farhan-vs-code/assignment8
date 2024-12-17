import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Hero2 = () => {

  const goToHome = () => {
    navigate("/");  
  };
  return (
    <>
     <button className="font-semibold mb-2 p-4 cursor-pointer" onClick={goToHome}>Home / BellaItalia</button>
    <section className="relative bg-cover bg-center h-[500px] md:h-[600px]" style={{ backgroundImage: "url('/b-1.png')" }}>
   
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

     
      <div className="relative container mx-auto h-full flex flex-col justify-center items-start px-6 md:px-12">
       
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Bella italia</h2>

        
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-yellow-400 text-2xl mr-1">★</span>
          ))}
          <span className="text-white ml-2">(5.0)</span>
        </div>

       
        <p className="text-white text-sm md:text-base mb-4 max-w-md">
          Explore this beautiful location with breathtaking views and excellent facilities. Perfect for a weekend getaway!
        </p>

       
        <div className="flex flex-col md:flex-row md:items-center mb-6 text-white">
          <div className="flex items-center mb-2 md:mb-0 md:mr-6">
            <FaMapMarkerAlt className="text-yellow-400 mr-2" />
            <span>123 Main Street, City Name</span>
          </div>
          <div className="flex items-center">
            <FaClock className="text-yellow-400 mr-2" />
            <span>Open: 9:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img
          src="/b-2.png"
          alt="Circular Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
    </>
  );
};

export default Hero2;
