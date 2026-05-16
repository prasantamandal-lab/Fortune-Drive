export default function Testimonials() {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-300 text-xl">
            Trusted by hundreds of happy customers across Odisha.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="bg-[#11164d] rounded-[35px] p-10 border border-cyan-500/10 hover:scale-105 transition duration-300">

            <div className="flex items-center gap-4 mb-6">
              <img
                src="/user1.jpg"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="text-2xl font-semibold">
                  Rahul Sharma
                </h3>

                <p className="text-cyan-400">
                  Bhubaneswar
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-9">
              “Amazing service and very clean cars. Booking process was super smooth and support team was very helpful.”
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-[#11164d] rounded-[35px] p-10 border border-cyan-500/10 hover:scale-105 transition duration-300">

            <div className="flex items-center gap-4 mb-6">
              <img
                src="/user2.jpg"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="text-2xl font-semibold">
                  Priya Das
                </h3>

                <p className="text-cyan-400">
                  Cuttack
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-9">
              “Affordable pricing and luxury experience. One of the best self-drive rental services in Odisha.”
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-[#11164d] rounded-[35px] p-10 border border-cyan-500/10 hover:scale-105 transition duration-300">

            <div className="flex items-center gap-4 mb-6">
              <img
                src="/user3.jpg"
                alt=""
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="text-2xl font-semibold">
                  Aman Verma
                </h3>

                <p className="text-cyan-400">
                  Puri
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-9">
              “24/7 customer support impressed me a lot. Cars were properly maintained and comfortable for long trips.”
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}