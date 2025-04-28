import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
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
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-[#ff6200] rounded-full"></div>
    ),
  };

  const [name, setName] = useState("");
  const [starCount, setStarCount] = useState("");
  const [comments, setComments] = useState("");
  const [reviewsData, setReviewsData] = useState([]);
  // const VITE_API_URL ="http://localhost:5000/api/" || import.meta.env.VITE_AUTH_API_URL;
	const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;
  const navigate = useNavigate();

  const handleReviewFormSubmit = async (e) => {
    e.preventDefault();
    const reviewData = { name, starCount: Number(starCount), comments };
    const response = await fetch(`${VITE_API_URL}/review`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
      const response = await fetch(ReviewApiUrl, { method: "GET", headers: { "Content-Type": "application/json" } });
      if (!response.ok) throw new Error("Failed to fetch reviews");
      const data = await response.json();
      setReviewsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews(`${VITE_API_URL}/review`);
  }, []);

  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-12 bg-[#f5f5f5]">
      <h2 className="text-4xl font-bold text-center text-[#ea0eac] mb-10">
        Meet the People We Have <span className="text-[#ff6200]">Helped!</span>
      </h2>
      <Slider {...settings}>
        {reviewsData &&
          reviewsData.map((review, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 h-64">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#ea0eac] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{review.initial}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1f2937]">{review.name}</h3>
                    <p className="text-[#facc15]">{"⭐".repeat(review.starCount)}</p>
                    <p className="text-base text-[#1f2937] line-clamp-3">{review.comments}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
      <div className="flex justify-center mt-10">
        <Dialog>
          <DialogTrigger className="text-lg font-semibold bg-[#ff6200] text-white px-6 py-3 rounded-lg hover:bg-[#ea0eac] transition-colors">
            Give Your Review
          </DialogTrigger>
          <DialogContent className="bg-white rounded-lg p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl text-[#1f2937]">Share Your Feedback</DialogTitle>
              <form className="flex flex-col gap-4" onSubmit={handleReviewFormSubmit}>
                <div className="flex flex-col">
                  <label className="text-base text-[#1f2937]" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="border border-gray-300 rounded-md p-2 text-base"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-base text-[#1f2937]" htmlFor="starCount">
                    Number of Stars (1-5)
                  </label>
                  <input
                    className="border border-gray-300 rounded-md p-2 text-base"
                    type="number"
                    id="starCount"
                    placeholder="1-5"
                    value={starCount}
                    onChange={(e) => setStarCount(e.target.value)}
                    min="1"
                    max="5"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-base text-[#1f2937]" htmlFor="comments">
                    Comment
                  </label>
                  <textarea
                    className="border border-gray-300 rounded-md p-2 text-base"
                    rows="3"
                    id="comments"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  ></textarea>
                </div>
                <button className="bg-[#ff6200] text-white py-3 rounded-lg hover:bg-[#ea0eac] transition-colors">
                  Submit
                </button>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Reviews;