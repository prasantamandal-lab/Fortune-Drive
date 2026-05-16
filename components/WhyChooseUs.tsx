"use client";

import { useState } from "react";

const features = [
  {
    title: "Easy Booking",
    description:
      "Our booking process is quick and hassle-free. With just a few clicks, reserve your desired vehicle anytime and anywhere without complicated steps.",
    image: "/easy-booking.png",
  },

  {
    title: "Competitive Price",
    description:
      "We offer the most competitive and affordable rental pricing across Odisha without compromising on service quality and customer satisfaction.",
    image: "/competitive-price.png",
  },

  {
    title: "Clean & Comfortable Cars",
    description:
      "All our vehicles are regularly sanitized, well-maintained, and designed to provide maximum comfort for your journey.",
    image: "/clean-car.png",
  },

  {
    title: "24/7 Customer Support",
    description:
      "Our team is available 24/7 to assist you with booking help, emergency support, and any issue during your ride.",
    image: "/support.png",
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">
            Why Choose Us
          </h2>

          <p className="text-gray-300 text-xl">
            Affordable, Comfortable and Professional Car Rental Service You Can Trust.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[350px_1fr] gap-10 items-center">

          {/* Left Buttons */}
          <div className="space-y-6">

            {features.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-full text-left px-8 py-6 rounded-3xl font-semibold text-2xl transition-all duration-300
                  
                  ${
                    active === index
                      ? "bg-gradient-to-r from-cyan-400 to-fuchsia-600 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                      : "bg-[#11164d]"
                  }
                `}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Right Card */}
          <div className="bg-[#11164d] rounded-[40px] p-12">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={features[active].image}
                  alt=""
                  className="w-[280px] h-[280px] object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-2xl leading-[50px] text-gray-100">
                  {features[active].description}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}