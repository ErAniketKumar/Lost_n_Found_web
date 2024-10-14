import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateItemForm = () => {
    const { id } = useParams();
    const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [itemLocation, setItemLocation] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [currentAddress, setCurrentAddress] = useState("");
    const [description, setDescription] = useState("");
    const [contactNo, setContactNo] = useState("");
    const navigate = useNavigate();

    const getItemDetails = async (itemFetchDataApiUrl) => {
        try {
            const response = await fetch(itemFetchDataApiUrl, {
                method: "GET",
                credentials: "include",
            });
            const data = await response.json();
            if (response.ok) {
                setTitle(data.title);
                setCategory(data.category);
                setDateTime(data.dateTime);
                setCurrentAddress(data.currentAddress);
                setDescription(data.description);
                setContactNo(data.contactNo);
                setItemLocation(data.itemLocation);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdateFormSubmit = async (e) => {
        e.preventDefault();

        // Create a new FormData object
        const updateFormData = new FormData();
        // Append existing or new values to the FormData
        updateFormData.append("title", title || oldTitle);
        updateFormData.append("category", category || oldCategory);
        updateFormData.append("itemLocation", itemLocation || oldItemLocation);
        updateFormData.append("dateTime", dateTime);
        updateFormData.append("currentAddress", currentAddress);
        updateFormData.append("description", description);
        updateFormData.append("contactNo", contactNo);

        const response = await fetch(`${VITE_API_URL}/item/${id}`, {
            method: "PUT",
            body: updateFormData,
            credentials: "include",
        });
        
        const data = await response.json();
        if (!response.ok) {
            toast.error(data.message);
        } else {
            toast.success(data.message);
        }
    };

    useEffect(() => {
        getItemDetails(`${VITE_API_URL}/item/${id}`);
    }, [id]);

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 bg-[#f5f5f5] px-6 pt-6 mt-20">
            <ToastContainer />
            <h1 className="text-2xl text-[#ea0eac] font-medium p-2 flex justify-center">
                Found/Lost Item Information
            </h1>
            <div className="flex justify-center border-2 p-2">
                <form
                    className="flex flex-col space-y-4"
                    onSubmit={handleUpdateFormSubmit}
                >
                    <div className="flex flex-col">
                        <label htmlFor="title">Please enter the title of item(s) you found/lost.</label>
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
                        <label htmlFor="itemLocation">Location/Where was the item found/lost?</label>
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
                        <label htmlFor="dateTime">Date and time</label>
                        <input
                            className="border border-gray-900 p-2"
                            type="text"
                            name="dateTime"
                            id="dateTime"
                            placeholder="This format only* 25/10/2024 10:08AM"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="currentAddress">Current Address (if your location is more than 20 km from the item's found/lost place)</label>
                        <input
                            className="border border-gray-900 p-2"
                            type="text"
                            name="currentAddress"
                            id="currentAddress"
                            placeholder="Enter your current address"
                            value={currentAddress}
                            onChange={(e) => setCurrentAddress(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="contactNo">Contact Number *If you want to provide</label>
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
        </div>
    );
};

export default UpdateItemForm;
