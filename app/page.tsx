import Image from "next/image";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <About />
    </main>
  );
}
