import Image from "next/image";

export default function Education() {
    return (
        <section className="flex flex-col items-center">
            <h2>Education</h2>
            <article>
                <Image
                    src="/mcgill-university.jpg"
                    alt="McGill University"
                    width={96}
                    height={96}
                />
                <h3>B.Eng - Software Engineering Co-op</h3>
                <p>McGill University, Montreal, Canada</p>
                <p>2025-2029</p>
                <hr className="my-4" />
                <p>GPA: 4.0/4.0</p>
                <p>Richard Karper Scholarship in Engineering ($3,000)</p>
                <h4 className="mt-4">Relevant Coursework</h4>
                <ul>
                    <li>Algorithms and Data Structures</li>
                    <li>Software Engineering & Systems Design</li>
                    <li>Operating Systems</li>
                    <li>Database Systems</li>
                    <li>Functional Programming & Language Design</li>
                    <li>Linux Systems Programming & C</li>
                    <li>Computer Architecture & Assembly Language</li>
                    <li>Object-Oriented Programming</li>
                </ul>
            </article>
        </section>
    );
}