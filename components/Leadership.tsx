"use client"

import { useState, useRef, useEffect } from "react";
import { useFadeIn } from "@/hooks/useFadeIn"

const extracurricular = [
    {
        title: "Math olympiad medalists",
        description: "School champion of uWaterloo's Euclid, CSMC, Fermat, Cayley and Pascal math contests",
        type: "Math contest",
        src: "/math.jpg"
    },
    {
        title: "Piano teacher",
        description: "Gave one-to-one piano lessons and animated a music summer camp",
        type: "Part-time job",
        src: "/piano.jpg"
    },
    {
        title: "Mathematics and Biology Academic Achievement Awards",
        description: "Best grades in cohort in mathematics and biology during cégep",
        type: "Academic awards",
        src: "/awards.jpg"
    }
];

const SWIPE_THRESHOLD = 50;
const SLIDE_DURATION = 5000; 

function ProgressBar({ duration }: { duration: number }) {
    const [filled, setFilled] = useState(false);

    useEffect(() => {
        setFilled(false);

        const raf = requestAnimationFrame(() => {
            requestAnimationFrame(() => setFilled(true));
        });

        return () => cancelAnimationFrame(raf);
    }, [duration]);

    return (
        <div
            className="h-full bg-zinc-900 rounded-full"
            style={{
                width: filled ? "100%" : "0%",
                transition: filled ? `width ${duration}ms linear` : "none",
            }}
        />
    );
}

export default function Leadership() {
    const [index, setIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchDeltaX = useRef(0);
    const title = useFadeIn();
    const content = useFadeIn();

    const goPrev = () => {
        setIndex((current) => (current === 0 ? extracurricular.length - 1 : current - 1));
    };

    const goNext = () => {
        setIndex((current) => (current === extracurricular.length - 1 ? 0 : current + 1));
    };

    const goTo = (i: number) => {
        setIndex(i);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            goNext();
        }, SLIDE_DURATION);

        return () => clearInterval(timer);
    }, [index]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchDeltaX.current = 0;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    };

    const handleTouchEnd = () => {
        if (touchDeltaX.current > SWIPE_THRESHOLD) {
            goPrev();
        } else if (touchDeltaX.current < -SWIPE_THRESHOLD) {
            goNext();
        }
        touchStartX.current = null;
        touchDeltaX.current = 0;
    };

    return (
        <section 
            id="leadership" 
            className="pt-16 flex flex-col items-center px-8 pb-16"
        >
            <h2 
                className={`header fade-in-section ${title.isVisible ? "is-visible" : ""}`}
                ref={title.ref}
            >
                Leadership
            </h2>

            <div 
                className={`relative flex items-center gap-8 my-8 w-full md:w-3xl fade-in-section ${content.isVisible ? "is-visible" : ""}`}
                ref={content.ref}
            >
                <button
                    onClick={goPrev}
                    aria-label="Previous"
                    className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center rounded-full border hover:bg-zinc-200 transition-colors z-10"
                >
                    ←
                </button>

                <div
                    className="relative w-full h-96 md:h-128 overflow-hidden rounded-lg touch-pan-y"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex h-full transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {extracurricular.map((item) => (
                            <article
                                key={item.title}
                                style={{ backgroundImage: `url(${item.src})` }}
                                className="relative shrink-0 w-full h-full bg-cover bg-center bg-no-repeat"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <span className="text-xs uppercase tracking-wide">{item.type}</span>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-sm">{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <button
                    onClick={goNext}
                    aria-label="Next"
                    className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center rounded-full border hover:bg-zinc-200 transition-colors z-10"
                >
                    →
                </button>
            </div>

            <div className="flex gap-2 items-center">
                {extracurricular.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 rounded-full bg-zinc-300 overflow-hidden transition-all duration-300 ${
                            i === index ? "w-10" : "w-2"
                        }`}
                    >
                        {i === index && <ProgressBar key={index} duration={SLIDE_DURATION} />}
                    </button>
                ))}
            </div>
        </section>
    );
}