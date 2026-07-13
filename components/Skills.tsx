"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn"

const programmingLanguages = [
    { src: "/python.svg", alt: "Python" },
    { src: "/bash.svg", alt: "Bash" },
    { src: "/c.svg",  alt: "C" },
    { src: "/csharp.svg", alt: "C#" },
    { src: "/java.svg", alt: "Java" },
    { src: "/typescript.svg", alt: "TypeScript" },
    { src: "/javascript.svg", alt: "JavaScript" },
    { src: "/html.svg", alt: "HTML" },
    { src: "/css.svg", alt: "CSS" }
]

const frameworksLibrariesTools = [
    { src: "/next-js.svg", alt: "Next.js" },
    { src: "/react.svg", alt: "React" },
    { src: "/tailwind.svg", alt: "Tailwind" },
    { src: "/unity.svg", alt: "Unity" },
    { src: "/linux.svg", alt: "Linux" },
    { src: "/github.svg", alt: "GitHub" }
]

function IconGrid({ items }: { items: { src: string; alt: string }[] }) {
    const trackRef = useRef<HTMLDivElement>(null);
    const firstGroupRef = useRef<HTMLDivElement>(null);
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        const measure = () => {
            if (firstGroupRef.current && trackRef.current) {
                const groupWidth = firstGroupRef.current.offsetWidth;
                const gap = parseFloat(getComputedStyle(trackRef.current).columnGap || "0");
                setDistance(groupWidth + gap);
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [items]);

    return (
        <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
                ref={trackRef}
                className="flex gap-8 md:gap-12 w-max animate-scroll-left"
                style={{ "--scroll-distance": `${distance}px` } as React.CSSProperties}
            >
                <div ref={firstGroupRef} className="flex gap-8 md:gap-12 shrink-0">
                    {items.map((item) => (
                        <figure 
                            key={item.alt} 
                            className="shrink-0 flex flex-col items-center"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={72}
                                height={72}
                                className="rounded-lg w-[48px] h-[48px] md:w-[72px] md:h-[72px]"
                            />
                            <figcaption className="text-center">{item.alt}</figcaption>
                        </figure>
                    ))}
                </div>

                <div 
                    className="flex gap-8 md:gap-12 shrink-0" 
                    aria-hidden="true"
                >
                    {[...items, ...items, ...items].map((item, index) => (
                        <figure key={`${item.alt}-${index}dup`} className="shrink-0 flex flex-col items-center">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={72}
                                height={72}
                                className="rounded-lg w-[48px] h-[48px] md:w-[72px] md:h-[72px]"
                            />
                            <figcaption className="text-center">{item.alt}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Skills() {
    const titleFade = useFadeIn();
    const languagesFade = useFadeIn();
    const toolsFade = useFadeIn();

    return (
        <section 
            className="flex flex-col gap-4 items-center pt-16 mx-8 md:mx-16" 
            id="skills"
        >
            <h2 
                ref={titleFade.ref}
                className={`header fade-in-section ${titleFade.isVisible ? "is-visible" : ""}`}
            >
                Technical Skills
            </h2>
            
            <div 
                ref={languagesFade.ref}
                className={`w-full flex flex-col items-center gap-4 fade-in-section ${languagesFade.isVisible ? "is-visible" : ""}`}
            >
                <h3 className="font-bold text-xl">Programming Languages</h3>
                <IconGrid items={programmingLanguages} />
            </div>

            <div 
                ref={toolsFade.ref}
                className={`w-full flex flex-col items-center gap-4 fade-in-section ${toolsFade.isVisible ? "is-visible" : ""}`}
            >
                <h3 className="font-bold text-xl">Frameworks, Libraries & Tools</h3>
                <IconGrid items={frameworksLibrariesTools} />
            </div>
        </section>
    );
}