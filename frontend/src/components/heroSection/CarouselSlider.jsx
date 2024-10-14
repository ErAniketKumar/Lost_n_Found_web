import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const AccordianSlider = () => {
	return (
		<div className="relative">
			<Carousel loop>
				<CarouselContent>
					<CarouselItem>
						<img src="/images/bgimg (1).jpg" alt="" />
					</CarouselItem>
					<CarouselItem>
						<img src="/images/bgimg (6).jpg" alt="" />
					</CarouselItem>
					<CarouselItem>
						<img src="/images/bgimg (4).jpg" alt="" />
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 cursor-pointer z-10" />
				<CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 cursor-pointer z-10" />
			</Carousel>
		</div>
	);
};

export default AccordianSlider;