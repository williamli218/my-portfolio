import Image from "next/image";

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
  return (
    <ul className="flex gap-8 flex-wrap justify-center">
      {items.map((item) => (
        <li key={item.alt}>
          <figure>
            <Image
              src={item.src}
              alt={item.alt}
              width={72}
              height={72}
              className="rounded-lg w-[72px] h-[72px]"
            />
            <figcaption className="text-center">{item.alt}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <section className="flex flex-col gap-4 items-center">
      <h2 className="header">Technical Skills</h2>
      <h3 className="font-bold">Programming Languages</h3>
      <IconGrid items={programmingLanguages} />

      <h3 className="font-bold">Frameworks, Libraries & Tools</h3>
      <IconGrid items={frameworksLibrariesTools} />
    </section>
  );
}