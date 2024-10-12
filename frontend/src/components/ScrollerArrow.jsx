import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollerArrow = () => {

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", 
		});
	};

	return (
		<div>
			<div
				className="fixed bottom-20 right-3 px-4 text-white py-4 bg-[#ea0eac] hover:bg-pink-600 cursor-pointer"
				onClick={scrollToTop} 
			>
				<IoIosArrowUp />
			</div>
		</div>
	);
};

export default ScrollerArrow;