import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const LatestObject = () => {
  // const VITE_API_URL ="http://localhost:5000/api/" || import.meta.env.VITE_AUTH_API_URL;
	const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;
  const [latestData, setLatestData] = useState([]);

  const fetchLatestData = async (latestDataApi) => {
    const response = await fetch(latestDataApi, { method: "GET" });
    const data = await response.json();
    if (!response.ok) {
      toast.error(data.message, { theme: "colored" });
    } else {
      setLatestData(data);
      toast.success(data.message, { theme: "colored" });
    }
  };

  useEffect(() => {
    fetchLatestData(`${VITE_API_URL}/lastfiveitems`);
  }, []);

  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-12 bg-[#f5f5f5]">
      <ToastContainer />
      <h2 className="text-4xl text-[#ea0eac] font-bold text-center underline decoration-[#ff6200] mb-10">
        Recently Added
      </h2>
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
        {latestData &&
          latestData.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-3 gap-6 w-full md:w-3/4 bg-[#f5f5f5] rounded-lg p-6 mb-6"
            >
              <div className="flex justify-center">
                <img
                  className="w-full max-h-48 object-cover rounded-lg"
                  src={`${VITE_API_URL}/Images/${item.imageUrl}`}
                  alt={item.title}
                />
              </div>
              <div className="col-span-2 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#1f2937]">
                    <span className="font-bold">Title:</span> {item.title}
                  </h3>
                  <p className="text-base text-[#1f2937]">
                    <span className="font-bold">Location:</span> {item.itemLocation}
                  </p>
                  <p className="text-base text-[#1f2937]">
                    <span className="font-bold">Date-Time:</span> {item.dateTime}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-base bg-gray-200 rounded px-4 py-2">
                    {item.itemType}
                  </span>
                  <Link to={`/item/${item._id}`}>
                    <button className="text-base border border-[#ff6200] text-[#ff6200] hover:bg-[#ff6200] hover:text-white rounded px-6 py-2 transition-colors">
                      Show Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default LatestObject;