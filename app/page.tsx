import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="min-h-[100vh]  text-white">
      <Hero/>
      <About/>
      <Skills/>
    </main>
  );
}
