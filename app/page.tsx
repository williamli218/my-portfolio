import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";

function Divider() {
    return (
        <div className="h-px w-full mt-16 bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
    );
}

export default function Home() {
    return (
        <main className="bg-zinc-100">
            <Hero />
            <About />
            <Divider />
            <Education />
            <Divider />
            <Experience />
            <Divider />
            <Projects />
            <Divider />
            <Skills />
            <Divider />
            <Leadership />
        </main>
    );
}
