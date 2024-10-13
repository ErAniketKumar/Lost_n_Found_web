import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CgSearchFound } from "react-icons/cg";
import { LuSearchX } from "react-icons/lu";
import { BiDonateHeart } from "react-icons/bi";
import { useUserAuthContext } from "@/contexts/userAuth";

// Mobile Navbar Component
const MobileNavbar = ({ isOpen, toggleMenu }) => {
	return (
		<div className={`fixed inset-0 bg-gray-900 bg-opacity-90 z-[1000] transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
			<div className="p-6 flex flex-col items-center space-y-4 text-white">
				<NavLink className="text-2xl font-bold" to="/" onClick={toggleMenu}>
					May i helpU
				</NavLink>
				<NavLink className="text-lg" to="/lostform" onClick={toggleMenu}>
					<div className="flex items-center space-x-2">
						<LuSearchX /> <span>I've lost</span>
					</div>
				</NavLink>
				<NavLink className="text-lg" to="/foundform" onClick={toggleMenu}>
					<div className="flex items-center space-x-2">
						<CgSearchFound /> <span>I've found</span>
					</div>
				</NavLink>
				<NavLink className="text-lg" to="/donationhomepage" onClick={toggleMenu}>
					<div className="flex items-center space-x-2">
						<BiDonateHeart /> <span>Donate Now</span>
					</div>
				</NavLink>
				<NavLink
					className="text-lg font-bold bg-orange-500 px-4 py-2 rounded-sm"
					to="/login"
					onClick={toggleMenu}
				>
					Sign In
				</NavLink>
				<button
					className="text-lg font-bold bg-red-500 px-4 py-2 rounded-sm"
					onClick={toggleMenu}
				>
					Close Menu
				</button>
			</div>
		</div>
	);
};

const Navbar = () => {
	const { userId } = useUserAuthContext();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {}, [userId]);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			{/* Default Navbar for larger screens */}
			<div className="hidden md:block z-[999] max-w-screen-2xl container mx-auto px-4 md:px-20 bg-[#f5f5f5] p-6 fixed top-0 left-0 right-0">
				<div className="bg-[#f5f5f5]" id="top">
					<div className="flex justify-between items-center">
						<div className="space-x-4 flex">
							<NavLink
								className="text-4xl font-bold text-[#ea0eac] whitespace-nowrap"
								to="/"
							>
								May i helpU
							</NavLink>

							<NavLink className="flex" to="/lostform">
								<div className="flex text-xl p-2 font-bold hover:text-white text-[#ea0eac] hover:bg-[#ea0eac] border rounded-sm border-[#ea0eac]">
									<LuSearchX className="mt-1" /> <span>I've lost</span>
								</div>
							</NavLink>
							<NavLink className="flex" to="/foundform">
								<div className="flex text-xl p-2 font-bold hover:text-white text-[#ea0eac] hover:bg-[#ea0eac] border rounded-sm border-[#ea0eac]">
									<CgSearchFound className="mt-1" /> <span>I've found</span>
								</div>
							</NavLink>
						</div>
						<div className="space-x-4 flex">
							<NavLink className="flex" to="/donationhomepage">
								<div className="flex text-xl p-2 font-bold hover:text-white text-[#ea0eac] hover:bg-[#ea0eac] border rounded-sm border-[#ea0eac]">
									<BiDonateHeart className="mt-1" /> <span>Donate Now</span>
								</div>
							</NavLink>

							<NavLink
								className="text-lg font-bold p-2 rounded-sm bg-orange-500 text-white hover:bg-orange-400"
								to="/login"
							>
								SignIn
							</NavLink>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Navbar for smaller screens */}
			<div className="block md:hidden z-[999] fixed top-0 left-0 right-0 bg-[#f5f5f5] p-6">
				<div className="flex justify-between items-center">
					<NavLink className="text-4xl font-bold text-[#ea0eac]" to="/">
						May i helpU
					</NavLink>

					<button onClick={toggleMobileMenu} className="text-xl font-bold text-[#ea0eac]">
						Menu
					</button>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			<MobileNavbar isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
		</>
	);
};

export default Navbar;
