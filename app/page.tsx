import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Extracurricular from "@/components/Extracurricular";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Extracurricular />
    </main>
  );
}
