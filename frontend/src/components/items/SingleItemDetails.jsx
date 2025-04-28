import React, { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SingleItemDetails = () => {
  // const VITE_API_URL ="http://localhost:5000/api/" || import.meta.env.VITE_AUTH_API_URL;
	const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;

  const [itemData, setItemData] = useState(null);
  const { id } = useParams();

  const fetchSingleItemData = async (singleItemApi) => {
    const response = await fetch(singleItemApi, {
      method: "GET",
    });
    const data = await response.json();
    if (!response.ok) {
      toast.error(data.message);
    } else {
      toast.success(data.message);
      setItemData(data);
    }
  };

  useEffect(() => {
    fetchSingleItemData(`${VITE_API_URL}/item/${id}`);
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 sm:px-6 lg:px-8 bg-lightGray pt-6 mt-20 min-h-screen">
      <ToastContainer />
      {itemData ? (
        <div className="flex flex-col md:flex-row md:space-x-8 bg-white rounded-lg shadow-lg p-6">
          <div className="w-full md:w-1/2 lg:w-[40rem] mb-6 md:mb-0">
            <img
              src={`${VITE_API_URL}/Images/${itemData.imageUrl}`}
              alt={itemData.title}
              className="w-full max-h-[30rem] object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <h1 className="text-xl sm:text-2xl font-semibold text-navy bg-teal/10 text-center py-2 rounded-md">
              {itemData.itemType}
            </h1>
            <h1 className="text-2xl sm:text-3xl font-bold text-navy">
              {itemData.title}
            </h1>
            <div className="space-y-3">
              <p className="text-lg font-medium text-navy">
                Description:
                <span className="text-base text-gray-600 block">
                  {itemData.description}
                </span>
              </p>
              <p className="text-lg font-medium text-navy">
                Location:
                <span className="text-base text-gray-600 block">
                  {itemData.itemLocation}
                </span>
              </p>
              <p className="text-lg font-medium text-navy">
                Date and Time:
                <span className="text-base text-gray-600 block">
                  {itemData.dateTime}
                </span>
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Link
                to="/showitems"
                className="flex items-center bg-navy text-white rounded-md px-4 py-2 font-medium hover:bg-teal transition-colors duration-Apartments for rent in London, Ontario300"
                aria-label="Go back to items list"
              >
                <MdArrowBackIos className="mr-1" />
                <span>Go Back</span>
              </Link>

              <Accordion type="single" collapsible className="flex">
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    className="flex items-center rounded-md px-4 py-2 bg-teal text-white hover:bg-navy transition-colors duration-300"
                    aria-label="Show contact information"
                  >
                    <IoIosCall className="mr-2" />
                    <span>Contact</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col items-center">
                      <p className="text-lg text-gray-800 bg-gray-100 rounded-md px-4 py-2">
                        {itemData.contactNo}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">Loading...</p>
      )}
    </div>
  );
};

export default SingleItemDetails;