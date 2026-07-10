import Image from "next/image";

const experiences = [
    {
        logo: "/environnement-routier-nrj.jpg",
        organization: "NRJ Environnement Routier",
        role: "Software Developer Intern",
        location: "Montreal, Canada",
        dates: "May 2026 - August 2026",
        responsibilities: [
            "Reverse-engineered a complex MS Access 2007 database (VBA, SQL queries, forms) and migrated it to Access 365, while developing new custom features tailored to specific client demands.",
            "Resolved legacy compatibility issues, refactored obsolete VBA code, and optimized queries to enhance overall application speed, data integrity, and system stability." 
        ]
    },
    {
        logo: "/mcgill-aerial-design-team.jpg",
        organization: "McGill Aerial Design Team",
        role: "Ground Station & Operator UX",
        location: "Montreal, Canada",
        dates: "October 2025 - April 2026",
        responsibilities: [
            "Engineered custom plugins and intuitive UI interfaces within MissionPlanner to surface critical telemetry data, significantly improving operator situational awareness and workflow efficiency (C# & .NET).",
            "Designed the end-to-end ground station architecture and configured the core Raspberry Pi computer, deploying automated Bash scripts to manage hardware connections, Walksnail HD video receivers, and radio transmitters for robust bidirectional drone communication.",
            "Programmed low-level C++ scripts to interface directly with physical switches, buttons, and joysticks, accurately interpreting peripheral inputs to map and execute real-time flight control commands."
        ]
    },
    {
        logo: "/gamedev-mcgill.jpg",
        organization: "GameDev McGill",
        role: "Game Developer",
        location: "Montreal, Canada",
        dates: "September 2025 - Present",
        responsibilities: [
            "Developed interactive games by implementing custom gameplay mechanics and game logic using C# and object-oriented programming principles within the Unity engine."
        ]
    }
]

export default function Experience() {
    return (
        <section className="flex flex-col items-center">
            <h2 className="header">Experience</h2>

            <div className="relative max-w-2xl">
                {experiences.map(experience => (
                    <article key={experience.organization} className="m-8 p-4 border rounded-lg flex flex-col gap-2">
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
                                    <h3 className="font-bold">{experience.organization}</h3>
                                    <span className="text-zinc-700 text-sm">{experience.location}</span>
                                </div>
                                <h4 className="italic">{experience.role}</h4>
                            </div>
                        </div>
                        <span>{experience.dates}</span>
                        <ul className="list-disc list-outside flex flex-col gap-2 ml-4">
                            {experience.responsibilities.map((resp) => (
                                <li key={resp}>{resp}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>

        </section>
    )
}