export default function Cars() {
  return (
    <section className="bg-[#02021a] py-24 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-6xl font-bold text-white mb-6">
          Book Your Car
        </h2>

        <div className="flex justify-center gap-4 mb-14">

          <button className="bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3 rounded-full text-white font-semibold">
            Daily Drives
          </button>

          <button className="bg-[#111133] px-8 py-3 rounded-full text-white font-semibold">
            Subscription
          </button>

        </div>

        {/* Booking Box */}

        <div className="bg-[#111133] rounded-[30px] p-12 shadow-2xl shadow-cyan-500/10">

          <h3 className="text-4xl font-bold text-white mb-3">
            Looking for the best car rentals?
          </h3>

          <p className="text-gray-300 mb-12 text-lg">
            Book Self-Drive Car Rentals Across Odisha
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

            {/* Destination */}

            <div>
              <label className="text-white block mb-3 text-left">
                Destination
              </label>

              <input
                type="text"
                placeholder="Enter Destination"
                className="w-full px-5 py-4 rounded-xl bg-white text-black outline-none"
              />
            </div>

            {/* Car Name */}

<div>
  <label className="text-white block mb-3 text-left">
    Select Car
  </label>

  <select className="w-full px-5 py-4 rounded-xl bg-white text-black outline-none">

    <option>Choose Car</option>
    <option>Mahindra Thar</option>
    <option>Hyundai Creta</option>
    <option>Kia Seltos</option>
    <option>Maruti Swift</option>
    <option>Tata Nexon</option>
    <option>Scorpio N</option>

  </select>
</div>

            {/* Contact Number */}

            <div>
              <label className="text-white block mb-3 text-left">
                Contact Number
              </label>

              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full px-5 py-4 rounded-xl bg-white text-black outline-none"
              />
            </div>

            {/* Trip Start */}

            <div>
              <label className="text-white block mb-3 text-left">
                Trip Start
              </label>

              <input
                type="datetime-local"
                className="w-full px-5 py-4 rounded-xl bg-white text-black outline-none"
              />
            </div>

            {/* Trip End */}

            <div>
              <label className="text-white block mb-3 text-left">
                Trip End
              </label>

              <input
                type="datetime-local"
                className="w-full px-5 py-4 rounded-xl bg-white text-black outline-none"
              />
            </div>

          </div>

          {/* Button */}

          <div className="mt-10">

            <button className="bg-gradient-to-r from-cyan-400 to-purple-500 px-12 py-4 rounded-full text-white text-xl font-bold hover:scale-105 transition-all duration-300">
              BOOK NOW
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}