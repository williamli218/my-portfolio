import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Extracurricular from "@/components/Extracurricular";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Extracurricular />
    </main>
  );
}
