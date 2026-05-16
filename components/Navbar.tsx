"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/10">

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
          Fortune Drive
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-xl font-medium text-white">

          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#cars" className="hover:text-cyan-400 transition">
              Cars
            </a>
          </li>

          <li>
            <a href="#gallery" className="hover:text-cyan-400 transition">
              Gallery
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-4xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b102d] px-6 py-6">

          <ul className="flex flex-col gap-6 text-xl text-white">

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#cars">Cars</a>
            </li>

            <li>
              <a href="#gallery">Gallery</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

          </ul>

        </div>
      )}

    </header>
  );
}