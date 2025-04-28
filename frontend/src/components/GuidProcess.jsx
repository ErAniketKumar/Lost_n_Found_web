import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const GuidProcess = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-12 bg-[#f5f5f5]">
      <h2 className="text-4xl text-[#ea0eac] font-bold text-center underline decoration-[#ff6200] mb-10">
        How to Use
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <Card className="flex flex-col h-full bg-white shadow-lg rounded-lg p-6">
          <div className="w-48 h-48 rounded-full border-4 border-[#22c55e] mx-auto p-4 overflow-hidden">
            <img
              src="/instructionImg/reg.png"
              alt="Register item"
              className="object-cover w-full h-full"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-[#1f2937]">
              Register a Lost or Found Item
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow text-base text-[#1f2937]">
            Register your lost or found item by selecting a category, uploading a
            photo, and providing location details.
            <br />
            <span className="font-semibold">Note:</span> Ensure all form inputs are
            filled and images are clear.
          </CardContent>
          <CardFooter className="mt-auto">
            <Link
              to="/login"
              className="w-full text-center bg-[#22c55e] text-white py-3 px-4 rounded-lg hover:bg-[#ff6200] transition-colors"
            >
              Register Now
            </Link>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card className="flex flex-col h-full bg-white shadow-lg rounded-lg p-6">
          <div className="w-48 h-48 rounded-full border-4 border-[#ff6200] mx-auto p-4 overflow-hidden">
            <img
              src="/instructionImg/matchreg.png"
              alt="Search items"
              className="object-cover w-full h-full"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-[#1f2937]">
              Search for Matching Items
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow text-base text-[#1f2937]">
            Use filters to search items by category or sort by date to match your
            lost or found object. Our system scans the database to find matches.
          </CardContent>
          <CardFooter className="mt-auto">
            <Link
              to="/showitems"
              className="w-full text-center bg-[#ff6200] text-white py-3 px-4 rounded-lg hover:bg-[#ea0eac] transition-colors"
            >
              Search Now
            </Link>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card className="flex flex-col h-full bg-white shadow-lg rounded-lg p-6">
          <div className="w-48 h-48 rounded-full border-4 border-[#facc15] mx-auto p-4 overflow-hidden">
            <img
              src="/instructionImg/conversation.png"
              alt="Notifications"
              className="object-cover w-full h-full"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-[#1f2937]">
              Stay Notified If Items Match
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow text-base text-[#1f2937]">
            Enable notifications to get instant alerts when new items matching your
            request are added.
            <br />
            Close your case and provide feedback when found.
          </CardContent>
          <CardFooter className="mt-auto">
            <button className="w-full bg-[#facc15] text-[#1f2937] py-3 px-4 rounded-lg hover:bg-[#ea0eac] hover:text-white transition-colors">
              Enable Alerts
            </button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default GuidProcess;