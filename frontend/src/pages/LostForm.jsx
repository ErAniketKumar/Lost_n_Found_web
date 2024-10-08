import Footer from "@/components/Footer";
import React from "react";

const LostForm = () => {
	return (
		<div className="max-w-screen-2xl container mx-auto md:px-20 bg-[#f5f5f5] px-6 pt-6  mt-20">
			<h1 className="text-2xl text-[#ea0eac] font-medium p-2 flex justify-center">Lost Item information</h1>
			<div className="flex justify-center border-2 p-2">
				<form
					className="flex flex-col space-y-4"
					action="/additem"
					method="post"
				>
					<div className="flex flex-col">
						<label htmlFor="title">
							Please enter the type of item(s) you lost.
						</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="title"
							id="title"
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="category">Category</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="category"
							id="category"
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="address">
							Address/Where was your item last seen?
						</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="address"
							id="address"
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="datetime">Date and time</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="datetime"
							id="datetime"
							placeholder="This fotmat only* 25/10/2024 10:08AM"
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="image">Upload Image</label>
						<input className="p-2" type="file" name="image" id="image" />
					</div>

					<div className="flex flex-col">
						<label htmlFor="currentaddress">
							Current Address? *If your current location more them 20km to
							item's missing place{" "}
						</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="currentaddress"
							id="currentaddress"
							placeholder="Address"
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="description">Short Description</label>
						<textarea
							className="border border-gray-900 p-2"
							name="description"
							rows="4"
							id="description"
						></textarea>
					</div>

					<button className="bg-[#ea0eac] text-white hover:bg-pink-500 rounded-md px-2 py-2">
						Submit
					</button>
				</form>
			</div>

			<Footer></Footer>
		</div>
	);
};

export default LostForm;
