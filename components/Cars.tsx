"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Cars() {
  const [destination, setDestination] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [tripStart, setTripStart] = useState("");
  const [tripEnd, setTripEnd] = useState("");
  const handleBooking = () => {
  const phoneNumber = "918114763522";

  const message = `🚗 New Booking Request

📍 Destination: ${destination}

🚘 Car: ${selectedCar}

📞 Contact Number: ${contactNumber}

🟢 Trip Start: ${tripStart}

🔴 Trip End: ${tripEnd}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
};
  return (
    <section
      id="cars"
      className="w-full bg-[#05051a] py-20 px-6 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl bg-[#14143d] rounded-[35px] p-10"
      >
        <h1 className="text-white text-5xl font-bold text-center mb-4">
          Looking for the best car rentals?
        </h1>

        <p className="text-gray-300 text-center text-xl mb-14">
          Book Self-Drive Car Rentals Across Odisha
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
          {/* Destination */}
          <div>
            <label className="text-white text-lg block mb-3">
              Destination
            </label>

            <input
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white text-black outline-none"
            />
          </div>

          {/* Select Car */}
          <div>
            <label className="text-white text-lg block mb-3">
              Select Car
            </label>

            <select
              value={selectedCar}
              onChange={(e) => setSelectedCar(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white text-black outline-none"
            >
              <option>Choose Car</option>
              <option>Mahindra Thar</option>
              <option>Scorpio N</option>
              <option>XUV700</option>
              <option>Swift</option>
              <option>Creta</option>
            </select>
          </div>

          {/* Contact Number */}
          <div>
            <label className="text-white text-lg block mb-3">
              Contact Number
            </label>

            <input
              type="number"
              placeholder="Enter number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white text-black outline-none"
            />
          </div>

          {/* Trip Start */}
          <div>
            <label className="text-white text-lg block mb-3">
              Trip Start
            </label>

            <input
              type="datetime-local"
              value={tripStart}
              onChange={(e) => setTripStart(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white text-black outline-none"
            />
          </div>

          {/* Trip End */}
          <div>
            <label className="text-white text-lg block mb-3">
              Trip End
            </label>

            <input
              type="datetime-local"
              value={tripEnd}
              onChange={(e) => setTripEnd(e.target.value)}
              className="w-full px-5 py-4 rounded-xl bg-white text-black outline-none"
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleBooking}
            className="bg-gradient-to-r from-cyan-400 to-purple-500 px-14 py-5 rounded-full text-white text-2xl font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.3)]"
          >
            BOOK NOW
          </button>
        </div>
      </motion.div>
    </section>
  );
}