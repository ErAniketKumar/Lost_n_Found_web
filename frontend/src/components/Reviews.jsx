import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

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

	const [name, setName] = useState("");
	const [starCount, setStarCount] = useState("");
	const [comments, setComments] = useState("");
	const [reviewsData, setReviewsData] = useState([]);

	const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;
	const navigate = useNavigate();
	const handleReviewFormSubmit = async (e) => {
		e.preventDefault();
		const reviewData = {
			name,
			starCount: Number(starCount), // Convert starCount to a number
			comments,
		};
		const response = await fetch(`${VITE_API_URL}/review`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reviewData),
		});
		if (response.ok) {
			alert("Review submitted successfully!");
			setName("");
			setStarCount("");
			setComments("");
			navigate("/");
		} else {
			alert("Failed to submit review");
		}
	};

	const fetchReviews = async (ReviewApiUrl) => {
		try {
			const response = await fetch(ReviewApiUrl, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (!response.ok) {
				throw new Error("Failed to fetch reviews");
			} else {
				const data = await response.json();
				setReviewsData(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchReviews(`${VITE_API_URL}/review`);
	}, []);

	return (
		<div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-[#f5f5f5] p-6">
			<h1 className="text-3xl flex justify-center my-3 font-bold text-gray-700">
				Meet the people we have{" "}
				<span className="text-[#ea0eac] ml-2"> helped!</span>
			</h1>
			<Slider {...settings}>
				{reviewsData &&
					reviewsData.map((review, index) => (
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
									<p>{"⭐".repeat(review.starCount)}</p>
									<p className="text-gray-700 flex flex-wrap w-[15rem]">
										{review.comments}
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
							<form
								className="flex flex-col gap-2"
								action="/review"
								method="post"
								onSubmit={handleReviewFormSubmit}
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
									<label className="text-gray-800" htmlFor="starCount">
										No of Star
									</label>
									<input
										className="text-gray-900 outline-none p-1 border border-gray-700"
										type="number"
										id="starCount"
										name="starCount"
										placeholder="1-5"
										value={starCount}
										onChange={(e) => setStarCount(e.target.value)}
										min="1"
										max="5"
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
							<DialogDescription></DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};

export default Reviews;
