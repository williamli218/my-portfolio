import Image from "next/image";
import { ExternalLink } from "lucide-react";

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
]

export default function Experience() {
    return (
        <section className="flex flex-col items-center pt-16" id="experience">
            <h2 className="header">Experience</h2>

            <div className="relative max-w-2xl mx-8 mt-8">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-900" />
                <div className="space-y-8">
                    {experiences.map(experience => (
                        <div key={experience.organization} className="relative">
                            <div className="absolute left-0 top-19 w-3 h-3 -translate-x-1/2 rounded-full bg-zinc-100 border-2 border-zinc-900" />
                            <article className="ml-6 md:ml-8 flex flex-col gap-2 card p-4">
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
                                                    <ExternalLink size={12} className="inline-block ml-1 relative -top-0.5" />
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
                    ))}
                </div>
            </div>

        </section>
    )
}