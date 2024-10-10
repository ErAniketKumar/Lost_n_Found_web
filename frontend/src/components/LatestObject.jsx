import React, { useEffect, useState } from "react";

import { Separator } from "@/components/ui/separator";
import { ToastContainer, toast } from "react-toastify";
const LatestObject = () => {
	const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;

	const [latestData, setLatestData] = useState([]);

	const fetchLatestData = async (latestDataAPi) => {
		const response = await fetch(latestDataAPi, {
			method: "GET",
		});
		const data = await response.json();
		if (!response.ok) {
			toast.error(data.message);
		} else {
			setLatestData(data);
			toast.success(data.message);
		}
	};

	useEffect(() => {
		fetchLatestData(`${VITE_API_URL}/lastfiveitems`);
	}, []);

	return (
		<div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-[#f5f5f5] p-6">
			<div className="flex justify-center text-4xl text-[#ea0eac] font-medium underline decoration-slice mb-4">
				RECENTLY ADDED
			</div>
			<div className="flex items-center bg-white flex-col rounded-lg">
				{latestData &&
					latestData.map((item, index) => (
						<div
							key={index}
							className="grid md:grid-cols-3 md:gap-6 gap-4 grid-cols-1 w-[70%] bg-[#f5f5f5] px-5 py-10"
						>
							<div>
								<img
									className="w-full object-cover rounded-lg"
									src={`${VITE_API_URL}/Images/${item.imageUrl}`}
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
											<span className="font-bold text-xl">Location: </span>{" "}
											{item.itemLocation}
										</p>
										<p className="text-lg text-gray-600">
											<span className="font-bold text-xl">Date-Time: </span>{" "}
											{item.dateTime}
										</p>
									</div>
									<div className="ml-auto space-y-4">
										<h1 className="text-lg bg-gray-200 rounded px-16 py-4">
											{item.itemType}
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
