import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              WaKim
            </Link>
            <p className="text-[#ADB7BE] mt-2">
              Building digital products, brands, and experiences.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <nav className="flex gap-4">
              <Link href="/" className="hover:text-cyan-500 transition-colors">
                Home
              </Link>
              <Link
                href="#about"
                className="hover:text-cyan-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="hover:text-cyan-500 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="hover:text-cyan-500 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="socials flex gap-3 mt-3 md:mt-0">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-white hover:text-cyan-500 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="text-white hover:text-cyan-500 transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-white hover:text-cyan-500 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-[#ADB7BE] text-sm">
          <p>© {new Date().getFullYear()} WaKim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
