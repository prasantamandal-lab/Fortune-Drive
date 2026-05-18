import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="h-[400px] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Heading */}
        <h1 className="relative z-10 text-7xl font-bold text-white">
          About Us
        </h1>
      </div>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h2 className="text-5xl font-bold text-cyan-400 mb-10">
          About Our Company
        </h2>

        <p className="text-gray-300 text-2xl leading-10 max-w-5xl mx-auto">
          Fortune Drive is a trusted self-drive car rental
          service dedicated to providing premium, affordable,
          and hassle-free travel experiences across Odisha.
          We focus on comfort, convenience, safety and
          customer satisfaction with well-maintained vehicles
          and 24/7 support.
        </p>

        {/* Help Box */}
        <div className="mt-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full py-6 px-8 text-center text-3xl font-bold shadow-[0_0_30px_rgba(0,255,255,0.3)]">
          NEED HELP ? <a
  href="tel:+918114763522"
  className="hover:text-cyan-400 transition"
>
  📞 +91 8114763522
</a>
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-[#10154d] rounded-3xl p-10 text-center hover:scale-105 transition-all duration-300">

            <div className="text-6xl mb-6">
              🚗
            </div>

            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Premium Cars
            </h3>

            <p className="text-gray-300 text-lg leading-8">
              Well-maintained luxury and budget-friendly
              cars for every journey.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-[#10154d] rounded-3xl p-10 text-center hover:scale-105 transition-all duration-300">

            <div className="text-6xl mb-6">
              ⚡
            </div>

            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Easy Booking
            </h3>

            <p className="text-gray-300 text-lg leading-8">
              Fast and hassle-free booking process with
              instant WhatsApp support.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-[#10154d] rounded-3xl p-10 text-center hover:scale-105 transition-all duration-300">

            <div className="text-6xl mb-6">
              🛡️
            </div>

            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Trusted Service
            </h3>

            <p className="text-gray-300 text-lg leading-8">
              Trusted by hundreds of happy customers
              across Odisha.
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}