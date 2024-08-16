import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Motto from "./components/Motto";
import Why from "./components/Why";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Motto />
      <Why />
    </main>
  );
}
