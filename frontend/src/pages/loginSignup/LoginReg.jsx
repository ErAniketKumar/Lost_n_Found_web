import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useUserAuthContext } from "@/contexts/userAuth";

const LoginReg = () => {
	const VITE_AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL;
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isAdmin, setIsAdmin] = useState("false");
	const navigate = useNavigate();

	const {userId} = useUserAuthContext();

	const handleLoginFormSubmit = async (e) => {
		e.preventDefault();
		const loginData = {
			email,
			password,
		};
		const response = await fetch(`${VITE_AUTH_API_URL}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
			credentials: "include"
		});
		const data = await response.json();
		if(!response.ok) {
			toast.error(data.message);
		} else {
			toast.success(data.message);
			navigate("/");
			console.log("Login", userId);
		}
	};

	const handleSignupSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Password and Confirm Password should be same");
			return;
		}
		const signupData = {
			username,
			email,
			number,
			password,
			isAdmin,
		};
		const response = await fetch(`${VITE_AUTH_API_URL}/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(signupData),
			credentials: "include",
		});
		const data = await response.json();
		if(!response.ok) {
			toast.error(data.message);
		} else {
			toast.success(data.message);
			console.log("now navigating to login");
		
			navigate("/login");
		}
	};

	return (
		<div className="max-w-screen-2xl container mx-auto md:px-20 bg-[#f5f5f5] px-6 pt-6 md:mt-20 mt-24">
		  <ToastContainer />
			<div className="flex justify-center border-2 p-5">
				<Tabs defaultValue="login" className="w-[22rem]">
					<TabsList>
						<TabsTrigger
							className="text-gray-700 font-medium text-lg focus:border-t-2 px-10 focus:border-t-orange-500"
							value="login"
						>
							SignIn
						</TabsTrigger>
						<TabsTrigger
							className="text-gray-700 font-medium text-lg focus:border-t-2 px-10 focus:border-t-orange-500"
							value="signup"
						>
							SignUp
						</TabsTrigger>
					</TabsList>
					<TabsContent value="login">
						<form
							className="flex flex-col space-y-3"
							action="/login"
							method="post"
							onSubmit={handleLoginFormSubmit}
						>
							<Input
								className="outline-none"
								type="email"
								name="email"
								placeholder="Email as- expamle@gmail.com"
								onChange={(e) => setEmail(e.target.value)}
							></Input>
							<Input
								className="outline-none"
								type="password"
								name="password"
								placeholder="Password - ********"
								onChange={(e) => setPassword(e.target.value)}
							></Input>
							<button className="px-4 py-2 bg-orange-500 rounded-md hover:bg-orange-400 text-lg text-white">
								Login
							</button>
							<div>
								<NavLink
									className="text-gray-700 font-medium text-lg focus:border-2 focus:rounded-md focus:border-[#ea0eac] p-2"
									to="/forgotpassword"
								>
									Forgot Password?
								</NavLink>
								<TabsList>
									<TabsTrigger
										className="text-gray-700 font-medium text-lg"
										value="signup"
									>
										SignUp
									</TabsTrigger>
								</TabsList>
							</div>
						</form>
					</TabsContent>

					<TabsContent value="signup">
						<form
							className="flex flex-col space-y-3"
							action="/signup"
							method="post"
							onSubmit={handleSignupSubmit}
						>
							<Input
								className="outline-none"
								type="text"
								name="username"
								placeholder="Fullname as- Aniket Kumar"
								onChange={(e) => setUsername(e.target.value)}
							></Input>
							<Input
								className="outline-none"
								type="email"
								name="email"
								placeholder="Email as- expamle@gmail.com"
								onChange={(e) => setEmail(e.target.value)}
							></Input>
							<Input
								className="outline-none"
								type="number"
								name="number"
								placeholder="Mob No as- 1234567890"
								onChange={(e) => setNumber(e.target.value)}
							></Input>
							<Input
								className="outline-none"
								type="password"
								name="password"
								placeholder="Password - ********"
								onChange={(e) => setPassword(e.target.value)}
							></Input>
							<Input
								className="outline-none"
								type="password"
								name="confirmPassword"
								placeholder="Re-password - ********"
								onChange={(e) => setConfirmPassword(e.target.value)}
							></Input>
							<button className="px-4 py-2 bg-orange-500 rounded-md hover:bg-orange-400 text-white text-lg">
								Signup
							</button>
							<div>
								<TabsList>
									<TabsTrigger
										className="text-gray-700 font-medium text-lg"
										value="login"
									>
										SigIn
									</TabsTrigger>
								</TabsList>
							</div>
						</form>
					</TabsContent>
				</Tabs>
			</div>
		
		</div>
	);
};

export default LoginReg;
