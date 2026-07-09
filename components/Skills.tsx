import { 
    SiHtml5, SiHtml5Hex,
    SiCss, SiCssHex,
    SiTailwindcss, SiTailwindcssHex,
    SiReact, SiReactHex,
    SiTypescript, SiTypescriptHex,
    SiNextdotjs, SiNextdotjsHex,
    SiGithub, SiGithubHex,
    SiJavascript, SiJavascriptHex,
    SiPython, SiPythonHex,
    SiC, SiCHex,
    SiSharp, SiSharpHex,
    SiGnubash, SiGnubashHex,
    SiOpenjdk, SiOpenjdkHex,
    SiUnity, SiUnityHex,
    SiLinux, SiLinuxHex,
} from "@icons-pack/react-simple-icons";

const programmingLanguages = [
    { icon: <SiPython color={SiPythonHex} />, language: "Python" },
    { icon: <SiGnubash color={SiGnubashHex} />, language: "Bash" },
    { icon: <SiC color={SiCHex} />, language: "C" },
    { icon: <SiSharp color={SiSharpHex} />, language: "C#" },
    { icon: <SiOpenjdk color={SiOpenjdkHex} />, language: "Java" },
    { icon: <SiTypescript color={SiTypescriptHex} />, language: "TypeScript" },
    { icon: <SiJavascript color={SiJavascriptHex} />, language: "JavaScript" },
    { icon: <SiHtml5 color={SiHtml5Hex} />, language: "HTML" },
    { icon: <SiCss color={SiCssHex} />, language: "CSS" }
]

const frameworksLibrariesTools = [
    { icon: <SiNextdotjs color={SiNextdotjsHex} />, name: "Next.js" },
    { icon: <SiReact color={SiReactHex} />, name: "React" },
    { icon: <SiTailwindcss color={SiTailwindcssHex} />, name: "Tailwind CSS" },
    { icon: <SiUnity color={SiUnityHex} />, name: "Unity" },
    { icon: <SiLinux color={SiLinuxHex} />, name: "Linux" },
    { icon: <SiGithub color={SiGithubHex} />, name: "GitHub" }
]

export default function Skills() {
    return (
        <section>
            <h2>Technical Skills</h2>
            <h3>Programming Languages</h3>
            <ul>
                {programmingLanguages.map((language) => (
                    <li key={language.language}>
                        <figure>
                            {language.icon}
                            <span>{language.language}</span>
                        </figure>
                    </li>
                ))}
            </ul>

            <ul>
                <h3>Frameworks, Libraries & Tools</h3>
                {frameworksLibrariesTools.map((tool) => (
                    <li key={tool.name}>
                        <figure>
                            {tool.icon}
                            <figcaption>{tool.name}</figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </section>
    );
}