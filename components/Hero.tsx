import Image from "next/image";
import { MapPin, GraduationCap, Mail } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Hero() {
    return (
        <section className="flex flex-col items-center">
            <Image
                src="/profile.jpg"
                alt="Profile Image"
                width={200}
                height={200}
                className="w-48 h-48 rounded-full"
            />

            <h1 className="text-center">
                Welcome to my portfolio!
                <br />
                I am William Li
            </h1>

            <ul className="flex gap-4">
                <li className="flex gap-1">
                    <MapPin />
                    <span>Montreal, Canada</span>
                </li>
                <li className="flex gap-1">
                    <GraduationCap />
                    <span>McGill University</span>
                </li>
            </ul>

            <address className="not-italic">
                <ul className="flex gap-4">
                    <li className="flex gap-1">
                        <Image 
                            src="/linkedin.png"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                        />
                        <a href="https://www.linkedin.com/in/william-li-218/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li className="flex gap-1">
                        <SiGithub />
                        <a href="https://github.com/williamli218" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li className="flex gap-1">
                        <Mail />
                        <a href="mailto:william.jy.li@gmail.com">Email</a>
                    </li>
                </ul>
            </address>
        </section>
    );
}