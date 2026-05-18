export default function Footer() {
  return (
    <footer id="contact" className="bg-[#070b2a] text-white pt-20 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">

        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-4 mb-6">

  <img
    src="/logo.png"
    alt="Fortune Drive"
    className="w-14 h-14 rounded-full object-cover"
  />

  <h2 className="text-4xl font-bold text-cyan-400">
    Fortune Drive
  </h2>

</div>

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
           <li>
  <a href="/" className="hover:text-cyan-400 transition">
    Home
  </a>
</li>

<li>
  <a href="/#allcars" className="hover:text-cyan-400 transition">
    Cars
  </a>
</li>

<li>
  <a href="/#gallery" className="hover:text-cyan-400 transition">
    Gallery
  </a>
</li>

<li>
  <a href="/about" className="hover:text-cyan-400 transition">
    About Us
  </a>
</li>

<li>
  <a href="/terms" className="hover:text-cyan-400 transition">
    Terms & Conditions
  </a>
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
              📍 Nuagaon Square, Near Sum Hospital, Gothapatana Road, Bhubaneswar 751029
            </p>

            <a
  href="tel:+918114763522"
  className="hover:text-cyan-400 transition"
>
  📞 +91 8114763522
</a>

            <p>
              📧 fortunedrive84@gmail.com
            </p>

            <p>
              🕒 24/7 Customer Support
            </p>

          </div>
        </div>

      </div>

      <div className="flex gap-6 mt-6">

  {/* Instagram */}
  <a
    href="https://instagram.com/fortune__drive_carrental_bbsr"
    target="_blank"
  >
    <img
      src="/social/instagram.png"
      alt="Instagram"
      className="w-12 h-12 hover:scale-110 transition duration-300"
    />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/918114763522"
    target="_blank"
  >
    <img
      src="/social/whatsapp.png"
      alt="WhatsApp"
      className="w-12 h-12 hover:scale-110 transition duration-300"
    />
  </a>

  {/* Facebook */}
  <a
  href="https://facebook.com/fortunedrivecarrental"
  target="_blank"
>
  <img
    src="/social/facebook.png"
    alt="Facebook"
    className="w-12 h-12 hover:scale-110 transition duration-300"
  />
</a>

</div>



      {/* Bottom */}
      <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400 text-lg">
        © 2026 Fortune Drive. All Rights Reserved.
      </div>

    </footer>
  );
}