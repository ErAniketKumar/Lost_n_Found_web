import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LostForm = () => {
	// const VITE_API_URL ="http://localhost:5000/api/" || import.meta.env.VITE_AUTH_API_URL;
	const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [itemLocation, setItemLocation] = useState("");
	const [dateTime, setDateTime] = useState("");
	const [imageFile, setImageFile] = useState(null);
	const [imagePreview, setImagePreview] = useState(null); // For image preview
	const [currentAddress, setCurrentAddress] = useState("");
	const [description, setDescription] = useState("");
	const [contactNo, setContactNo] = useState("");
	const navigate = useNavigate();

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setImageFile(file);
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => setImagePreview(reader.result);
			reader.readAsDataURL(file);
		} else {
			setImagePreview(null);
		}
	};

	const handleLostItemForm = async (e) => {
		e.preventDefault();
		const lostFormData = new FormData();
		lostFormData.append("itemType", "Lost");
		lostFormData.append("title", title);
		lostFormData.append("category", category);
		lostFormData.append("itemLocation", itemLocation);
		lostFormData.append("dateTime", dateTime);
		if (imageFile) lostFormData.append("image", imageFile);
		lostFormData.append("currentAddress", currentAddress);
		lostFormData.append("description", description);
		lostFormData.append("contactNo", contactNo);

		try {
			const response = await fetch(`${VITE_API_URL}/additem`, {
				method: "POST",
				body: lostFormData,
				credentials: "include",
			});
			const data = await response.json();
			if (!response.ok) {
				toast.error(data.message, { theme: "colored" });
			} else {
				toast.success(data.message, { theme: "colored" });
				navigate("/showitems");
			}
		} catch (error) {
			toast.error("An error occurred. Please try again.", { theme: "colored" });
		}
	};

	return (
		<section className="max-w-screen-2xl mx-auto px-6 py-12 bg-[#f5f5f5] min-h-screen mt-10">
			<ToastContainer />
			<div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
				<h1 className="text-3xl font-bold text-center text-[#ea0eac] mb-6">
					Report a Lost Item
				</h1>
				<form
					className="flex flex-col gap-6"
					onSubmit={handleLostItemForm}
					encType="multipart/form-data"
				>
					<div className="flex flex-col">
						<label
							htmlFor="title"
							className="text-lg font-medium text-[#1f2937]"
						>
							Title of Lost Item
						</label>
						<input
							className="mt-1 border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
							type="text"
							name="title"
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="e.g., Blue Wallet"
							required
						/>
					</div>

					<div className="flex flex-col">
						<label
							htmlFor="category"
							className="text-lg font-medium text-[#1f2937]"
						>
							Category
						</label>
						<input
							className="mt-1 border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
							type="text"
							name="category"
							id="category"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							placeholder="e.g., Personal Belongings"
							required
						/>
					</div>

					<div className="flex flex-col">
						<label
							htmlFor="itemLocation"
							className="text-lg font-medium text-[#1f2937]"
						>
							Where Was It Last Seen?
						</label>
						<input
							className="mt-1 border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
							type="text"
							name="itemLocation"
							id="itemLocation"
							value={itemLocation}
							onChange={(e) => setItemLocation(e.target.value)}
							placeholder="e.g., Central Park, NYC"
							required
						/>
					</div>

					<div className="flex flex-col">
						<label
							htmlFor="dateTime"
							className="text-lg font-medium text-[#1f2937]"
						>
							Date and Time
						</label>
						<input
							className="mt-1 border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
							type="text"
							name="dateTime"
							id="dateTime"
							value={dateTime}
							onChange={(e) => setDateTime(e.target.value)}
							placeholder="e.g., 25/10/2024 10:08AM"
							required
						/>
					</div>

					<div className="flex flex-col">
						<label
							htmlFor="image"
							className="text-lg font-medium text-[#1f2937]"
						>
							Upload Image
						</label>
						<input
							className="mt-1 border border-gray-300 rounded-md p-3 text-base"
							accept="image/*"
							type="file"
							name="image"
							id="image"
							onChange={handleImageChange}
						/>
						{imagePreview && (
							<img
								src={imagePreview}
								alt="Preview"
								className="mt-4 w-full max-h-48 object-contain rounded-md"
							/>
						)}
					</div>

					<div className="flex flex-col">
						<label
							htmlFor="currentAddress"
							className="text-lg font-medium text-[#1f2937]"
						>
							Current Address (if {'>'}20km from item location)
						</label>
						<input
							className="mt-1 border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
							type="text"
							name="currentAddress"
							id="currentAddress"
							value={currentAddress}
							onChange={(e) => setCurrentAddress(e.target.value)}
							placeholder="e.g., 123 Main St, City"
						/>
					</div>

					<div className="flex flex-col">
						<label
							htmlFor="contactNo"
							className="text-lg font-medium text-[#1f2937]"
						>
							Contact Number (Optional)
						</label>
						<input
							className="mt-1 border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
							type="text"
							name="contactNo"
							id="contactNo"
							value={contactNo}
							onChange={(e) => setContactNo(e.target.value)}
							placeholder="e.g., +1234567890"
						/>
					</div>

					<div className="w-full flex flex-col">
						<label
							htmlFor="description"
							className="text-lg font-medium text-[#1f2937]"
						>
							Short Description
						</label>
						<textarea
							className="mt-1 border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
							name="description"
							rows="4"
							id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="e.g., Blue leather wallet with ID cards"
						/>
					</div>

					<button
						type="submit"
						className="bg-[#ff6200] text-white py-3 rounded-lg hover:bg-[#ea0eac] transition-colors text-lg font-semibold"
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default LostForm;
