import Image from "next/image";

export default function Education() {
    return (
        <section className="flex flex-col items-center pt-16" id="education">
            <h2 className="header">Education</h2>
            <article className="flex flex-col gap-2 m-8 card">
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
                            <h3 className="font-bold">McGill University</h3>
                            <span className="text-zinc-700 text-sm">Montreal, Canada</span>
                        </div>
                        <p className="italic">B.Eng - Software Engineering Co-op</p>
                    </div>
                </div>
                <p>August 2025 - May 2029</p>
                <p>
                    <span className="border rounded-lg p-1 bg-zinc-100">GPA: 4.0/4.0</span>
                </p>
                <p className="font-semibold">Richard Karper Scholarship in Engineering ($3,000)</p>
                <h4>Relevant Coursework</h4>
                <ul className="list-disc list-inside">
                    <li>Algorithms and Data Structures</li>
                    <li>Software Engineering</li>
                    <li>Operating Systems</li>
                    <li>Database Systems</li>
                </ul>
            </article>
        </section>
    );
}