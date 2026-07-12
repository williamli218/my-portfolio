"use client"

import Image from "next/image";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function Education() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <section className="flex flex-col items-center pt-16" id="education">
            <h2 className="header">Education</h2>
            <div className="m-8 [perspective:1200px] min-h-[100px]">
                <div className={`relative w-full transition-transform duration-700 [transform-style:preserve-3d] [will-change:transform] ${
        isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>
                    <article className="flex flex-col gap-2 card relative backface-hidden p-4">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/mcgill-university.jpg"
                                alt="McGill University"
                                width={48}
                                height={48}
                                className="border border-black rounded-lg"
                            />
                            <div className="flex-1">
                                <div className="flex flex-wrap justify-between items-center">
                                    <a
                                                href="https://www.mcgill.ca/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link"
                                            >
                                                <h3 className="font-bold inline">
                                                    McGill University
                                                    <ExternalLink size={12} className="inline-block ml-1 relative -top-0.5" />
                                                </h3>
                                            </a>
                                    <span className="text-zinc-700 text-sm">Montreal, Canada</span>
                                </div>
                                <p className="italic">B.Eng - Software Engineering Co-op</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p>August 2025 - May 2029</p>
                            <button
                                onClick={() => setIsFlipped(true)}
                                aria-label="Show relevant coursework"
                                className="border rounded-lg px-3 py-1 text-sm hover:bg-zinc-100 transition-colors"
                            >
                                →
                            </button>
                        </div>
                        <p>
                            <span className="border rounded-lg p-1 bg-zinc-100">GPA: 4.0/4.0</span>
                        </p>
                        <p className="font-semibold">Richard Karper Scholarship in Engineering ($3,000)</p>
                    </article>
                    <article className="flex gap-8 p-4 items-center card absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
                        <button
                            onClick={() => setIsFlipped(false)}
                            aria-label="Back to overview"
                            className="border rounded-lg px-3 py-1 text-sm hover:bg-zinc-100 transition-colors"
                        >
                            ←
                        </button>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-semibold">Relevant Coursework</h4>
                            <ul className="list-disc list-outside">
                                <li>Algorithms and Data Structures</li>
                                <li>Software Engineering</li>
                                <li>Operating Systems</li>
                                <li>Database Systems</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}