"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "/skills/python.png", percentage: 10 },
  { name: "Java", icon: "/skills/java.png", percentage: 5 },
  { name: "HTML & CSS", icon: "/skills/html.png", percentage: 60 },
  { name: "Figma", icon: "/skills/figma.png", percentage: 80 },
  { name: "Git", icon: "/skills/github.png", percentage: 40 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = React.forwardRef<HTMLDivElement>((props, ref) => (
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
      className="text-3xl sm:text-4xl font-bold mb-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      Skills
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      className="text-white/60 max-w-3xl text-lg leading-relaxed mb-10 mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      I possess a diverse set of skills, including proficiency in programming
      languages, design tools, and a strong understanding of user experience
      principles.
    </motion.p>

    {/* Grid */}
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto justify-items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={cardVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="
            flex flex-col items-center justify-between
            p-4 border border-white/10 rounded-lg
            bg-white/5 hover:bg-white/10 transition
            w-full max-w-[180px] h-[200px]
          "
        >
          {/* Icon */}
          <div className="relative w-12 h-12 mt-2">
            <Image
              src={skill.icon}
              alt={skill.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Skill Name */}
          <p className="text-white/80 text-center text-sm mt-2 min-h-[20px]">
            {skill.name}
          </p>

          {/* Percentage */}
          <p className="text-white/50 text-xs">{skill.percentage}%</p>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-white/10 rounded-full mb-2">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
));

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
