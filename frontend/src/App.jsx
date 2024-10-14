import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import GuidProcess from "./components/GuidProcess";
import LatestObject from "./components/LatestObject";
import Footer from "./components/Footer";
import LoginReg from "./pages/loginSignup/LoginReg";
import LostForm from "./pages/LostForm";
import FoundForm from "./pages/FoundForm";
import Donationhomepage from "./components/Donation/Donationhomepage";
import ScrollerArrow from "./components/ScrollerArrow";
import ShowItemHome from "./components/items/ShowItemHome";
import SingleItemDetails from "./components/items/singleItemDetails";
import Reviews from "./components/Reviews";
import { UserAuthContextProvider } from "./contexts/userAuth";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component
import UserPost from "./components/users/UserPost";
import UpdateItemForm from "./pages/UpdateItemForm";

function App() {
	return (
		<UserAuthContextProvider>
			<div>
				<Navbar />
				<Routes>
					<Route path="/login" element={<LoginReg />} />

					{/* Protect these routes */}
					<Route
						path="/lostform"
						element={
							<ProtectedRoute>
								<LostForm />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/foundform"
						element={
							<ProtectedRoute>
								<FoundForm />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/showitems"
						element={
							<ProtectedRoute>
								<ShowItemHome />
							</ProtectedRoute>
						}
					/>

					<Route path="/donationhomepage" element={<Donationhomepage />} />

					<Route
						path="/"
						element={
							<>
								<HeroSection />
								<GuidProcess />
								<LatestObject />
								<Reviews />
								<ScrollerArrow />
							</>
						}
					/>
					<Route path="/item/:id" element={<SingleItemDetails />} />

					{/* user post i.e user show user created post only */}
					<Route
						path="/userPost/:id"
						element={
							<ProtectedRoute>
								<UserPost />
							</ProtectedRoute>
						}
					></Route>

					<Route
						path="/updateItem/:id"
						element={
							<ProtectedRoute>
								<UpdateItemForm />
							</ProtectedRoute>
						}
					></Route>
				</Routes>
				<Footer />
			</div>
		</UserAuthContextProvider>
	);
}

export default App;
