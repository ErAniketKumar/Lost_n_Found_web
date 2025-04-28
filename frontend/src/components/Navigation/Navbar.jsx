import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CgSearchFound } from "react-icons/cg";
import { LuSearchX } from "react-icons/lu";
import { BiDonateHeart } from "react-icons/bi";
import { useUserAuthContext } from "@/contexts/userAuth";
import DropDownAfterLogin from "./DropDownAfterLogin";
import { HiMenuAlt3, HiX } from "react-icons/hi";

// Mobile Navbar Component
const MobileNavbar = ({ isOpen, toggleMenu, userInfo }) => {
  return (
    <div
      className={`fixed inset-0 z-[1000] bg-[#1f2937]/50 backdrop-blur-md transform ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="flex flex-col h-full p-6 space-y-8 text-white">
        <div className="flex justify-between items-center">
          <NavLink
            className="text-2xl font-bold text-[#ea0eac]"
            to="/"
            onClick={toggleMenu}
          >
            May I Help U
          </NavLink>
          <button
            onClick={toggleMenu}
            className="text-3xl text-[#ff6200] hover:text-[#ea0eac] transition-colors"
          >
            <HiX />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 text-lg font-semibold">
          <NavLink
            className="flex items-center space-x-3 text-white hover:text-[#ff6200] transition-colors duration-300"
            to="/lostform"
            onClick={toggleMenu}
          >
            <LuSearchX className="text-2xl transform hover:rotate-12 transition-transform" />
            <span>I've Lost</span>
          </NavLink>
          <NavLink
            className="flex items-center space-x-3 text-white hover:text-[#ff6200] transition-colors duration-300"
            to="/foundform"
            onClick={toggleMenu}
          >
            <CgSearchFound className="text-2xl transform hover:rotate-12 transition-transform" />
            <span>I've Found</span>
          </NavLink>
          <NavLink
            className="flex items-center space-x-3 text-white hover:text-[#ff6200] transition-colors duration-300"
            to="/donationhomepage"
            onClick={toggleMenu}
          >
            <BiDonateHeart className="text-2xl transform hover:rotate-12 transition-transform" />
            <span>Donate Now</span>
          </NavLink>
          {userInfo ? (
            <div className="w-full flex justify-center">
              <DropDownAfterLogin userInfo={userInfo} />
            </div>
          ) : (
            <NavLink
              className="bg-gradient-to-r from-[#ea0eac] to-[#ff6200] text-white px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-[#ff6200] hover:to-[#ea0eac] transition-all duration-300 shadow-lg"
              to="/login"
              onClick={toggleMenu}
            >
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;
  const { userId } = useUserAuthContext();
  const [userInfo, setUserInfo] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fetchUserInformation = async (getUserInfoApiUrl) => {
    try {
      const response = await fetch(getUserInfoApiUrl, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        console.log("Error response received", data.message || data);
      } else {
        setUserInfo(data.userData);
      }
    } catch (error) {
      if (error instanceof TypeError && error.message.includes("circular")) {
        console.error("Circular reference detected in the response:", error);
      } else {
        console.error("An error occurred:", error);
      }
    }
  };

  useEffect(() => {
    if (userId) fetchUserInformation(`${VITE_API_URL}/userInfo/${userId}`);
  }, [userId]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Default Navbar for larger screens */}
      <nav className="hidden md:block z-[909] max-w-screen-2xl mx-auto px-6 py-4 bg-white/80 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <NavLink
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ea0eac] to-[#ff6200]"
              to="/"
            >
              May I Help U
            </NavLink>
            <NavLink
              className="relative flex items-center space-x-2 text-lg font-medium text-[#1f2937] hover:text-[#ff6200] transition-colors duration-300 group"
              to="/lostform"
            >
              <LuSearchX className="text-xl transform group-hover:rotate-12 transition-transform" />
              <span>I've Lost</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ea0eac] to-[#ff6200] group-hover:w-full transition-all duration-300"></span>
            </NavLink>
            <NavLink
              className="relative flex items-center space-x-2 text-lg font-medium text-[#1f2937] hover:text-[#ff6200] transition-colors duration-300 group"
              to="/foundform"
            >
              <CgSearchFound className="text-xl transform group-hover:rotate-12 transition-transform" />
              <span>I've Found</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ea0eac] to-[#ff6200] group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          </div>
          <div className="flex items-center space-x-6">
            <NavLink
              className="relative flex items-center space-x-2 text-lg font-medium text-[#1f2937] hover:text-[#ff6200] transition-colors duration-300 group"
              to="/donationhomepage"
            >
              <BiDonateHeart className="text-xl transform group-hover:rotate-12 transition-transform" />
              <span>Donate Now</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ea0eac] to-[#ff6200] group-hover:w-full transition-all duration-300"></span>
            </NavLink>
            {userInfo ? (
              <DropDownAfterLogin userInfo={userInfo} />
            ) : (
              <NavLink
                className="bg-gradient-to-r from-[#ea0eac] to-[#ff6200] text-white px-6 py-2 rounded-full hover:bg-gradient-to-r hover:from-[#ff6200] hover:to-[#ea0eac] transition-all duration-300 shadow-lg text-base font-semibold"
                to="/login"
              >
                Sign In
              </NavLink>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar for smaller screens */}
      <nav className="block md:hidden z-[999] fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg p-4">
        <div className="flex justify-between items-center">
          <NavLink
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ea0eac] to-[#ff6200]"
            to="/"
          >
            May I Help U
          </NavLink>
          <button
            onClick={toggleMobileMenu}
            className="text-3xl text-[#ea0eac] hover:text-[#ff6200] transition-colors"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileNavbar
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        userInfo={userInfo}
      />
    </>
  );
};

export default Navbar;