import React, { useState, useEffect } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
	const images = [
		"/images/bgimg (1).jpg",
		"/images/bgimg (6).jpg",
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
		<div className="max-w-screen-2xl container mx-auto mt-20">
			<div className="relative">
				<Carousel>
					<CarouselContent>
						{images.map((image, index) => (
							<CarouselItem key={index} className={index === currentIndex ? "block" : "hidden"}>
								<img src={image} alt={`Slide ${index + 1}`} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious
						onClick={prevSlide}
						className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 cursor-pointer z-10"
					/>
					<CarouselNext
						onClick={nextSlide}
						className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 cursor-pointer z-10"
					/>
				</Carousel>
			</div>
		</div>
	);
};

export default HeroSection;
