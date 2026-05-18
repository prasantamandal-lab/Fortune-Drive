"use client";

import { useState } from "react";

const cars = [
  {
    name: "Scorpio S11",
    image: "/cars/scorpio.jpg",
    fuel: "Diesel",
    price12: "₹2799",
    price24: "₹3799",
  },

  {
    name: "XUV700",
    image: "/cars/xuv700.jpg",
    fuel: "Diesel",
    price12: "₹2999",
    price24: "₹3999",
  },

  {
    name: "Mahindra Thar",
    image: "/cars/thar.jpg",
    fuel: "Diesel",
    price12: "₹2499",
    price24: "₹3299",
  },

  {
    name: "KIA Sonet",
    image: "/cars/sonet.jpg",
    fuel: "Petrol",
    price12: "₹1799",
    price24: "₹2299",
  },

  {
    name: "Toyota Glanza",
    image: "/cars/glanza.jpg",
    fuel: "Petrol",
    price12: "₹1499",
    price24: "₹1799",
  },

  {
    name: "Suzuki Fronx",
    image: "/cars/fronx.jpg",
    fuel: "Petrol",
    price12: "₹1499",
    price24: "₹1799",
  },

  {
    name: "Suzuki Swift",
    image: "/cars/swift.jpg",
    fuel: "Petrol",
    price12: "₹1299",
    price24: "₹1599",
  },

  {
    name: "Toyota Taisor",
    image: "/cars/taisor.jpg",
    fuel: "Petrol",
    price12: "₹1499",
    price24: "₹1799",
  },
];

export default function CarList() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleBooking = (carName: string) => {

    const phoneNumber = "918114763522";

    const message = `🚗 Fortune Drive Booking Request

I want to book:

🚘 Car Model: ${carName}

Please share booking details.`;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (

    <section
      id="allcars"
      className="bg-[#02021a] py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-6xl font-bold text-cyan-400 text-center mb-16">
          All Cars
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {cars.map((car, index) => (

            <div
              key={index}
              className="bg-[#111133] rounded-[30px] p-5 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20"
            >

              {/* Image */}
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-[220px] object-cover rounded-2xl"
              />

              {/* Buttons */}
              <div className="flex items-center justify-between mt-5">

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="text-cyan-400 font-semibold hover:text-white transition"
                >
                  View Details
                </button>

                <button
                  onClick={() => handleBooking(car.name)}
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 rounded-xl text-white font-bold hover:scale-105 transition hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                >
                  BOOK NOW
                </button>

              </div>

              {/* Details */}
              {openIndex === index && (

                <div className="bg-[#1f2260] rounded-2xl p-5 mt-5 text-white text-lg leading-10 transition-all duration-300">

                  <p>
                    Model: {car.name}
                  </p>

                  <p>
                    Fuel: {car.fuel}
                  </p>

                  <p>
                    12 Hrs: {car.price12}
                  </p>

                  <p>
                    24 Hrs: {car.price24}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}