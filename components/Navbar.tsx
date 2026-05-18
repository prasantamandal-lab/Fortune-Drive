"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500">
      
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Fortune Drive"
            className="w-14 h-14 rounded-full object-cover"
          />

          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Fortune Drive
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-xl font-medium text-white">

          <li>
            <a
              href="/"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              className="hover:text-cyan-400 transition"
            >
              About Us
            </a>
          </li>

          <li>
            <a
              href="/#allcars"
              className="hover:text-cyan-400 transition"
            >
              All Cars
            </a>
          </li>

          <li>
            <a
              href="/#gallery"
              className="hover:text-cyan-400 transition"
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="/#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="/terms"
              className="hover:text-cyan-400 transition"
            >
              Terms
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white text-4xl"
        >
          ☰
        </button>

      </nav>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <>
          {/* Blur Background */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="md:hidden fixed top-0 right-0 h-screen w-[280px] bg-[#10154d] z-50 px-6 py-8 shadow-2xl overflow-y-auto">

            {/* Top */}
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold text-cyan-400">
                Menu
              </h2>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-4xl text-white"
              >
                ×
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-6 text-xl text-white">

              <li>
                <a href="/" onClick={() => setMenuOpen(false)}>
                  🏠 Home
                </a>
              </li>

              <li>
                <a href="/about" onClick={() => setMenuOpen(false)}>
                  ℹ️ About Us
                </a>
              </li>

              <li>
                <a href="/#allcars" onClick={() => setMenuOpen(false)}>
                  🚗 All Cars
                </a>
              </li>

              <li>
                <a href="/#gallery" onClick={() => setMenuOpen(false)}>
                  🖼️ Gallery
                </a>
              </li>

              <li>
                <a href="/#contact" onClick={() => setMenuOpen(false)}>
                  📞 Contact
                </a>
              </li>

              <li>
                <a href="/terms" onClick={() => setMenuOpen(false)}>
                  📜 Terms & Conditions
                </a>
              </li>

              <li>
                <a href="/privacy" onClick={() => setMenuOpen(false)}>
                  🔒 Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" onClick={() => setMenuOpen(false)}>
                  ❓ FAQs
                </a>
              </li>

              <li>
                <a href="#" onClick={() => setMenuOpen(false)}>
                  🛠️ Help & Support
                </a>
              </li>

            </ul>

          </div>
        </>
      )}
    </header>
  );
}