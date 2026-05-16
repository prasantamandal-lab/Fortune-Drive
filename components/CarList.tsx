const cars = [
  {
    name: "Mahindra Scorpio",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/128413/scorpio-n-exterior-right-front-three-quarter.jpeg",
  },

  {
    name: "Mahindra XUV700",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter.jpeg",
  },

  {
    name: "Mahindra Thar",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter.jpeg",
  },

  {
    name: "Kia Seltos",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/144185/seltos-exterior-right-front-three-quarter.jpeg",
  },

  {
    name: "Toyota Glanza",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/112839/glanza-exterior-right-front-three-quarter.jpeg",
  },

  {
    name: "Maruti Fronx",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-front-three-quarter.jpeg",
  },

  {
    name: "Maruti Swift",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg",
  },

  {
    name: "Hyundai Creta",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter.jpeg",
  },
];

export default function CarList() {
  return (
    <section id="cars" className="bg-[#02021a] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-6xl font-bold text-cyan-400 text-center mb-16">
          All Cars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-[#111133] rounded-[30px] p-5 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20"
            >

              <img
                src={car.image}
                alt={car.name}
                className="w-full h-[220px] object-cover rounded-2xl"
              />

              <h3 className="text-white text-2xl font-bold mt-5 mb-4">
                {car.name}
              </h3>

              <div className="flex items-center justify-between">

                <button className="text-cyan-400 font-semibold hover:text-white transition">
                  View Details
                </button>

                <button className="bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 rounded-xl text-white font-bold hover:scale-105 transition">
                  BOOK NOW
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}