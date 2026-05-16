export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8 py-20 gap-16">

      {/* Left Side */}
      <div className="max-w-xl">

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

        <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30">
          Book Now
        </button>

      </div>

      {/* Right Side */}
      <div>

        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Car"
          className="w-[700px] rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
        />

      </div>

    </section>
  );
}