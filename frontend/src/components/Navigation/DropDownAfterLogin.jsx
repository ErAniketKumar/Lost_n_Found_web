import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiUser, FiList, FiLogOut } from "react-icons/fi";
import { MdOutlinePostAdd } from "react-icons/md";

const DropDownAfterLogin = ({ userInfo }) => {
  // const VITE_API_URL ="http://localhost:5000/api/" || import.meta.env.VITE_AUTH_API_URL;
	const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;

  const handleLogOut = async () => {
    try {
      const response = await fetch(`${VITE_API_URL}/logout`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        console.error("Logout failed:", data.message);
      } else {
        console.log("Logout successful:", data.message);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center space-x-2 bg-gradient-to-r from-[#ea0eac] to-[#ff6200] text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-[#ff6200] hover:to-[#ea0eac] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff6200] focus:ring-offset-2"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-base font-semibold">
          {userInfo.username.charAt(0).toUpperCase()}
        </div>
        <span className="text-base font-semibold">{userInfo.username}</span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 bg-white/80 backdrop-blur-md rounded-lg shadow-xl border border-gray-200/50 p-3 min-w-[200px]">
        <DropdownMenuLabel className="text-lg font-semibold text-[#1f2937] flex items-center space-x-2">
          <FiUser className="text-xl" />
          <span>My Account</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-200/50 my-2" />
        <DropdownMenuItem className="text-base text-[#1f2937] hover:bg-[#ff6200]/10 rounded-md px-4 py-2 focus:outline-none focus:bg-[#ff6200]/10 transform hover:scale-105 transition-transform duration-200 flex items-center space-x-2">
          <FiUser className="text-lg" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base text-[#1f2937] hover:bg-[#ff6200]/10 rounded-md px-4 py-2 focus:outline-none focus:bg-[#ff6200]/10 transform hover:scale-105 transition-transform duration-200 flex items-center space-x-2">
          <MdOutlinePostAdd className="text-lg" />
          <Link to={`/userPost/${userInfo._id}`}>My Posts</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base text-[#1f2937] hover:bg-[#ff6200]/10 rounded-md px-4 py-2 focus:outline-none focus:bg-[#ff6200]/10 transform hover:scale-105 transition-transform duration-200 flex items-center space-x-2">
          <FiList className="text-lg" />
          <Link to="/showitems">See All Posts</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogOut}
          className="text-base text-[#1f2937] hover:bg-[#ff6200]/10 rounded-md px-4 py-2 focus:outline-none focus:bg-[#ff6200]/10 transform hover:scale-105 transition-transform duration-200 flex items-center space-x-2 cursor-pointer"
        >
          <FiLogOut className="text-lg" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownAfterLogin;