"use client"

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

type Experience = {
    logo: string;
    organization: string;
    href: string;
    role: string;
    location: string;
    dates: string;
    responsibilities: string[];
};

export function ExperienceCard({ experience }: { experience: Experience }) {
    const { ref, isVisible } = useFadeIn();

    return (
        <div ref={ref} className="relative">
            <div className="absolute left-0 top-19 w-3 h-3 -translate-x-1/2 rounded-full bg-zinc-100 border-2 border-zinc-900" />
            <div className={`ml-6 md:ml-8 fade-in-section ${isVisible ? "is-visible" : ""}`}>
                <article className="flex flex-col gap-2 card p-4">
                    <div className="flex items-center gap-4">
                        <Image
                            src={experience.logo}
                            alt={experience.organization}
                            width={48}
                            height={48}
                            className="border border-black rounded-lg"
                        />
                        <div className="flex-1">
                            <div className="flex flex-wrap justify-between items-center">
                                <a
                                    href={experience.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    <h3 className="font-bold inline">
                                        {experience.organization}
                                        <ExternalLink 
                                            size={12} 
                                            className="inline-block ml-1 relative -top-0.5" 
                                        />
                                    </h3>
                                </a>
                                <span className="text-zinc-700 text-sm">{experience.location}</span>
                            </div>
                            <h4 className="italic">{experience.role}</h4>
                        </div>
                    </div>
                    <span className="text-sm rounded-lg bg-zinc-100 text-zinc-700 w-fit p-1 border">{experience.dates}</span>
                    <ul className="list-disc list-outside flex flex-col gap-2 ml-4">
                        {experience.responsibilities.map((resp) => (
                            <li key={resp}>{resp}</li>
                        ))}
                    </ul>
                </article>
            </div>
        </div>
    );
}