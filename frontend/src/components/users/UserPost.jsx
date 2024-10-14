import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UserPost = () => {
	const { id } = useParams();
	const [userPostData, setUserPostData] = useState([]);
	const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;

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

	useEffect(() => {
		userCreatedDatafetch(`${VITE_API_URL}/userPostDetails/${id}`);
	}, []);
	return (
		<div className="max-w-screen-2xl container mx-auto md:px-20 bg-[#f5f5f5] px-6 pt-6 mt-20">
			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
				{userPostData &&
					userPostData.map((item) => (
						<div
							key={item._id}
							className="card border border-slate-500 hover:border-2 hover:border-[#ea0eac] shadow-md p-3 flex flex-col space-y-2 text-lg rounded-sm h-[20rem] transition-all duration-300"
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
										<button className="p-2 bg-[#ea0eac] text-white hover:bg-pink-500 rounded-sm">
											Delete
										</button>
									</Link>
									<Link>
										<button className="p-2 bg-[#ea0eac] text-white hover:bg-pink-500 rounded-sm">
											Update
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
