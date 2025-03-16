"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#project",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when screen width is desktop-sized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Call once on initial render to set correct state
    handleResize();
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle smooth scrolling to sections
  const handleLinkClick = (e, path) => {
    e.preventDefault();

    // Close mobile menu when a link is clicked
    setNavbarOpen(false);

    // Extract the section ID from the path
    const sectionId = path.startsWith("#") ? path.substring(1) : path;
    const section = document.getElementById(sectionId);

    if (section) {
      // Smooth scroll to the section
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all  ${
        scrolled ? "py-4 bg-[#121212]" : "py-6 bg-[#121212] "
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl md:text-4xl text-white font-bold">
            WAKIM<span className="text-emerald-500">.</span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-10">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.path}
                title={link.title}
                onClick={(e) => handleLinkClick(e, link.path)}
              />
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex items-center p-2 rounded-full text-white hover:bg-gray-500/30 transition-colors"
            >
              {navbarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {navbarOpen && (
        <MenuOverlay links={navLinks} handleLinkClick={handleLinkClick} />
      )}
    </nav>
  );
};

export default Navbar;
