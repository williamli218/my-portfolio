import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";

export default function Home() {
  return (
    <main className="bg-zinc-100">
      <Hero />
      <About />
      <div className="h-px w-full mt-16 bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      <Education />
      <div className="h-px w-full mt-16 bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      <Experience />
      <div className="h-px w-full mt-16 bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      <Projects />
      <div className="h-px w-full mt-16 bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
      <Skills />
      <Leadership />
    </main>
  );
}
