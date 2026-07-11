import Image from "next/image";

const icons = [
    { src: "/typescript.svg", alt: "TypeScript" },
    { src: "/react.svg", alt: "React" },
    { src: "/next-js.svg", alt: "Next.js" },
    { src: "/tailwind.svg", alt: "Tailwind CSS" },
    { src: "/html.svg", alt: "HTML5" },
    { src: "/css.svg", alt: "CSS" }
];

export default function Projects() {
    return (
        <section id="projects">
            <h2 className="header text-center pt-16">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-8">
                <article className="flex flex-col gap-2 card">
                    <Image 
                        src="/portfolio.jpg"
                        alt="Portfolio"
                        width={96}
                        height={96}
                    />
                    <div className="flex flex-wrap justify-between items-center">
                        <h3 className="font-bold">Portfolio</h3>
                        <span className="text-zinc-700 text-sm">Front-End</span>
                    </div>
                    <p>Built a responsive personal portfolio using Next.js, TypeScript, and Tailwind CSS, with semantic HTML and reusable components for a clean, accessible UI.</p>
                    <div className="flex gap-2 flex-wrap">
                        {icons.map((icon) => (
                            <Image
                                key={icon.alt}
                                src={icon.src}
                                alt={icon.alt}
                                width={24}
                                height={24}
                            />
                        ))}
                    </div>
                    <figure className="flex gap-2 items-center border rounded-lg p-1 self-start">
                        <Image
                            src="/github.svg"
                            alt="GitHub"
                            width={24}
                            height={24}
                        />
                        <figcaption>
                            <a href="https://github.com/williamli218/my-portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </figcaption>
                    </figure>
                </article>
            </div>
        </section>
    );
}
