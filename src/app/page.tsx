import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
