import React from "react";
import { FaUtensils, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const LocationSection = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        <div className="md:col-span-6 space-y-4">
        
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Contact Information</h2>

          <div className="flex items-center space-x-3">
            <FaUtensils className="text-blue-600 text-2xl" />
            <p className="text-gray-700">Fine Dining and Excellent Cuisine</p>
          </div>

          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-blue-600 text-2xl" />
            <p className="text-gray-700">+1 234 567 890</p>
          </div>

          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <p className="text-gray-700">123 Main Street, City Name</p>
          </div>

          {/* Clock Icon with Text */}
          <div className="flex items-center space-x-3">
            <FaClock className="text-blue-600 text-2xl" />
            <p className="text-gray-700">Open: 9:00 AM - 10:00 PM</p>
          </div>

          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <p className="text-gray-700">info@example.com</p>
          </div>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600 text-2xl hover:text-blue-800">
              <FaFacebookF />
            </a>
            <a href="#" className="text-pink-500 text-2xl hover:text-pink-700">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-800 text-2xl hover:text-gray-900">
              <FaTiktok />
            </a>
            <a href="#" className="text-green-500 text-2xl hover:text-green-700">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="md:col-span-6">
          <img
            src="/l-2.png"
            alt="Location"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
