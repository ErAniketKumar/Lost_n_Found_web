import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const GuidProcess = () => {
	return (
		<div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-[#f5f5f5] p-6">
			<div className="flex justify-center text-4xl text-[#ea0eac] font-medium underline decoration-slice mb-6">
				HOW TO USE
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4">
				{/* Card 1 */}
				<Card className="flex flex-col h-full p-5">
					<div className="w-[12rem] h-[12rem] rounded-full border-2 border-blue-500 flex mx-auto p-5 overflow-hidden">
						<img
							src="/instructionImg/reg.png"
							alt="Card image"
							className="object-cover w-full h-full"
						/>
					</div>
					<CardHeader>
						<CardTitle> Register Lost or Found Item!</CardTitle>
					</CardHeader>
					<CardContent className="flex-grow">
						Quickly register the item you’ve lost or found by selecting a
						category, adding a photo, and providing location details.
						<br />
						<span className="font-semibold">Note:</span> Please fill out all
						form inputs and upload clear images.
					</CardContent>
					<CardFooter className="mt-auto">
						<Link
							to="/login"
							className="bg-blue-500 text-white py-2 px-4 text-center rounded-lg w-full hover:bg-orange-500"
						>
							Register Now
						</Link>
					</CardFooter>
				</Card>

				{/* Card 2 */}
				<Card className="flex flex-col h-full p-5">
					<div className="w-[12rem] h-[12rem] rounded-full border-2 border-green-500 flex mx-auto p-5 overflow-hidden">
						<img
							src="/instructionImg/matchreg.png"
							alt="Card image"
							className="object-cover w-full h-full"
						/>
					</div>
					<CardHeader>
						<CardTitle>Search for Matching Items</CardTitle>
					</CardHeader>
					<CardContent className="flex-grow">
						Use filters to search items by category or sort by date to match
						your lost or found object. Our system scans the database to match
						your description with existing entries, helping you locate your
						item.
					</CardContent>
					<CardFooter className="mt-auto">
						<Link
							to="/showitems"
							className="bg-green-500 text-center text-white py-2 px-4 rounded-lg w-full hover:bg-zinc-600"
						>
							Search Now
						</Link>
					</CardFooter>
				</Card>

				{/* Card 3 */}
				<Card className="flex flex-col h-full p-5">
					<div className="w-[12rem] h-[12rem] rounded-full border-2 border-yellow-500 flex mx-auto p-5 overflow-hidden">
						<img
							src="/instructionImg/conversation.png"
							alt="Card image"
							className="object-cover w-full h-full"
						/>
					</div>
					<CardHeader>
						<CardTitle>Stay Notified If Items Match</CardTitle>
					</CardHeader>
					<CardContent className="flex-grow">
						Enable notifications and get instantly notified when new items
						matching your request are added.
						<br />
						Close your case and provide valuable feedback when found.
					</CardContent>
					<CardFooter className="mt-auto">
						<button className="bg-yellow-500 text-white py-2 px-4 rounded-lg w-full hover:bg-pink-600">
							Enable Alerts
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default GuidProcess;
