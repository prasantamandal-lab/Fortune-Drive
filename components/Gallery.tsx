export default function Gallery() {

  const images = [
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery6.jpg",
    "/gallery/gallery7.jpg",
    "/gallery/gallery8.jpg",
  ];

  return (

    <section
      id="gallery"
      className="bg-[#02021a] py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-6xl font-bold text-cyan-400 text-center mb-16">
          Gallery
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {images.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-[30px] bg-[#111133] hover:scale-105 transition duration-300 shadow-xl hover:shadow-cyan-500/20"
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[280px] object-cover"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}