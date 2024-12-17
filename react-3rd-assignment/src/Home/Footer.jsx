"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const languages = [
  { key: "en", label: "English" },
  { key: "es", label: "Spanish" },
  { key: "fr", label: "French" },
];

const countries = [
  { key: "sg", label: "Singapore" },
  { key: "us", label: "United States" },
  { key: "uk", label: "United Kingdom" },
];

const FooterSection = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul>
              <li className="mb-2 cursor-pointer">About MyFeedback</li>
              <li className="mb-2  cursor-pointer">Investor Relations</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold  mb-4">MyFeedback</h3>
            <ul>
              <li className="mb-2 cursor-pointer">MyFeedback for business</li>
              <li className="mb-2 cursor-pointer">Collections</li>
              <li className="mb-2 hover:text-gray-100 cursor-pointer">Talk</li>
              <li className="mb-2 hover:text-gray-100 cursor-pointer">Events</li>
              <li className="mb-2 hover:text-gray-100 cursor-pointer">MyFeedback bloglk</li>
              <li className="mb-2 hover:text-gray-100 cursor-pointer">Support</li>
              <li className="mb-2 hover:text-gray-100 cursor-pointer">Developers</li>
            </ul>
          </div>

          {/* Column 3 - Dropdown Menus */}
          <div>
            {/* Language Dropdown */}
            <h3 className="text-lg font-bold t mb-2">Language</h3>
            <Select
              placeholder="Select Language"
              className="w-full mb-4"
              defaultSelectedKeys={["en"]}
            >
              {languages.map((lang) => (
                <SelectItem key={lang.key} value={lang.key}>
                  {lang.label}
                </SelectItem>
              ))}
            </Select>

            {/* Country Dropdown */}
            <h3 className="text-lg font-bold  mb-2">Country</h3>
            <Select
              placeholder="Select Country"
              className="w-full"
              defaultSelectedKeys={["sg"]}
            >
              {countries.map((country) => (
                <SelectItem key={country.key} value={country.key}>
                  {country.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm">
          <p>&Copyright; Septembre 2023 myfeedback, designed by scott</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
