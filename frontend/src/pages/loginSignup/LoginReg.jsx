import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { NavLink } from "react-router-dom";
const LoginReg = () => {
	return (
		<div className="max-w-screen-2xl container mx-auto md:px-20 bg-[#f5f5f5] px-6 pt-6 md:mt-20 mt-24">
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
						<form className="flex flex-col space-y-3" action="/login" method="post">
							<Input
								className="outline-none"
								type="email"
								name="email"
								placeholder="Email as- expamle@gmail.com"
							></Input>
							<Input
								className="outline-none"
								type="password"
								name="password"
								placeholder="Password - ********"
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
						>
							<Input
								className="outline-none"
								type="text"
								name="name"
								placeholder="Fullname as- Aniket Kumar"
							></Input>
							<Input
								className="outline-none"
								type="email"
								name="email"
								placeholder="Email as- expamle@gmail.com"
							></Input>
							<Input
								className="outline-none"
								type="number"
								name="number"
								placeholder="Mob No as- 1234567890"
							></Input>
							<Input
								className="outline-none"
								type="password"
								name="password"
								placeholder="Password - ********"
							></Input>
							<Input
								className="outline-none"
								type="password"
								name="repassword"
								placeholder="Re-password - ********"
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
			<Footer></Footer>
		</div>
	);
};

export default LoginReg;
