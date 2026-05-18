import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="h-[350px] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Heading */}
        <h1 className="relative z-10 text-7xl font-bold text-white">
          Terms & Conditions
        </h1>
      </div>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Important Notice */}
        <div className="bg-orange-500 text-white rounded-3xl p-8 mb-16 shadow-xl">

          <h2 className="text-4xl font-bold mb-6">
            ⚠ Important Notice
          </h2>

          <p className="text-xl leading-10">
            Fortune Drive is not responsible for any
            item left inside the vehicle. Customers are
            requested to check all belongings before
            returning the car.
          </p>

        </div>

        {/* Terms Sections */}
        <div className="space-y-14">

          {/* Section 1 */}
          <div className="bg-[#10154d] rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-cyan-400 mb-6">
              📄 Rental Terms & Vehicle Return
            </h2>

            <ul className="space-y-4 text-gray-300 text-xl leading-9">
              <li>• Vehicle must be returned on time.</li>
              <li>• Extra charges apply for late returns.</li>
              <li>• Inform us before trip extension.</li>
              <li>• Fuel level should remain same.</li>
            </ul>

          </div>

          {/* Section 2 */}
          <div className="bg-[#10154d] rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-cyan-400 mb-6">
              ⚠ Customer Responsibilities
            </h2>

            <ul className="space-y-4 text-gray-300 text-xl leading-9">
              <li>• Customer responsible for traffic fines.</li>
              <li>• Damage charges applicable if caused.</li>
              <li>• Safe driving is mandatory.</li>
              <li>• Illegal activities strictly prohibited.</li>
            </ul>

          </div>

          {/* Section 3 */}
          <div className="bg-[#10154d] rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-cyan-400 mb-6">
              📑 Required Documents
            </h2>

            <ul className="space-y-4 text-gray-300 text-xl leading-9">
              <li>• Valid Driving Licence</li>
              <li>• Aadhaar / Voter ID / Passport</li>
              <li>• College ID / Company ID</li>
            </ul>

          </div>

          {/* Section 4 */}
          <div className="bg-[#10154d] rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-cyan-400 mb-6">
              🚗 Vehicle Usage Guidelines
            </h2>

            <ul className="space-y-4 text-gray-300 text-xl leading-9">
              <li>• Seat belt compulsory.</li>
              <li>• No rash driving allowed.</li>
              <li>• Maximum speed limit applies.</li>
              <li>• Only licence holder can drive.</li>
            </ul>

          </div>

          {/* Section 5 */}
          <div className="bg-[#10154d] rounded-3xl p-10">

            <h2 className="text-4xl font-bold text-cyan-400 mb-6">
              ❌ Cancellation Policy
            </h2>

            <ul className="space-y-4 text-gray-300 text-xl leading-9">
              <li>• Advance payment non-refundable.</li>
              <li>• Cancellation charges may apply.</li>
              <li>• Refund depends on cancellation timing.</li>
            </ul>

          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}