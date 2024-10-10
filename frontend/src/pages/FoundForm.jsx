import React, { useState } from "react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const FoundForm = () => {
	const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [itemLocation, setItemLocation] = useState("");
	const [datetime, setDatetime] = useState("");
	const [imageFile, setImageFile] = useState(null);
	const [currentaddress, setCurrentaddress] = useState("");
	const [description, setDescription] = useState("");
	const [contactNo, setContactNo] = useState("");
	const navigate = useNavigate();
	const handleFoundFormSubmit = async (e) => {
		e.preventDefault();
		const foundFormData = new FormData(); // Changed to use FormData for file upload
		foundFormData.append("itemType", "Found");
		foundFormData.append("title", title);
		foundFormData.append("category", category);
		foundFormData.append("itemLocation", itemLocation);
		foundFormData.append("datetime", datetime);
		foundFormData.append("image", imageFile); // Added image file to FormData
		foundFormData.append("currentaddress", currentaddress);
		foundFormData.append("description", description);
		foundFormData.append("contactNo", contactNo);
		const response = await fetch(`${VITE_API_URL}/additem`, {
			method: "POST",
			body: foundFormData,
		});
		const data = await response.json();
		if (!response.ok) {
			toast.error(data.message);
		} else {
			toast.success(data.message);
			navigate("/showitems");
		}
	};

	return (
		<div className="max-w-screen-2xl container mx-auto md:px-20 bg-[#f5f5f5] px-6 pt-6  mt-20">
			<ToastContainer />
			<h1 className="text-2xl text-[#ea0eac] font-medium p-2 flex justify-center">
				Found Item information
			</h1>
			<div className="flex justify-center border-2 p-2">
				<form
					className="flex flex-col space-y-4"
					action="/additem"
					method="post"
					encType="multipart/form-data"
					onSubmit={handleFoundFormSubmit}
				>
					<div className="flex flex-col">
						<label htmlFor="title">
							Please enter the type of item(s) you found.
						</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="title"
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="category">Category</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="category"
							id="category"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="itemLocation">
							Address/Where was you found items?
						</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="itemLocation"
							id="itemLocation"
							value={itemLocation}
							onChange={(e) => setItemLocation(e.target.value)}
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
							value={datetime}
							onChange={(e) => setDatetime(e.target.value)}
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="image">Upload Image</label>
						<input
							className="p-2"
							accept="image/*"
							type="file"
							name="image"
							id="image"
							onChange={(e) => setImageFile(e.target.files[0])} 
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="currentaddress">
							Current Address? *If your current location more them 20km to
							item's found place{" "}
						</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="currentaddress"
							id="currentaddress"
							placeholder="Address"
							value={currentaddress}
							onChange={(e) => setCurrentaddress(e.target.value)}
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="contactNo">
							Contact Number *If you want to provide
						</label>
						<input
							className="border border-gray-900 p-2"
							type="text"
							name="contactNo"
							id="contactNo"
							placeholder="Phone number"
							value={contactNo}
							onChange={(e) => setContactNo(e.target.value)}
						/>
					</div>

					<div className="flex flex-col">
						<label htmlFor="description">Short Description</label>
						<textarea
							className="border border-gray-900 p-2"
							name="description"
							rows="4"
							id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
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

export default FoundForm;
