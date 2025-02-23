import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import RouteProvider from "./providers/RouteProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andres Gutierrez | Full Stack Developer | Computer Science Engineer",
  description: "⚛️ Full Stack Developer | React | Django | AWS | Next.js | Docker | Flask | Amazon Web Services",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900/50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <ul className="flex space-x-8">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Me" },
                { href: "/projects", label: "Projects" },
                { href: "/blog", label: "Blog" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors font-medium text-lg relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <RouteProvider>{children}</RouteProvider>

        {/* Footer */}
        <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-800 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Email */}
              <div>
                <h4 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  CONTACT EMAIL
                </h4>
                <p className="text-gray-300 mt-2">andresgutierrezdev@gmail.com</p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  FOLLOW ME
                </h4>
                <div className="flex space-x-6 mt-2">
                  {[
                    { href: "https://www.instagram.com/andresg.ut", icon: faInstagram },
                    { href: "https://www.linkedin.com/in/andr%C3%A9s-gutierrez-1584a1181", icon: faLinkedin },
                    { href: "https://github.com/AndrGutierrez", icon: faGithub },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
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
              <p>&copy; {new Date().getFullYear()} Andres Gutierrez. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
