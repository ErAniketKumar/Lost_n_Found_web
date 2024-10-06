import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
	FaInstagram,
	FaGithub,
	FaReact,
	FaNodeJs,
	FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
	const mediaIcon = [
		{
			id: 1,
			url: "https://github.com/ErAniketKumar",
			icon: <FaGithub />,
		},
		{
			id: 2,
			url: "https://linkedin.com/in/eraniket",
			icon: <FaLinkedin />,
		},
		{
			id: 3,
			url: "https://instagram.com/eraniket95",
			icon: <FaInstagram />,
		},
		{
			id: 4,
			url: "https://x.com/eraniket95/",
			icon: <FaSquareXTwitter />,
		},
	];
	return (
		<div className="mb-0 mt-5">
			<div className="grid md:grid-cols-2 grid-cols-1">
				<div className="bg-slate-200 text-gray-600 md:px-20 p-6">
					<div>
						<h1 className="text-xl font-bold">CONTACT US</h1>
						<p>+91 9123120581</p>
						<p>eraniket95@hotmail.com</p>
					</div>
					<div>
						<h1 className="text-xl font-bold">ADDRESS</h1>
						<p>Chanpatia,Bettiah</p>
						<p>West Champaran,Bihar</p>
						<p>845449</p>
					</div>
				</div>
				<div className="bg-slate-300 text-gray-600 md:px-20 p-6">
					<div className="space-y-4">
						<h1 className="text-xl font-bold">SOCIALIZE WITH SOCIAL</h1>
						<div className="flex text-2xl gap-4">
							{mediaIcon.map(({ id, url, icon }) => (
								<NavLink key={id} to={url} target="_blank">
									{icon}
								</NavLink>
							))}
						</div>

						<div>
							<p className="text-xl font-bold">View my portfolio</p>
							<Link to="https://eraniket.netlify.app" target="_blank">
								https://eraniket.netlify.app
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
