import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import PaginationSection from "@/components/PaginationSection";

const ShowItemHome = () => {
 // const VITE_API_URL ="http://localhost:5000/api/" || import.meta.env.VITE_AUTH_API_URL;
 const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;

  const [itemsData, setItemsData] = useState([]);

  const getAllItems = async (itemShowApiUrl) => {
    try {
      const response = await fetch(itemShowApiUrl, {
        method: "GET",
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.error);
      } else {
        setItemsData(data);
        toast.success(data.message);
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getAllItems(`${VITE_API_URL}/allitem`);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const npage = Math.ceil(itemsData.length / recordsPerPage);
  const records = itemsData.slice(firstIndex, lastIndex);

  const [category, setCategory] = useState("");
  const [itemLocation, setItemLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    const filteredQuery = {
      category,
      startDate,
      endDate,
      itemLocation,
    };

    try {
      const response = await fetch(`${VITE_API_URL}/filteritem`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredQuery),
      });

      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message);
      } else {
        setItemsData(data);
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(data.message);
      console.error("Something went wrong:", error);
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-6 pt-6 mt-20 bg-lightGray min-h-screen">
      <ToastContainer />
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
        {/* Filter Section */}
        <form
          action="/filteritem"
          method="post"
          onSubmit={handleFilterSubmit}
          className="md:sticky md:top-20"
        >
          <div className="flex flex-col gap-6 border-2 border-navy p-4 rounded-lg bg-white shadow-lg hidden md:flex">
            <div className="flex flex-col space-y-2">
              <h1 className="text-xl font-semibold text-navy">
                Sort / Filter By Categories
              </h1>
              <hr className="border-teal" />
              <label htmlFor="category" className="text-gray-600 font-medium">
                Choose category
              </label>
              <select
                name="category"
                id="category"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-teal transition-colors duration-300"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="noselect">Not Selected</option>
                <option value="electronic">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="miscellaneous">Miscellaneous</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <h1 className="text-xl font-semibold text-navy">Filter by Date</h1>
              <hr className="border-teal" />
              <div className="flex flex-wrap gap-2 items-center">
                <input
                  className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-teal transition-colors duration-300"
                  name="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <span className="text-gray-600">to</span>
                <input
                  name="endDate"
                  className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-teal transition-colors duration-300"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <h1 className="text-xl font-semibold text-navy">Filter By Location</h1>
              <hr className="border-teal" />
              <input
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-teal transition-colors duration-300 w-full"
                type="text"
                name="itemLocation"
                placeholder="Enter location"
                value={itemLocation}
                onChange={(e) => setItemLocation(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-teal text-white rounded-md hover:bg-navy transition-colors duration-300 font-medium"
            >
              Apply Filters
            </button>
          </div>
        </form>

        {/* Items Section */}
        <div className="sm:col-span-3">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4">
            {records.map((item) => (
              <div
                key={item._id}
                className="card bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl p-4 flex flex-col space-y-3 text-lg transition-all duration-300 hover:border-teal"
              >
                <div className="overflow-hidden rounded-md h-40">
                  <img
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    src={`${VITE_API_URL}/Images/${item.imageUrl}`}
                    alt={item.title}
                  />
                </div>
                <div className="flex flex-col items-center gap-3 text-center">
                  <h1 className="text-sm font-semibold text-gray-600 bg-teal/10 border border-teal rounded-md px-2 py-1 hover:bg-teal hover:text-white transition-colors duration-300">
                    {item.itemType}
                  </h1>
                  <h1 className="text-lg font-medium text-navy">{item.title}</h1>
                  <p className="text-sm text-gray-500">{item.itemLocation}</p>
                  <Link to={`/item/${item._id}`}>
                    <button className="px-4 py-2 bg-teal text-white rounded-md hover:bg-navy transition-colors duration-300 font-medium">
                      Show More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <PaginationSection
            npage={npage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowItemHome;