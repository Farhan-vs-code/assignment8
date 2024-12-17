import React, { useState } from "react";

const images = [
  { id: 1, src: "/i-1.png", alt: "Image 1" },
  { id: 2, src: "/i-2.png", alt: "Image 2" },
  { id: 3, src: "/i-3.png", alt: "Image 3" },
  { id: 4, src: "/i-4.png", alt: "Image 4" },
  { id: 5, src: "/i-5.png", alt: "Image 5" },
];

const ImageSection = () => {
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility
  const [currentImage, setCurrentImage] = useState(0); // Current slide index

  const openSlider = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeSlider = () => {
    setIsOpen(false);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-8 px-4">
      {/* Section Header */}
      <div className="text-center mb-6 mt-14">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">Discover our magnificent place in photos</h2>
        <p className="text-gray-600">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Large Image */}
        <div className="relative col-span-2 row-span-2">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="object-cover"
          />
          {/* View All Photos Button */}
          <button
            onClick={() => openSlider(0)}
            className="absolute bottom-4 m-2 bg-white text-black px-4 py-2 rounded-lg"
          >
            View All Photos
          </button>
        </div>

        {/* Smaller Images */}
        {images.slice(1).map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => openSlider(index + 1)}
            className=" object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
          />
        ))}
      </div>

      {/* Popup Modal with Custom Slider */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg p-4">
            {/* Close Button */}
            <button
              onClick={closeSlider}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-xl"
            >
              ✕
            </button>

            {/* Slider */}
            <div className="flex items-center justify-between">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="text-3xl text-gray-700 hover:text-gray-900"
              >
                ❮
              </button>

              {/* Current Image */}
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-96 object-cover rounded-lg"
              />

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="text-3xl text-gray-700 hover:text-gray-900"
              >
                ❯
              </button>
            </div>

            <p className="text-center mt-4 text-gray-600">
              {currentImage + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageSection;
