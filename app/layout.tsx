import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://williamli-my-portfolio.vercel.app/"),
  title: "William Li | Portfolio",
  description: "William Li's personal portfolio website",
  keywords: ["William Li", "software developer", "portfolio", "McGill University"],
  authors: [{ name: "William Li" }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "William Li | Portfolio",
    description: "William Li's personal portfolio website",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "William Li Portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "William Li | Portfolio",
    description: "William Li's personal portfolio website",
    images: ["/portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}