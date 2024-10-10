import React from "react";
import Navbar from "./components/Navigation/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import GuidProcess from "./components/GuidProcess";
import LatestObject from "./components/LatestObject";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import LoginReg from "./pages/loginSignup/LoginReg";
import LostForm from "./pages/LostForm";
import FoundForm from "./pages/FoundForm";
import Donationhomepage from "./components/Donation/Donationhomepage";
import ScrollerArrow from "./components/ScrollerArrow";
import ShowItemHome from "./components/items/ShowItemHome";
import SingleItemDetails from "./components/items/singleItemDetails";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/login" element={<LoginReg />}></Route>
				<Route path="/lostform" element={<LostForm />}></Route>
				<Route path="/foundform" element={<FoundForm />}></Route>
				<Route path="/donationhomepage" element={<Donationhomepage />}></Route>
				<Route path="/showitems" element={<ShowItemHome />}></Route>
				<Route
					path="/"
					element={
						<>
							<HeroSection />
							<GuidProcess />
							<LatestObject />
							<Footer />
							<ScrollerArrow></ScrollerArrow>
						</>
					}
				></Route>
				<Route path="/item/:id" element={<SingleItemDetails/>}></Route>
			</Routes>
		</div>
	);
}

export default App;
