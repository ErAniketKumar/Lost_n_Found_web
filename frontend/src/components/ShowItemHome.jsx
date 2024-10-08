import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-menubar";


const ShowItemHome = () => {
	
	return (
		<div className="max-w-screen-2xl container mx-auto md:px-20 bg-[#f5f5f5] px-6 pt-6 mt-20">
			<div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
				<div className="flex-col gap-4 border-2 p-2 overflow-hidden hidden md:flex">
					<div className="flex flex-col space-y-2 text-indigo-800">
						<h1 className="text-xl font-medium text-gray-600">
							Sort / Filter By Categories
						</h1>
						<hr />
						<label htmlFor="electronics" className="text-gray-600">
							Electronics:
						</label>
						<select
							name="electronicsCategory"
							id="electronics"
							className="outline-none p-2 border rounded-sm border-gray-700"
						>
							<option value="mobile">Mobile</option>
							<option value="laptop">Laptop</option>
							<option value="watch">Watch</option>
							<option value="headphones">Headphones/Earbuds</option>
							<option value="charger">Charger</option>
							<option value="cable">Data Cable</option>
						</select>

						<label htmlFor="fashion" className="text-gray-600">
							Fashion:
						</label>
						<select
							name="fashionCategory"
							id="fashion"
							className="outline-none p-2 border rounded-sm border-gray-700"
						>
							<option value="cloth">Clothing</option>
							<option value="footwear">Footwear</option>
							<option value="toy">Toy</option>
							<option value="eyeglass">Eyeglass</option>
							<option value="cap">Cap</option>
							<option value="belt">Belt</option>
							<option value="wallet">Wallet</option>
						</select>

						<label htmlFor="mixed" className="text-gray-600">
							Miscellaneous:
						</label>
						<select
							name="mixedCategory"
							id="mixed"
							className="outline-none p-2 border rounded-sm border-gray-700"
						>
							<option value="key">Key</option>
							<option value="bag">Bag</option>
							<option value="umbrella">Umbrella</option>
							<option value="idcard">ID Card</option>
							<option value="bottle">Bottle</option>
							<option value="books">Books/Pen/Copy</option>
						</select>
					</div>

					<div>
						<h1 className="text-xl font-medium text-gray-600">Filter by Date</h1>
						<hr />
						<div className="flex flex-wrap space-x-2">
							<input
								className="outline-none p-2 border rounded-sm border-gray-700"
								type="date"
							/>
							<span>to</span>
							<input
								className="outline-none p-2 border rounded-sm border-gray-700"
								type="date"
							/>
						</div>
					</div>

					<div>
						<h1 className="text-xl font-medium text-gray-600">Filter By Location</h1>
						<hr />
						<input
							className="outline-none p-2 border rounded-sm border-gray-700 w-full"
							type="text"
							placeholder="Enter location"
						/>
					</div>

					<div>
						<button className="px-2 py-2 rounded-md text-white hover:bg-pink-500 bg-[#ea0eac]">
							Apply Filters
						</button>
					</div>
				</div>

				<div className="grid sm:col-span-3">
					<div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
                        <div className=" card border border-slate-500 hover:border-[#ea0eac] shadow-md p-3 flex flex-col space-y-2 text-lg rounded-sm h-[20rem]">
                            <div className="overflow-hidden rounded-sm">
                                <img className="object-cover w-full h-full" src="/images/bgimg4.jpg" alt="" />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                               <h1> Samsumg phone</h1>
                               <p>Ramanujan Block 304</p>
                               <button className="p-2 bg-[#ea0eac] text-white hover:bg-pink-500 rounded-sm">Show more</button>
                            </div>
                        </div>

                        <div className=" card border border-slate-500 hover:border-[#ea0eac] shadow-md p-3 flex flex-col space-y-2 text-lg rounded-sm h-[20rem]">
                            <div className="overflow-hidden rounded-sm">
                                <img className="object-cover w-full h-full" src="/images/bgimg4.jpg" alt="" />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                               <h1> Samsumg phone</h1>
                               <p>Ramanujan Block 304</p>
                               <button className="p-2 bg-[#ea0eac] text-white hover:bg-pink-500 rounded-sm">Show more</button>
                            </div>
                        </div>

                        <div className=" card border border-slate-500 hover:border-[#ea0eac] shadow-md p-3 flex flex-col space-y-2 text-lg rounded-sm h-[20rem]">
                            <div className="overflow-hidden rounded-sm">
                                <img className="object-cover w-full h-full" src="/images/bgimg4.jpg" alt="" />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                               <h1> Samsumg phone</h1>
                               <p>Ramanujan Block 304</p>
                               <button className="p-2 bg-[#ea0eac] text-white hover:bg-pink-500 rounded-sm">Show more</button>
                            </div>
                        </div>
                        <div className=" card border border-slate-500 hover:border-[#ea0eac] shadow-md p-3 flex flex-col space-y-2 text-lg rounded-sm h-[20rem]">
                            <div className="overflow-hidden rounded-sm">
                                <img className="object-cover w-full h-full" src="/images/bgimg4.jpg" alt="" />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                               <h1> Samsumg phone</h1>
                               <p>Ramanujan Block 304</p>
                               <button className="p-2 bg-[#ea0eac] text-white hover:bg-pink-500 rounded-sm">Show more</button>
                            </div>
                        </div>
                        <div className=" card border border-slate-500 hover:border-[#ea0eac] shadow-md p-3 flex flex-col space-y-2 text-lg rounded-sm h-[20rem]">
                            <div className="overflow-hidden rounded-sm">
                                <img className="object-cover w-full h-full" src="/images/bgimg4.jpg" alt="" />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                               <h1> Samsumg phone</h1>
                               <p>Ramanujan Block 304</p>
                               <button className="p-2 bg-[#ea0eac] text-white hover:bg-pink-500 rounded-sm">Show more</button>
                            </div>
                        </div>
                        <div className=" card border border-slate-500 hover:border-[#ea0eac] shadow-md p-3 flex flex-col space-y-2 text-lg rounded-sm h-[20rem]">
                            <div className="overflow-hidden rounded-sm">
                                <img className="object-cover w-full h-full" src="/images/bgimg4.jpg" alt="" />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                               <h1> Samsumg phone</h1>
                               <p>Ramanujan Block 304</p>
                               <button className="p-2 bg-[#ea0eac] text-white hover:bg-pink-500 rounded-sm">Show more</button>
                            </div>
                        </div>

                        <div className=" card border border-slate-500 hover:border-[#ea0eac] shadow-md p-3 flex flex-col space-y-2 text-lg rounded-sm h-[20rem]">
                            <div className="overflow-hidden rounded-sm">
                                <img className="object-cover w-full h-full" src="/images/bgimg4.jpg" alt="" />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                               <h1> Samsumg phone</h1>
                               <p>Ramanujan Block 304</p>
                               <button className="p-2 bg-[#ea0eac] text-white hover:bg-pink-500 rounded-sm">Show more</button>
                            </div>
                        </div>

                        <div className=" card border border-slate-500 hover:border-[#ea0eac] shadow-md p-3 flex flex-col space-y-2 text-lg rounded-sm h-[20rem]">
                            <div className="overflow-hidden rounded-sm">
                                <img className="object-cover w-full h-full" src="/images/bgimg4.jpg" alt="" />
                            </div>
                            <div className="flex flex-col items-center gap-2">
                               <h1> Samsumg phone</h1>
                               <p>Ramanujan Block 304</p>
                               <button className="p-2 bg-[#ea0eac] text-white hover:bg-pink-500 rounded-sm">Show more</button>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShowItemHome;
