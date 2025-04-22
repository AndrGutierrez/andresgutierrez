import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrés Gutiérrez - Software Engineer",
  description: "Senior Full Stack Developer with 5+ years of experience in IT, building web apps with React, Next.js, Django, and Node.js. Expert in DevOps (Docker, AWS, CI/CD, Github Actions) open-source contributor. Explore projects, posts, resume, and contact details.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900/50 border-b border-gray-800 mb-16">
          <div className="w-full mx-auto px-6 py-4 flex justify-between items-center xl:px-12">
            <ul className="flex space-x-8">
              {[
                { href: "/", label: "Home", ariaLabel: 'home page' },
                // { href: "/about", label: "About Me" },
                // { href: "/projects", label: "Projects" },
                { href: "/blog", label: "Blog", ariaLabel: 'personal blog' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors font-medium text-lg relative group"
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-500 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="mt-16">
          {children}
        </div>
        {/* Footer */}
        <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-800 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Email */}
              <div>
                <h3 className="text-lg font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  CONTACT EMAIL
                </h3>
                <p className="text-gray-300 mt-2">mail@andresgutierrez.me</p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  FOLLOW ME
                </h3>
                <div className="flex space-x-6 mt-2">
                  {[
                    { href: "https://www.instagram.com/andresg.ut", icon: faInstagram, ariaLabel: 'my photos on instagram', },
                    { href: "https://www.linkedin.com/in/andr%C3%A9s-gutierrez-1584a1181", icon: faLinkedin, ariaLabel: 'my linkedin posts', },
                    { href: "https://github.com/AndrGutierrez", icon: faGithub, ariaLabel: 'personal projects and code' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
