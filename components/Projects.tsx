"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
    {
        title: "Portfolio",
        category: "Front-End",
        src: "/portfolio.png",
        alt: "portfolio",
        description: "Built a responsive personal portfolio using Next.js, React, TypeScript, and Tailwind CSS, with semantic HTML and reusable components for a clean, accessible UI.",
        tools: [
            { src: "/typescript.svg", alt: "TypeScript" },
            { src: "/react.svg", alt: "React" },
            { src: "/next-js.svg", alt: "Next.js" },
            { src: "/tailwind.svg", alt: "Tailwind CSS" },
            { src: "/html.svg", alt: "HTML" },
            { src: "/css.svg", alt: "CSS" }
        ],
        github: "https://github.com/williamli218/my-portfolio"
    }
];

export default function Projects() {
    const [selected, setSelected] = useState<typeof projects[0] | null>(null);

    useEffect(() => {
        if (selected) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        // cleanup: always restore scroll if component unmounts while modal is open
        return () => {
            document.body.style.overflow = "";
        };
    }, [selected])

    return (
        <section id="projects">
            <h2 className="header text-center pt-16">Projects</h2>
            <div className="m-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-5xl">
                    {projects.map((project) => (
                        <article className="flex flex-col gap-2 card" key={project.title}>
                            <Image
                                src={project.src}
                                alt={project.alt}
                                width={1200}
                                height={800}
                                className="w-full h-auto rounded-t-lg border-b border-black"
                            />
                            <div className="flex flex-col gap-4 p-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <h3 className="font-bold">{project.title}</h3>
                                        <span className="text-zinc-700 text-sm">{project.category}</span>
                                    </div>
                                    <button
                                        onClick={() => setSelected(project)}
                                        className="border rounded-lg bg-zinc-100 p-1 hover:bg-zinc-200 transition-colors"
                                    >
                                        More details
                                    </button>
                                </div>
                                <div className="flex gap-2">
                                    {project.tools.map((tool) => (
                                        <Image
                                            key={tool.alt}
                                            src={tool.src}
                                            alt={tool.alt}
                                            width={24}
                                            height={24}
                                        />
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div
                onClick={() => setSelected(null)}
                className={`fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
                    selected ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                {selected && (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`border bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transition-all duration-300 ${
                            selected ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                    >
                        <button
                            onClick={() => setSelected(null)}
                            aria-label="Close"
                            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors text-xl leading-none z-10"
                        >
                            ×
                        </button>

                        <Image
                            src={selected.src}
                            alt={selected.alt}
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-t-lg border-b border-black"
                        />

                        <div className="p-8 flex flex-col gap-4">
                            <div>
                                <span className="text-zinc-700 text-sm">{selected.category}</span>
                                <h3 className="font-bold text-lg">{selected.title}</h3>
                            </div>
                            <p>{selected.description}</p>
                            <div className="flex gap-2 flex-wrap">
                                {selected.tools.map((tool) => (
                                    <span
                                        key={tool.alt}
                                        className="text-sm rounded-lg bg-zinc-100 text-zinc-700 p-1 border"
                                    >
                                        {tool.alt}
                                    </span>
                                ))}
                            </div>
                            <figure className="flex gap-2 items-center border rounded-lg p-1 self-start bg-black text-white">
                                <Image src="/github.svg" alt="GitHub" width={24} height={24} />
                                <figcaption>
                                    <a href={selected.github} target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}