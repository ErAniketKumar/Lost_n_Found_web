import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useUserAuthContext } from "@/contexts/userAuth";

const LoginReg = () => {
 // const VITE_API_URL ="http://localhost:5000/api/" || import.meta.env.VITE_AUTH_API_URL;
  const VITE_API_URL = import.meta.env.VITE_AUTH_API_URL;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState("false");
  const [activeTab, setActiveTab] = useState("login"); // State to control active tab
  const navigate = useNavigate();
  const { userId, fetchUserId } = useUserAuthContext();

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    const response = await fetch(`${VITE_API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      toast.error(data.message, { theme: "colored" });
    } else {
      toast.success(data.message, { theme: "colored" });
      fetchUserId();
      navigate("/");
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password must match", { theme: "colored" });
      return;
    }
    const signupData = { username, email, number, password, isAdmin };
    const response = await fetch(`${VITE_API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
      credentials: "include",
    });
    const data = await response.json();
    if (!response.ok) {
      toast.error(data.message, { theme: "colored" });
    } else {
      toast.success(data.message, { theme: "colored" });
      navigate("/login");
      fetchUserId();
    }
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-12 bg-[#f5f5f5] md:mt-20 mt-24">
      <ToastContainer />
      <div className="flex justify-center">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-md bg-white rounded-lg shadow-lg p-6"
        >
          <TabsList className="grid grid-cols-2 bg-gray-100 rounded-lg p-1">
            <TabsTrigger
              value="login"
              className="py-2 text-lg font-semibold text-[#1f2937] data-[state=active]:bg-[#ff6200] data-[state=active]:text-white rounded-lg transition-colors"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="py-2 text-lg font-semibold text-[#1f2937] data-[state=active]:bg-[#ff6200] data-[state=active]:text-white rounded-lg transition-colors"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="mt-6">
            <form className="flex flex-col gap-4" onSubmit={handleLoginFormSubmit}>
              <Input
                className="border border-gray-300 rounded-md p-2 text-base"
                type="email"
                name="email"
                placeholder="Email (e.g., example@gmail.com)"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                className="border border-gray-300 rounded-md p-2 text-base"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-[#ff6200] text-white py-3 rounded-lg hover:bg-[#ea0eac] transition-colors">
                Login
              </button>
              <div className="flex justify-between items-center">
                <NavLink
                  className="text-base text-[#ea0eac] hover:text-[#ff6200] transition-colors"
                  to="/forgotpassword"
                >
                  Forgot Password?
                </NavLink>
                <button
                  type="button"
                  className="text-base text-[#ea0eac] hover:text-[#ff6200]"
                  onClick={() => setActiveTab("signup")}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="signup" className="mt-6">
            <form className="flex flex-col gap-4" onSubmit={handleSignupSubmit}>
              <Input
                className="border border-gray-300 rounded-md p-2 text-base"
                type="text"
                name="username"
                placeholder="Full Name (e.g., Aniket Kumar)"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                className="border border-gray-300 rounded-md p-2 text-base"
                type="email"
                name="email"
                placeholder="Email (e.g., example@gmail.com)"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                className="border border-gray-300 rounded-md p-2 text-base"
                type="number"
                name="number"
                placeholder="Mobile Number (e.g., 1234567890)"
                onChange={(e) => setNumber(e.target.value)}
              />
              <Input
                className="border border-gray-300 rounded-md p-2 text-base"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                className="border border-gray-300 rounded-md p-2 text-base"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className="bg-[#ff6200] text-white py-3 rounded-lg hover:bg-[#ea0eac] transition-colors">
                Sign Up
              </button>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-base text-[#ea0eac] hover:text-[#ff6200]"
                  onClick={() => setActiveTab("login")}
                >
                  Sign In
                </button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LoginReg;