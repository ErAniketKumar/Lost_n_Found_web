import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Add react-icons for arrows

const AccordianSlider = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-10 px-4">
      <Carousel loop>
        <CarouselContent className="transition-all duration-500 ease-in-out">
          <CarouselItem>
            <img
              src="/images/carousel11.jpg"
              alt="Slide 1"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/images/carousel12.jpg"
              alt="Slide 2"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/images/bgimg (4).jpg"
              alt="Slide 3"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-navy text-white p-3 rounded-full shadow-md hover:bg-teal transition-colors duration-300 z-10">
          <FaArrowLeft className="text-lg" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-navy text-white p-3 rounded-full shadow-md hover:bg-teal transition-colors duration-300 z-10">
          <FaArrowRight className="text-lg" />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default AccordianSlider;