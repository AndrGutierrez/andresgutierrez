import "./globals.css";
import { Archivo, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

import type { Metadata } from "next";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: "variable",
  axes: ["wdth"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrés Gutiérrez - Software Engineer",
  description: "Senior Full Stack Developer with 5+ years of experience in IT, building web apps with React, Next.js, Django, and Node.js. Expert in DevOps (Docker, AWS, CI/CD, Github Actions) open-source contributor. Explore projects, posts, resume, and contact details.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${spaceGrotesk.variable} font-sans antialiased bg-bg-main text-white`}>
        {/* Navigation */}
        <Navbar></Navbar>

        {/* Main Content */}
        <div >
          {children}
        </div>
        {/* Footer */}
        <Footer></Footer>
      </body>
    </html>
  );
}
