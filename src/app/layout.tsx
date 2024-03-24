import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import RouteProvider from "./providers/RouteProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andres Gutierrez | Full Stack Developer | Computer Science Engineer |",
  description: "⚛️ Full Stack Developer | React | Django | AWS | Next.js | Docker | Flask | Amazon Web Services | ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <nav className="py-4 px-10 bg-background">
          <ul className="flex justify-between xl:w-1/5 w">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About me</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>

          </ul>

        </nav>
        <RouteProvider>
          {children}
        </RouteProvider>
        <footer className="px-10 pb-5 pt-44 bg-black">
          <div className="mb-2">
            <h4>
              <strong>
                CONTACT EMAIL
              </strong>
            </h4>
            andresgutierrezdev@gmail.com
          </div>
          <h4>
            <strong>
              FOLLOW ME
            </strong>
          </h4>
          <div className="flex xl:w-1/6 justify-between p-2">
            <a href="https://www.instagram.com/andresg.ut" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="w-7" />
            </a>
            <a href="https://www.linkedin.com/in/andr%C3%A9s-gutierrez-1584a1181" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="w-7" />
            </a>
            <a href="https://github.com/AndrGutierrez" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="w-7" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
