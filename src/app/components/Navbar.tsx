"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10 px-6 py-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div
          className="text-white font-semibold text-lg cursor-pointer"
          onClick={() => scrollToSection(homeRef)}
        >
          Manideep Nera
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
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </nav>

      {/* Mobile Menu with slide-down animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              lg:hidden
              fixed inset-x-0 top-16 z-40
              bg-black/90 backdrop-blur
              px-6 py-4 space-y-4 text-white
              border-b border-white/10
              max-h-[calc(100vh-4rem)]
              overflow-y-auto
            "
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
