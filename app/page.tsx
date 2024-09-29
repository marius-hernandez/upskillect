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
      <main className="
      lg:px-32 
      md:px-20
      sm:px-10
      pt-3 pb-32">
        <Navbar />
        <Hero />
        <Motto />
        <Feature />
        <CourseCarousel section={"Trainings Near You"} />
        <Testimonials />
        <FAQ />
        <CourseCarousel section={"Limited Training Sale"} />
      </main>
      <Footer />
    </>
  );
}
