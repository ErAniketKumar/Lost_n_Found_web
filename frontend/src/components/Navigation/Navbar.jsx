import React from "react";
import LaptopNavbar from "./LaptopNavbar";
import MobileNavbar from "./MobileNavbar";
import { NavLink, Link } from "react-router-dom";
import { CgSearchFound } from "react-icons/cg";
import { LuSearchX } from "react-icons/lu";
import { BiDonateHeart } from "react-icons/bi";

import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
	return (
		<div className="z-[999] max-w-screen-2xl container mx-auto px-4 md:px-20 bg-[#f5f5f5] p-6 fixed top-0 left-0 right-0">
			{/* <LaptopNavbar /> */}
			{/* <MobileNavbar></MobileNavbar> */}

			{/* for laptop */}

			<div className="bg-[#f5f5f5]" id="top">
				<div className="flex justify-between items-center">
					<div className="space-x-4 flex">
						<NavLink
							className="text-4xl font-bold  text-[#ea0eac] whitespace-nowrap"
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
								<BiDonateHeart  className="mt-1" /> <span>Donate Now</span>
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

			{/* for mobile */}

			{/* <Menubar>
				<MenubarMenu>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>New Window</MenubarItem>
						<MenubarItem>Share</MenubarItem>
						<MenubarItem>Print</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar> */}
		</div>
	);
};

export default Navbar;
