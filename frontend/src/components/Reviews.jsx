import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { set } from "express/lib/application";

const Reviews = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	// Sample reviews data
	const reviews = [
		{
			name: "Aniket Kumar",
			rating: 5,
			comment:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, quia?",
			date: "10/20/2023",
			initial: "A",
		},
		{
			name: "John Doe",
			rating: 4,
			comment: "Awesome service! Would recommend to others.",
			date: "09/15/2023",
			initial: "J",
		},
		{
			name: "Jane Smith",
			rating: 5,
			comment: "Absolutely amazing experience!",
			date: "08/10/2023",
			initial: "J",
		},
		// Add more reviews as needed
	];

	const [name, setName] = useState("");
	const [starCount, setStarCount] = useState("");
	const [comments, setComments] = useState("");
    const [reviewsData, setReviewsData] = useState([]);

	const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;

	const handleReviewFormSumbit = async (e) => {
		e.preventDefault();
		const reviewData = {
			name,
			startCount,
			comments,
		};
		const response = await fetch(`${VITE_API_URL}/review`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reviewData),
		});
		const data = await response.json();
		if (response.ok) {
			alert("Review submitted successfully!");
			setName("");
			setStartCount("");
			setComments("");
            setReviewsData([...reviewsData, data]);
		} else {
			alert("Failed to submit review");
		}
	};

	return (
		<div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-[#f5f5f5] p-6">
			<h1 className="text-3xl flex justify-center my-3 font-bold text-gray-700">
				Meet the people we have{" "}
				<span className="text-[#ea0eac] ml-2"> helped!</span>
			</h1>
			<Slider {...settings}>
				{reviews.map((review, index) => (
					<div
						key={index}
						className="W-[10rem] h-[12rem] bg-white p-5 shadow-md"
					>
						<div className="flex gap-4">
							<div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
								<span className="text-white font-bold">{review.initial}</span>
							</div>
							<div>
								<h1 className="text-lg font-bold text-gray-700">
									{review.name}
								</h1>
								<p>{"⭐".repeat(review.rating)}</p>
								<p className="text-gray-700 flex flex-wrap w-[15rem]">
									{review.comment}
								</p>
								<p className="text-sm text-gray-700">{review.date}</p>
							</div>
						</div>
					</div>
				))}
			</Slider>

			<div className="flex justify-center mt-10">
				<Dialog>
					<DialogTrigger className="text-lg font-semibold border hover:bg-teal-800 hover:text-white hover:border-2 p-2 rounded-sm border-[#ea0eac] hover:border-orange-500">
						Click - Please gives a reviews
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Gives Your Valueble Feedback</DialogTitle>
							<DialogDescription>
								<form
									className="flex flex-col gap-2"
									action="/review"
									method="post"
									onSubmit={handleReviewFormSumbit}
								>
									<div className="flex flex-col">
										<label className="text-gray-800" htmlFor="name">
											Name
										</label>
										<input
											className="text-gray-900 outline-none p-1 border border-gray-700"
											type="text"
											id="name"
											name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div className="flex flex-col">
										<label className="text-gray-800" htmlFor="startCount">
											No of Star
										</label>
										<input
											className="text-gray-900 outline-none p-1 border border-gray-700"
											type="text"
											id="starCount"
											name="starCount"
											placeholder="1-5"
                                            value={starCount}
                                            onChange={(e) => setStarCount(e.target.value)}
										/>
									</div>
									<div className="flex flex-col">
										<label className="text-gray-800" htmlFor="comments">
											Comment
										</label>
										<textarea
											className="text-gray-900 outline-none p-1 border border-gray-700"
											rows="2"
											name="comments"
											id="comments"
                                            value={comments}
                                            onChange={(e) => setComments(e.target.value)}
										></textarea>
									</div>
									<button className="bg-orange-500 text-white hover:bg-orange-400 px-2 py-2 rounded-md">
										Submit
									</button>
								</form>
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};

export default Reviews;
