import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Motto from "./components/Motto";
import Why from "./components/Why";
import Feature from "./components/Feature";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import Footer from "./components/Footer";
import { CourseCarousel } from "./components/CourseCarousel";
export default function Home() {
  return (
    <>
      <main className="px-32 pt-3">
        <Navbar />
        <Hero />
        <Motto />
        <Feature />
        <CourseCarousel />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
