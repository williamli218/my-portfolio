"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
    { href: "#hero", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#leadership", label: "Leadership" }
]

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-zinc-50 border-b-2 border-zinc-200">
            <div className="flex justify-between items-center">
                <figure className="flex items-center gap-4 p-2">
                    <Image 
                        src="/icon.png"
                        alt="icon"
                        height={36}
                        width={36}
                        className="rounded-full"
                    />
                    <figcaption className="text-2xl font-bold">William Li</figcaption>
                </figure>
                <ul className="hidden md:flex gap-4 pr-4">
                    {links.map((section) => (
                        <li key={section.label}>
                            <a href={section.href}>{section.label}</a>
                        </li>
                    ))}
                </ul>
                <button 
                    className="md:hidden pr-2" 
                    onClick={() => setOpen(!open)} 
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? <X size={36} /> : <Menu size={36} />}
                </button>
            </div>
            {open && (
                <ul className="md:hidden flex flex-col items-center border-t border-zinc-200 divide-y divide-zinc-200">
                    {links.map((section) => (
                        <li key={section.label}>
                            <a href={section.href} onClick={() => setOpen(false)}>
                                {section.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}