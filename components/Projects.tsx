import Image from "next/image";
import { SiHtml5, SiCss, SiTailwindcss, SiReact, SiTypescript, SiNextdotjs, SiGithub } from "@icons-pack/react-simple-icons";

export default function Projects() {
    return (
        <section className="flex flex-col items-center">
            <h2>Projects</h2>
            <article>
                <Image 
                    src="/portfolio.jpg"
                    alt="Portfolio"
                    width={96}
                    height={96}
                />
                <h3>Portfolio</h3>
                <span>Front-End</span>
                <p>Engineered a responsive personal portfolio website utilizing TypeScript, Tailwind CSS, and HTML/CSS for a polished UI, integrating a Node.js backend to manage dynamic content delivery and optimized page rendering.</p>
                <SiTypescript />
                <SiReact />
                <SiNextdotjs />
                <SiTailwindcss />
                <SiHtml5 />
                <SiCss />
                <SiGithub />
                <a href="https://github.com/williamli218/my-portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
            </article>
        </section>
    );
}