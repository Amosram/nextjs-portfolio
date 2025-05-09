import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { SVGMaskEffectDemo } from "@/components/SVGMaskEffectDemo";


export default function Home() {
  return (
    <main className="min-h-screen  text-neutral-300 ">
      <Hero/>
      <About/>
      <Skills/>
      <SVGMaskEffectDemo/>
      <Projects/>
      <Contact/>
      
    </main>
  );
}
