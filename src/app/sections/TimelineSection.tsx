"use client";
import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2022",
    title:
      "Started B.Tech in Computer Science Engineering (AI & ML) at Ace Engineering College",
    description:
      "Began my academic journey with a focus on software engineering and development, gaining foundational knowledge in programming and algorithms.",
  },
  // Add more events here when ready
];

const TimelineSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <motion.section
    ref={ref}
    className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {/* Centered Heading */}
    <motion.h2
      className="text-3xl sm:text-4xl font-bold mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      Timeline
    </motion.h2>

    {/* Centered Timeline Container */}
    <motion.div
      className="relative border-l border-white/20 pl-6 max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {timelineEvents.map((event, index) => (
        <motion.div
          key={index}
          className="mb-12 relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
        >
          {/* Dot */}
          <div className="absolute -left-[10px] top-1.5 w-4 h-4 bg-white rounded-full border-2 border-black"></div>

          <h3 className="text-xl font-semibold text-white">{event.year}</h3>
          <p className="text-white/80 font-medium">{event.title}</p>
          <p className="text-white/60">{event.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
));

TimelineSection.displayName = "TimelineSection";

export default TimelineSection;
