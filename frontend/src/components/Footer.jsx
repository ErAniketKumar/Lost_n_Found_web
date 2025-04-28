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
    { id: 1, url: "https://github.com/ErAniketKumar", icon: <FaGithub /> },
    { id: 2, url: "https://linkedin.com/in/eraniket", icon: <FaLinkedin /> },
    { id: 3, url: "https://instagram.com/eraniket95", icon: <FaInstagram /> },
    { id: 4, url: "https://x.com/eraniket95/", icon: <FaSquareXTwitter /> },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#f5f5f5] to-[#e5e7eb] text-[#1f2937] py-10">
      <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-xl font-bold text-[#ea0eac]">Contact Us</h1>
            <p className="text-base">+91 9123120581</p>
            <p className="text-base">eraniket95@hotmail.com</p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#ea0eac]">Address</h1>
            <p className="text-base">Chanpatia, Bettiah</p>
            <p className="text-base">West Champaran, Bihar</p>
            <p className="text-base">845449</p>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-xl font-bold text-[#ea0eac]">Socialize with Us</h1>
          <div className="flex gap-4 text-3xl">
            {mediaIcon.map(({ id, url, icon }) => (
              <NavLink
                key={id}
                to={url}
                target="_blank"
                className="text-[#1f2937] hover:text-[#ff6200] transition-colors"
              >
                {icon}
              </NavLink>
            ))}
          </div>
          <div>
            <p className="text-xl font-bold text-[#ea0eac]">View My Portfolio</p>
            <Link
              to="https://eraniket.netlify.app"
              target="_blank"
              className="text-base hover:text-[#ff6200] transition-colors"
            >
              https://eraniket.netlify.app
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-base">
        <p>© 2025 May I Help U. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;