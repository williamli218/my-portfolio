"use client"

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn"

export default function About() {
    const title = useFadeIn();
    const content = useFadeIn();

    return (
        <section className="flex flex-col items-center pt-16 max-w-2xl mx-auto gap-4">
            <h2 
                className={`text-center header animate-rainbow-text fade-in-section ${title.isVisible ? "is-visible" : ""}`}
                ref={title.ref}
            >
                About
            </h2>
            <article 
                className={`flex flex-col md:flex-row items-center card gap-4 mx-8 md:mx-0 p-4 fade-in-section ${content.isVisible ? "is-visible" : ""}`}
                ref={content.ref}
            >
                <p className="order-2 md:order-1 text-center md:text-left md:text-2xl">
                    I am an aspiring software developer, currently exploring the exciting world of computer science. I enjoy learning new concepts and tackling coding challenges both inside and outside the classroom. Come take a look at my experience and personal projects.
                </p>
                <Image 
                    src="/about.jpg"
                    alt="About"
                    height={700}
                    width={500}
                    className="order-1 md:order-2 rounded-lg h-70 w-auto"
                />
            </article>
        </section>
    );
}