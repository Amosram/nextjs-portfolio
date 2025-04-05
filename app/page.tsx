import About from "@/components/About";
import Hero from "@/components/Hero";
import NavbarMain from "@/components/Navbar";
import Skills from "@/components/Skills";
import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-[100vh]  text-white">
      <Hero/>
      <About/>
      <Skills/>
    </main>
  );
}
