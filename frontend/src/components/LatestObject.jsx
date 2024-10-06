import React from "react";

import { Separator } from "@/components/ui/separator";

const LatestObject = () => {
	const itemsDetails = [
		{
			imageUrl: "/images/bgimg1.jpg",
			title: "Blue Umbrella",
			place: "Klam Block 012",
			time: "21/07/2024",
			lossfound: "Lost",
		},
		{
			imageUrl: "/images/bgimg3.jpg",
			title: "Hat",
			place: "CU Bridge",
			time: "21/07/2024",
			lossfound: "Found",
		},
		{
			imageUrl: "/images/bgimg2.jpg",
			title: "Blue Umbrella",
			place: "Klam Block 012",
			time: "21/07/2024",
			lossfound: "Lost",
		},
	];
	return (
		<div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-[#f5f5f5] p-6">
            <div className="flex justify-center text-4xl text-[#ea0eac] font-medium underline decoration-slice mb-4">RECENTLY ADDED</div>
			<div className="flex items-center bg-white flex-col rounded-lg">
				{itemsDetails &&
					itemsDetails.map((item, index) => (
						<div
							key={index}
							className="grid md:grid-cols-3 md:gap-6 gap-4 grid-cols-1 w-[70%] bg-[#f5f5f5] px-5 py-10"
						>
							<div>
								<img
									className="w-full object-cover rounded-lg"
									src={item.imageUrl}
									alt=""
								/>
							</div>
							<div className="grid col-span-2">
								<div className="flex">
									<div className="space-y-4">
										<h1 className="text-lg text-gray-600">
											<span className="font-bold text-xl">Title: </span>{" "}
											{item.title}
										</h1>
										<p className="text-lg text-gray-600">
											<span className="font-bold text-xl">Place: </span>{" "}
											{item.place}
										</p>
										<p className="text-lg text-gray-600">
											<span className="font-bold text-xl">Date-Time: </span>{" "}
											{item.time}
										</p>
									</div>
									<div className="ml-auto space-y-4">
										<h1 className="text-lg bg-gray-200 rounded px-16 py-4">
											{item.lossfound}
										</h1>
										<button className="text-lg text-nowrap border border-orange-500 hover:bg-purple-800 rounded px-16 py-4 hover:text-white">
											Show Details
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default LatestObject;
