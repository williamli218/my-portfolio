import Image from "next/image";
import { MapPin, GraduationCap, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="flex flex-col items-center pt-16" id="hero">
            <Image
                src="/profile.jpg"
                alt="Profile Image"
                width={200}
                height={200}
                className="rounded-full"
            />

            <h1 className="text-center header my-1">
                Welcome to my portfolio!
                <br />
                I am William Li
            </h1>

            <ul className="flex gap-8 text-sm text-zinc-700">
                <li className="flex gap-1 items-center">
                    <MapPin size={16} />
                    <span>Montreal, Canada</span>
                </li>
                <li className="flex gap-1 items-center">
                    <GraduationCap size={16} />
                    <span>McGill University</span>
                </li>
            </ul>

            <address className="not-italic mt-2">
                <ul className="flex gap-4">
                    <li className="address">
                        <Image 
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                        />
                        <a href="https://www.linkedin.com/in/williamli218/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li className="address">
                        <Image 
                            src="/github.svg"
                            alt="GitHub"
                            width={24}
                            height={24}
                        />
                        <a href="https://github.com/williamli218" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li className="address">
                        <Mail />
                        <a href="mailto:william.jy.li@gmail.com">Email</a>
                    </li>
                </ul>
            </address>
        </section>
    );
}