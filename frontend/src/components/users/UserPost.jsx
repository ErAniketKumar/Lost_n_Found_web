import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserPost = () => {
	const { id } = useParams();
	const [userPostData, setUserPostData] = useState([]);
	// const VITE_API_URL ="http://localhost:5000/api/" || import.meta.env.VITE_AUTH_API_URL;
	const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;
	const navigate = useNavigate();

	const userCreatedDatafetch = async (userCreatedDataFetchApi) => {
		const response = await fetch(userCreatedDataFetchApi, {
			method: "GET",
			credentials: "include",
		});
		const data = await response.json();
		if (!response.ok) {
			console.log("response is not ok at user post");
		} else {
			setUserPostData(data);
			console.log("data at user post", data);
		}
	};

	//delete items
	const handleDeleteItems = async (id) => {
		if (confirm("Are you sure you want to delete this post?")) {
			try {
				const response = await fetch(`${VITE_API_URL}/item/${id}`, {
					method: "DELETE",
					credentials: "include",
				});
				const data = await response.json();
				if (response.ok) {
					await toast.success(data.message);
					window.location.reload();
				} else {
					toast.error(data.message);
				}
			} catch (error) {
				toast.error(error.message);
				console.log(error.message);
			}
		} else {
			console.log("User chose Cancel.");
		}
	};

	useEffect(() => {
		userCreatedDatafetch(`${VITE_API_URL}/userPostDetails/${id}`);
	}, []);
	return (
		<div className="max-w-screen-2xl container mx-auto md:px-20 bg-[#f5f5f5] px-6 pt-6 mt-20">
			<ToastContainer />
			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
				{userPostData &&
					userPostData.map((item) => (
						<div
							key={item._id}
							className="card border border-[#ea0eac] hover:border-2 hover:border-teal-600 shadow-md p-3 flex flex-col space-y-2 text-lg rounded-sm h-[20rem] transition-all duration-300"
						>
							<div className="overflow-hidden rounded-sm">
								<img
									className="object-cover w-full h-full"
									src={`${VITE_API_URL}/Images/${item.imageUrl}`}
									alt="item image"
								/>
							</div>
							<div className="flex flex-col items-center gap-2">
								<h1 className=" text-gray-500 text-sm font-semibold border border-teal-800 rounded-md px-2 hover:bg-teal-800 hover:text-white">
									{item.itemType}
								</h1>
								<h1>{item.title}</h1>
								<p>{item.itemLocation}</p>
								<div className="btn flex gap-4">
									<Link>
										<button
											className="p-2 bg-red-500 text-white hover:bg-red-400 rounded-sm"
											onClick={() => handleDeleteItems(item._id)}
										>
											Delete
										</button>
									</Link>
									<Link to={`/updateItem/${item._id}`}>
										<button className="p-2 bg-teal-600 text-white hover:bg-teal-500 rounded-sm">
											Edit
										</button>
									</Link>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default UserPost;
