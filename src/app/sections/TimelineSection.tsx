"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    phase: "Foundation Phase",
    title: "Web Fundamentals & Visual Thinking",
    description:
      "Started with HTML and CSS to understand how the web works, focusing on structure, layouts, responsiveness, and clean visual design.",
  },
  {
    phase: "Core Programming Phase",
    title: "Programming Fundamentals",
    description:
      "Learned core programming concepts using C, Java, and Python, developing a strong base in logic, control flow, and object-oriented thinking.",
  },
  {
    phase: "Problem-Solving Phase",
    title: "Data Structures & Algorithms with Java",
    description:
      "Strengthened logical reasoning by practicing arrays, strings, stacks, queues, linked lists, recursion, and algorithmic problem solving.",
  },
  {
    phase: "Application Phase",
    title: "Frontend Development & UI Building",
    description:
      "Applied foundational knowledge by building responsive interfaces and real-world frontend projects with a strong focus on usability and UI clarity.",
  },
  {
    phase: "Intelligence Phase",
    title: "AI & Machine Learning Exploration",
    description:
      "Transitioned into AI by working with Python libraries like NumPy and Pandas, learning data handling, preprocessing, and ML fundamentals.",
  },
  {
    phase: "Implementation Phase",
    title: "AI-Focused Project Development",
    description:
      "Built intelligent systems and AI-driven projects involving text processing, automation, and experimental machine learning workflows.",
  },
  {
    phase: "Expansion Phase",
    title: "Full-Stack & App Development",
    description:
      "Expanded into React, React Native, Firebase, and backend services, focusing on scalable architecture and real-world product development.",
  },
  {
    phase: "Current Phase",
    title: "Product Thinking & System Design",
    description:
      "Currently focused on AI-powered product building, deeper DSA mastery, system design, and creating production-ready applications.",
  },
];

const TimelineSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <motion.section
    ref={ref}
    className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {/* Heading */}
    <motion.h2
      className="text-3xl sm:text-4xl font-bold mb-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      Learning Journey
    </motion.h2>

    {/* Timeline */}
    <motion.div
      className="relative border-l border-white/20 pl-8 max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.15 }}
    >
      {timelineEvents.map((event, index) => (
        <motion.div
          key={index}
          className="mb-16 relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Timeline Marker */}
          <div className="absolute -left-[14px] top-3 w-3 h-3 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.06)]" />

          {/* Phase Label */}
          <span className="text-xs uppercase tracking-widest text-white/40">
            {event.phase}
          </span>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mt-2 mb-3">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 leading-relaxed">
            {event.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
));

TimelineSection.displayName = "TimelineSection";

export default TimelineSection;
