import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";

type NavbarProps = {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  scrollToContact: () => void;
  homeRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  timelineRef: React.RefObject<HTMLDivElement | null>;
  skillsRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  uidesignRef: React.RefObject<HTMLDivElement | null>;
  achievementsRef: React.RefObject<HTMLDivElement | null>;
  blogRef: React.RefObject<HTMLDivElement | null>;
  educationRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
  contactbtnRef: React.RefObject<HTMLButtonElement | null>;
};

const Navbar: React.FC<NavbarProps> = ({
  scrollToSection,
  scrollToContact,
  homeRef,
  aboutRef,
  timelineRef,
  skillsRef,
  projectsRef,
  uidesignRef,
  achievementsRef,
  blogRef,
  educationRef,
  contactRef,
  contactbtnRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: [string, React.RefObject<HTMLDivElement | null>][] = [
    ["About", aboutRef],
    ["Timeline", timelineRef],
    ["Skills", skillsRef],
    ["Projects", projectsRef],
    ["UI Designs", uidesignRef],
    ["Achievements", achievementsRef],
    // ["Blog", blogRef],
    ["Education", educationRef],
  ];

  const handleNavClick = (ref: React.RefObject<HTMLDivElement | null>) => {
    scrollToSection(ref);
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10 px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div
          className="text-white font-semibold text-lg cursor-pointer"
          onClick={() => scrollToSection(homeRef)}
        >
          <Image
    src="/logos/mani-w.png"
    alt="Mani Logo"
    width={120}   // adjust size
    height={40}
    priority
  />
          {/* Manideep Nera */}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6 text-sm text-white/70 items-center">
          {navItems.map(([label, ref]) => (
            <li
              key={label}
              className="hover:text-white cursor-pointer"
              onClick={() => handleNavClick(ref)}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden lg:flex items-center gap-3">

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1 text-sm border border-white/20 rounded-md px-4 py-1.5 text-white hover:bg-white hover:text-black transition"
          >
            <Download size={16} />
            Resume
          </a>

          {/* Contact Button */}
          <button
            ref={contactbtnRef}
            onClick={scrollToContact}
            className="text-sm border border-white/20 rounded-md px-4 py-1.5 text-white hover:bg-white hover:text-black transition"
          >
            Contact
          </button>
        </div>

        {/* Hamburger Menu */}
        <div
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur px-6 py-4 space-y-4 text-white border-b border-white/10">
          
          {navItems.map(([label, ref]) => (
            <div
              key={label}
              className="cursor-pointer text-sm hover:text-gray-300"
              onClick={() => handleNavClick(ref)}
            >
              {label}
            </div>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-1 text-sm border border-white/20 rounded-md px-4 py-2 hover:bg-white hover:text-black transition"
          >
            <Download size={16} />
            Download Resume
          </a>

          {/* Contact Button */}
          <button
            onClick={() => {
              scrollToContact();
              setIsOpen(false);
            }}
            className="w-full text-sm border border-white/20 rounded-md px-4 py-2 hover:bg-white hover:text-black transition"
          >
            Contact
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
