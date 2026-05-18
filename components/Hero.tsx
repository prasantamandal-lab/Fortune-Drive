"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {

  const posters = [
    "/posters/poster1.jpg",
    "/posters/poster2.jpg",
    "/posters/poster3.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === posters.length - 1 ? 0 : prev + 1
      );

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section id="home" className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8 py-20 gap-16">

      {/* Left Side */}
     <motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="max-w-xl"
>

        <p className="text-cyan-400 text-lg mb-4">
          SELF DRIVE CAR RENTAL
        </p>

        <h1 className="text-4xl font-bold leading-tight mb-6">
          Drive Your Dream Car Today
        </h1>

        <p className="text-gray-400 text-xl leading-relaxed mb-8">
          Premium self drive car rental service in Bhubaneswar.
          Affordable pricing, luxury experience and easy booking.
        </p>

        <a
  href="https://wa.me/918114763522?text=Hi%20Fortune%20Drive,%20I%20want%20to%20rent%20a%20car"
  target="_blank"
  className="bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 rounded-xl text-white font-bold hover:scale-105 transition inline-block"
>
  BOOK NOW
</a>

      </motion.div>

      {/* Right Side */}
      <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>

        <img
  src={posters[currentSlide]}
  alt="Fortune Drive Poster"
  className="rounded-[30px]"
/>

      </motion.div>

    </section>
  );
}