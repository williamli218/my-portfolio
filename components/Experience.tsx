"use client"

import { useFadeIn } from "@/hooks/useFadeIn";
import { ExperienceCard } from "./ExperienceCard";

const experiences = [
    {
        logo: "/environnement-routier-nrj.jpg",
        organization: "NRJ Environnement Routier",
        href: "https://nrj.ca/",
        role: "Software Developer Intern",
        location: "Montreal, Canada",
        dates: "May 2026 - August 2026",
        responsibilities: [
            "Migrated a legacy MS Access 2007 database to Access 365, rebuilding VBA logic and SQL queries while adding custom features for client needs.",
            "Refactored obsolete VBA code and optimized queries, improving application speed, data integrity, and stability."
        ]
    },
    {
        logo: "/mcgill-aerial-design-team.jpg",
        organization: "McGill Aerial Design Team",
        href: "https://www.mcgillaerialdesign.com/",
        role: "Ground Station & Operator UX",
        location: "Montreal, Canada",
        dates: "October 2025 - April 2026",
        responsibilities: [
            "Built custom MissionPlanner plugins and UI (C#, .NET) to surface telemetry data and improve operator awareness.",
            "Configured the Raspberry Pi ground station, scripting hardware, video, and radio connections in Bash.",
            "Wrote low-level C++ to interface with physical controls, mapping inputs to real-time flight commands."
        ]
    },
    {
        logo: "/gamedev-mcgill.jpg",
        organization: "GameDev McGill",
        href: "https://gamedevmcgill.ca/",
        role: "Game Developer",
        location: "Montreal, Canada",
        dates: "September 2025 - Present",
        responsibilities: [
            "Built gameplay mechanics and game logic in Unity using C# and OOP principles."
        ]
    }
];

export default function Experience() {
    const title = useFadeIn();

    return (
        <section 
            className="flex flex-col items-center pt-16" 
            id="experience">

            <h2
                ref={title.ref}
                className={`header fade-in-section ${title.isVisible ? "is-visible" : ""}`}
            >
                Experience
            </h2>

            <div className="relative max-w-2xl mx-8 mt-8">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-900" />
                <div className="space-y-8">
                    {experiences.map((experience) => (
                        <ExperienceCard 
                            key={experience.organization} 
                            experience={experience} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}