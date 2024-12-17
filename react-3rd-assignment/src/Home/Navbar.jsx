"use client";
import React, { useState } from "react";

const menuItems = [
  { id: 1, image: "n-1.png", text: "All" },
  { id: 2, image: "n-2.png", text: "Restaurants" },
  { id: 3, image: "n-3.png", text: "Hotels" },
  { id: 4, image: "n-4.png", text: "Home services" },
  { id: 5, image: "n-5.png", text: "Shopping" },
  { id: 6, image: "n-6.png", text: "Car location" },
  { id: 7, image: "n-7.png", text: "Beauty & Spa" },
  { id: 8, image: "n-8.png", text: "Park" },
  { id: 9, image: "n-9.png", text: "museum" },
  { id: 10, image: "n-10.png", text: "Car wash" },
  { id: 11, image: "n-10.png", text: "Bars" },
  { id: 12, image: "n-10.png", text: "Gyms" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex flex-wrap justify-center gap-2 md:gap-4 px-4 pb-4`}
      >
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center bg-white rounded-lg p-3 cursor-pointer w-20 sm:w-24"
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-23 h-23 object-cover mb-2"
            />
            <p className="mt-2 text-xs sm:text-sm font-semibold text-[#AFAFAF] text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
