import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Add react-icons for arrows

const HeroSection = () => {
  const images = [
    "/images/carousel11.jpg",
    "/images/carousel12.jpg",
    "/images/bgimg (4).jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  // Manually go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Manually go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-screen-2xl container mx-auto mt-20 px-4">
      <div className="relative">
        <Carousel>
          <CarouselContent className="transition-all duration-500 ease-in-out">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className={`${
                  index === currentIndex ? "block" : "hidden"
                } transition-opacity duration-500`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-navy text-white p-3 rounded-full shadow-md hover:bg-teal transition-colors duration-300 z-10"
          >
            <FaArrowLeft className="text-lg" />
          </CarouselPrevious>
          <CarouselNext
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-navy text-white p-3 rounded-full shadow-md hover:bg-teal transition-colors duration-300 z-10"
          >
            <FaArrowRight className="text-lg" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;