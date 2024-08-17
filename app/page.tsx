import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Motto from "./components/Motto";
import Why from "./components/Why";
import Feature from "./components/Feature";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Motto />
      <Feature />
      <Testimonials />
      <FAQ />
    </main>
  );
}
