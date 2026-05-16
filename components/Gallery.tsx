export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#02021a] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-6xl font-bold text-cyan-400 text-center mb-20">
          Our Gallery
        </h2>

        {/* Gallery Images */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {/* Image 1 */}

          <div className="overflow-hidden rounded-[30px] shadow-xl hover:scale-105 transition duration-300">
            <img
              src="/gallery1.jpg"
              alt="Gallery"
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* Image 2 */}

          <div className="overflow-hidden rounded-[30px] shadow-xl hover:scale-105 transition duration-300">
            <img
              src="/gallery2.jpg"
              alt="Gallery"
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* Image 3 */}

          <div className="overflow-hidden rounded-[30px] shadow-xl hover:scale-105 transition duration-300">
            <img
              src="/gallery3.jpg"
              alt="Gallery"
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* Image 4 */}

          <div className="overflow-hidden rounded-[30px] shadow-xl hover:scale-105 transition duration-300">
            <img
              src="/gallery4.jpg"
              alt="Gallery"
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* Image 5 */}

          <div className="overflow-hidden rounded-[30px] shadow-xl hover:scale-105 transition duration-300">
            <img
              src="/gallery5.jpg"
              alt="Gallery"
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* Image 6 */}

          <div className="overflow-hidden rounded-[30px] shadow-xl hover:scale-105 transition duration-300">
            <img
              src="/gallery6.jpg"
              alt="Gallery"
              className="w-full h-[380px] object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
}