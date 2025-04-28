import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Donationhomepage = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleDonationSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call for demonstration
    try {
      // Replace with actual API call
      toast.success("Thank you for your donation!", { theme: "colored" });
      setName("");
      setAmount("");
      setMessage("");
      navigate("/");
    } catch (error) {
      toast.error("Failed to process donation. Please try again.", { theme: "colored" });
    }
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-12 bg-[#f5f5f5] min-h-screen mt-20">
      <ToastContainer />
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#ea0eac] mb-4">
          Support Our Mission
        </h1>
        <p className="text-lg text-[#1f2937] max-w-2xl mx-auto">
          Your generous donation helps us reunite lost items with their owners and
          support our community initiatives. Every contribution makes a difference!
        </p>
        <button
          onClick={() => document.getElementById("donation-form").scrollIntoView({ behavior: "smooth" })}
          className="mt-6 bg-[#ff6200] text-white py-3 px-6 rounded-lg hover:bg-[#ea0eac] transition-colors text-lg font-semibold"
        >
          Donate Now
        </button>
      </div>

      {/* Donation Form */}
      <div id="donation-form" className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-[#ea0eac] mb-6 text-center">
          Make a Donation
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleDonationSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-[#1f2937]">
              Your Name
            </label>
            <input
              className="mt-1 border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., John Doe"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount" className="text-lg font-medium text-[#1f2937]">
              Donation Amount ($)
            </label>
            <input
              className="mt-1 border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
              type="number"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g., 50"
              min="1"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium text-[#1f2937]">
              Message (Optional)
            </label>
            <textarea
              className="mt-1 border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#ff6200]"
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g., Happy to support your cause!"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="bg-[#ff6200] text-white py-3 rounded-lg hover:bg-[#ea0eac] transition-colors text-lg font-semibold"
          >
            Donate
          </button>
        </form>
      </div>

      {/* Impact Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#ea0eac] mb-6">
          Your Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-[#1f2937] mb-2">
              1,000+ Items Reunited
            </h3>
            <p className="text-base text-[#1f2937]">
              Your donations help us match lost items with their owners.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-[#1f2937] mb-2">
              Community Support
            </h3>
            <p className="text-base text-[#1f2937]">
              Funds support local initiatives and community programs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-[#1f2937] mb-2">
              24/7 Service
            </h3>
            <p className="text-base text-[#1f2937]">
              Your support keeps our platform running round the clock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donationhomepage;