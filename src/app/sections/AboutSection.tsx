'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <motion.section
    ref={ref}
    className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {/* Heading */}
    <motion.h2
      className="text-3xl sm:text-4xl font-bold mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      About Me
    </motion.h2>

    {/* Main Content */}
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/3 relative h-64 md:h-80 flex justify-center"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/about.jpg"
          alt="About Me"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full md:w-2/3 text-white/60 text-lg leading-relaxed text-center md:text-left"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        As a driven and passionate student, I’m committed to turning my academic
        achievements and extracurricular involvement into real-world impact. My
        work reflects a balance between creativity and structure, and I always
        aim to grow through challenges.
      </motion.div>
    </motion.div>
  </motion.section>
));

AboutSection.displayName = "AboutSection";

export default AboutSection;
