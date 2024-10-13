import React, { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const SingleItemDetails = () => {
	const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;

	const [itemData, setItemData] = useState(null);

	const { id } = useParams();
	const fetchSingleItemData = async (singleItemApi) => {
		const response = await fetch(singleItemApi, {
			method: "GET",
		});
		const data = await response.json();
		if (!response.ok) {
			toast.error(data.message);
		} else {
			toast.success(data.message);
			setItemData(data);
		}
	};

	useEffect(() => {
		fetchSingleItemData(`${VITE_API_URL}/item/${id}`);
	}, []);

	return (
		<div className="max-w-screen-2xl container mx-auto px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] pt-6 mt-20">
			<ToastContainer />
			{itemData ? (
				<div className="flex flex-col md:flex-row md:space-x-8">
					<div key={id} className="w-full md:w-1/2 lg:w-[40rem] mb-6 md:mb-0">
						<img
							src={`${VITE_API_URL}/Images/${itemData.imageUrl}`}
							alt="image"
							className="w-full max-h-[30rem] object-cover rounded-lg"
						/>
					</div>

					<div key={itemData.title} className="w-full md:w-1/2">
						<div>
							<h1 className="text-xl sm:text-3xl mb-4 bg-gray-200 text-center text-gray-600">
								{itemData.itemType}
							</h1>
							<h1 className="text-2xl sm:text-3xl font-medium mb-4 text-orange-500">
								Title : {itemData.title}
							</h1>
							<p className="text-xl sm:text-2xl font-medium text-indigo-700 mb-2">
								Description :
								<span className="text-base sm:text-lg text-gray-800">
									{itemData.description}
								</span>
							</p>
							<p className="text-xl sm:text-2xl font-medium text-indigo-700 mb-2">
								Location :
								<span className="text-base sm:text-lg text-gray-800">
									{itemData.itemLocation}
								</span>
							</p>
							<p className="text-xl sm:text-2xl font-medium text-indigo-700 mb-2">
								Date and time :
								<span className="text-base sm:text-lg text-gray-800">
									{itemData.dateTime}
								</span>
							</p>
						</div>
						<div className="flex gap-4">
							<div>
								<Link
									to="/showitems"
									className="flex bg-orange-500 rounded-md p-2 text-white font-medium hover:bg-orange-400"
								>
									<MdArrowBackIos className="mt-1 block" />
									<span>Go back</span>
								</Link>
							</div>

							<Accordion type="single" collapsible className="flex">
								<AccordionItem value="item-1">
									<AccordionTrigger className="flex rounded-md p-2 space-x-1 bg-teal-600 hover:bg-teal-500 text-white">
										<IoIosCall />
										<span>Contact</span>
									</AccordionTrigger>
									<AccordionContent>
										<div className="flex flex-col items-center">
											<p className="text-lg text-gray-800 bg-gray-300 rounded-md">
												{itemData.contactNo}
											</p>
										</div>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default SingleItemDetails;
