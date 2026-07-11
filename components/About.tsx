import Image from "next/image";

export default function About() {
    return (
        <section className="flex flex-col items-center pt-16 max-w-2xl mx-auto gap-4">
            <h2 className="text-center header animate-rainbow-text">About</h2>
            <article className="flex flex-col md:flex-row items-center card gap-4 mx-8 md:mx-0">
                <p className="order-2 md:order-1 text-center md:text-left md:text-2xl">
                    I am an aspiring software developer, currently exploring the exciting world of computer science. I enjoy learning new concepts and tackling coding challenges both inside and outside the classroom. Come take a look at my experience and personal projects.
                </p>
                <Image 
                    src="/about.jpg"
                    alt="About"
                    height={280}
                    width={200}
                    className="order-1 md:order-2 rounded-lg h-70 w-50"
                />
            </article>
        </section>
    );
}