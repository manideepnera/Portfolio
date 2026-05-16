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
        percentage: 45,
        level: "Advanced",
        description: "AI logic, data processing, automation, backend workflows.",
        tags: ["AI", "ML", "Backend"],
      },
      {
        name: "NumPy",
        icon: "/skills/numpy.png",
        percentage: 30,
        level: "Advanced",
        description: "Numerical operations, arrays, and mathematical computing.",
        tags: ["Arrays", "Math"],
      },
            // {
      //   name: "Pandas",
      //   icon: "/skills/pandas.png",
      //   percentage: 78,
      //   level: "Advanced",
      //   description:
      //     "Data cleaning, transformation, analysis, and feature engineering workflows.",
      //   tags: ["Data Analysis", "ETL", "DataFrames"],
      // },
      // {
      //   name: "Scikit-learn",
      //   icon: "/skills/sklearn.png",
      //   percentage: 68,
      //   level: "Intermediate",
      //   description:
      //     "Classical machine learning models, preprocessing, pipelines, and evaluation.",
      //   tags: ["ML", "Models", "Pipelines"],
      // },
      // {
      //   name: "PyTorch / TensorFlow",
      //   icon: "/skills/pytorch.png",
      //   percentage: 60,
      //   level: "Intermediate",
      //   description:
      //     "Deep learning experimentation, neural networks, and training workflows.",
      //   tags: ["Deep Learning", "Neural Nets"],
      // },
    ],
  },
  {
    title: "Frontend Development",
    subtitle: "Modern frontend frameworks and styling systems.",
    skills: [
      {
        name: "Next.js",
        icon: "/skills/nextjs.png",
        percentage: 60,
        level: "Intermediate",
        description: "React framework for routing, layouts, and optimized rendering.",
        tags: ["React", "SSR"],
      },
      {
        name: "Tailwind CSS",
        icon: "/skills/tailwind.png",
        percentage: 65,
        level: "Intermediate",
        description: "Utility-first styling for responsive and scalable UI design.",
        tags: ["UI", "Responsive"],
      },
    ],
  },
  {
    title: "Core Engineering",
    subtitle: "Strong problem-solving foundation and backend-ready skills.",
    skills: [
      {
        name: "Java",
        icon: "/skills/java.png",
        percentage: 35,
        level: "Advanced",
        description: "Object-oriented programming and clean backend logic.",
        tags: ["OOP"],
      },
            // {
      //   name: "Data Structures & Algorithms",
      //   icon: "/skills/dsa.png",
      //   percentage: 72,
      //   level: "Advanced",
      //   description:
      //     "Problem solving using arrays, strings, stacks, queues, trees, graphs, and DP.",
      //   tags: ["DSA", "Problem Solving", "Algorithms"],
      // },
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
        description: "Designing clean, user-focused interfaces.",
        tags: ["UI/UX"],
      },
      {
        name: "Git & GitHub",
        icon: "/skills/github.png",
        percentage: 75,
        level: "Intermediate",
        description: "Version control and collaborative workflows.",
        tags: ["Git"],
      },
    ],
  },
];

/* ---------- Animations ---------- */

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

/* ---------- Component ---------- */

const SkillsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="py-32 px-6 sm:px-12 bg-[#0b0b0b] border-t border-white/10"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-28">
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          className="text-white/60 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Exploring and building with core product technologies while developing a strong foundation in AI engineering.
        </motion.p>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto space-y-28">
        {skillCategories.map((category) => (
          <div key={category.title}>
            {/* Category Header */}
            <div className="mb-12">
              <h3 className="text-2xl font-medium text-white mb-3">
                {category.title}
              </h3>
              <p className="text-white/50 max-w-xl text-sm">
                {category.subtitle}
              </p>
            </div>

            {/* Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.12 }}
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  className="
                    group relative
                    rounded-2xl p-6
                    bg-white/[0.04]
                    border border-white/10
                    hover:bg-white/[0.07]
                    transition
                  "
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative w-10 h-10 opacity-90">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium">{skill.name}</p>
                      <p className="text-xs text-white/40">{skill.level}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/65 leading-relaxed mb-6">
                    {skill.description}
                  </p>

                  {/* Footer */}
                  <div className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-1 rounded-full border border-white/10 text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Progress */}
                    {/* <div>
                      <div className="flex justify-between text-xs text-white/40 mb-1">
                        <span>Proficiency</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-white/80"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                      </div>
                    </div> */}
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
