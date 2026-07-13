"use client"

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

type Project = {
    title: string;
    category: string;
    src: string;
    alt: string;
    description: string;
    tools: { src: string; alt: string }[];
    github: string;
};

export function ProjectCard({
    project,
    onSelect,
}: {
    project: Project;
    onSelect: (project: Project) => void;
}) {
    const { ref, isVisible } = useFadeIn();

    return (
        <div 
            ref={ref} 
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        >
            <article className="flex flex-col gap-2 card">
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
                            <span className="text-zinc-700 text-xs uppercase tracking-wide">{project.category}</span>
                        </div>
                        <button
                            onClick={() => onSelect(project)}
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
        </div>
    );
}