export default function Footer() {
  return (
    <footer id="contact" className="bg-[#070b2a] text-white pt-20 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">

        {/* Logo & About */}
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            Fortune Drive
          </h2>

          <p className="text-gray-300 text-lg leading-9">
            Premium self-drive car rental service in Bhubaneswar and across Odisha.
            Affordable pricing, luxury experience and instant booking support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-3xl font-semibold text-cyan-400 mb-8">
            Quick Links
          </h3>

          <ul className="space-y-5 text-lg text-gray-300">
            <li className="hover:text-cyan-400 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition">
              Cars
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition">
              Gallery
            </li>

            <li className="hover:text-cyan-400 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-3xl font-semibold text-cyan-400 mb-8">
            Contact Info
          </h3>

          <div className="space-y-5 text-lg text-gray-300">

            <p>
              📍 Bhubaneswar, Odisha
            </p>

            <p>
              📞 +91 9876543210
            </p>

            <p>
              📧 support@fortunedrive.site
            </p>

            <p>
              🕒 24/7 Customer Support
            </p>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400 text-lg">
        © 2026 Fortune Drive. All Rights Reserved.
      </div>

    </footer>
  );
}