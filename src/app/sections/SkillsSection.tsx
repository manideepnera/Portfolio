"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* ---------- Types ---------- */

type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

type Skill = {
  name: string;
  icon: string;
  percentage: number;
  level: SkillLevel;
  description: string;
  tags: string[];
};

type SkillCategory = {
  title: string;
  subtitle: string;
  skills: Skill[];
};

/* ---------- Data ---------- */

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Data Engineering",
    subtitle: "Core tools used for data processing, machine learning, and AI pipelines.",
    skills: [
      {
        name: "Python",
        icon: "/skills/python.png",
        percentage: 85,
        level: "Advanced",
        description:
          "Primary language for AI development, data processing, automation, and backend logic.",
        tags: ["AI", "ML", "Backend"],
      },
      {
        name: "NumPy",
        icon: "/skills/numpy.png",
        percentage: 80,
        level: "Advanced",
        description:
          "Numerical computing, vectorized operations, and linear algebra foundations.",
        tags: ["Arrays", "Math", "Computation"],
      },
      {
        name: "Pandas",
        icon: "/skills/pandas.png",
        percentage: 78,
        level: "Advanced",
        description:
          "Data cleaning, transformation, analysis, and feature engineering workflows.",
        tags: ["Data Analysis", "ETL", "DataFrames"],
      },
      {
        name: "Scikit-learn",
        icon: "/skills/sklearn.png",
        percentage: 68,
        level: "Intermediate",
        description:
          "Classical machine learning models, preprocessing, pipelines, and evaluation.",
        tags: ["ML", "Models", "Pipelines"],
      },
      {
        name: "PyTorch / TensorFlow",
        icon: "/skills/pytorch.png",
        percentage: 60,
        level: "Intermediate",
        description:
          "Deep learning experimentation, neural networks, and training workflows.",
        tags: ["Deep Learning", "Neural Nets"],
      },
    ],
  },
  {
    title: "Visualization & Analysis",
    subtitle: "Understanding data through visual storytelling and exploration.",
    skills: [
      {
        name: "Matplotlib",
        icon: "/skills/matplotlib.png",
        percentage: 70,
        level: "Intermediate",
        description:
          "Creating detailed plots for data exploration and model insights.",
        tags: ["Visualization", "EDA"],
      },
      {
        name: "Seaborn",
        icon: "/skills/seaborn.png",
        percentage: 68,
        level: "Intermediate",
        description:
          "Statistical visualizations and high-level data exploration.",
        tags: ["Statistics", "EDA"],
      },
    ],
  },
  {
    title: "Core Engineering (Java + DSA)",
    subtitle: "Strong problem-solving foundation and backend-ready engineering skills.",
    skills: [
      {
        name: "Java",
        icon: "/skills/java.png",
        percentage: 75,
        level: "Advanced",
        description:
          "Object-oriented programming, clean architecture, and backend-ready logic.",
        tags: ["OOP", "Backend", "Core Java"],
      },
      {
        name: "Data Structures & Algorithms",
        icon: "/skills/dsa.png",
        percentage: 72,
        level: "Advanced",
        description:
          "Problem solving using arrays, strings, stacks, queues, trees, graphs, and DP.",
        tags: ["DSA", "Problem Solving", "Algorithms"],
      },
    ],
  },
  {
    title: "Product & Developer Tools",
    subtitle: "Tools used to design, build, and collaborate effectively.",
    skills: [
      {
        name: "Figma",
        icon: "/skills/figma.png",
        percentage: 80,
        level: "Advanced",
        description:
          "Designing intuitive UI/UX for AI-driven and user-centric products.",
        tags: ["UI/UX", "Design"],
      },
      {
        name: "Git & GitHub",
        icon: "/skills/github.png",
        percentage: 75,
        level: "Intermediate",
        description:
          "Version control, collaboration, and managing development workflows.",
        tags: ["Version Control", "Collaboration"],
      },
    ],
  },
];

/* ---------- Animations ---------- */

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ---------- Component ---------- */

const SkillsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="py-28 px-6 sm:px-12 bg-[#0a0a0a] border-t border-white/10"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-white/60 max-w-3xl mx-auto text-center text-lg leading-relaxed mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        AI-focused developer with strong foundations in data processing,
        machine learning, and core engineering problem-solving.
      </motion.p>

      {/* Categories */}
      <div className="max-w-6xl mx-auto space-y-24">
        {skillCategories.map((category) => (
          <div key={category.title}>
            {/* Category Header */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-white/50 text-sm max-w-2xl">
                {category.subtitle}
              </p>
            </div>

            {/* Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.12 }}
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="
                    flex flex-col
                    p-6 rounded-xl
                    border border-white/10
                    bg-white/5 hover:bg-white/10
                    transition
                    min-h-[280px]
                  "
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-10 h-10">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium">{skill.name}</p>
                      <p className="text-white/50 text-xs">{skill.level}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="mt-auto">
                    <div className="flex justify-between text-xs text-white/50 mb-1">
                      <span>Proficiency</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-white rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
