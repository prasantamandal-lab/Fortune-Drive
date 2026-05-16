import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cars from "@/components/Cars";
import CarList from "@/components/CarList";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black text-white">

      <Navbar />

      <Hero />

      <Cars />

      <CarList />

      <Gallery />

      <WhyChooseUs />

      <Testimonials />

      <Footer />

      <WhatsappButton />

    </main>
  );
}