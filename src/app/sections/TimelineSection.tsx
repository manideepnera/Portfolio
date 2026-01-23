"use client";

import React from "react";
import { motion } from "framer-motion";

type TimelineStatus = "completed" | "running" | "upcoming";

type TimelineEvent = {
  title: string;
  description: string;
  status: TimelineStatus;
};

const timelineEvents: TimelineEvent[] = [
  {
    title: "Web Fundamentals & Visual Thinking",
    description:
      "Learned how the web works — HTML structure, CSS layouts, responsiveness, and clean visual hierarchy.",
    status: "completed",
  },
  {
    title: "Programming Fundamentals",
    description:
      "Built strong logic using C, Java, and Python. Learned how to think in code.",
    status: "completed",
  },
  {
    title: "Frontend Development & UI Building",
    description:
      "Created real interfaces with React and React Native, focusing on usability and flow.",
    status: "completed",
  },
  {
    title: "Data Structures & Algorithms (Java)",
    description:
      "Improved problem-solving with arrays, strings, stacks, queues, recursion, and algorithms.",
    status: "completed",
  },
  {
    title: "AI & Machine Learning Exploration",
    description:
      "Currently working with Python, NumPy, Pandas, and ML fundamentals.",
    status: "running",
  },
  {
    title: "AI Systems & Product Engineering",
    description:
      "Upcoming focus on scalable AI systems and production-ready intelligence.",
    status: "upcoming",
  },
];

const getDotStyle = (status: TimelineStatus) => {
  if (status === "completed") return "bg-white";
  if (status === "running") return "bg-blue-400 animate-pulse";
  return "bg-white/30";
};

const getTextStyle = (status: TimelineStatus) => {
  if (status === "completed") return "text-white";
  if (status === "running") return "text-white";
  return "text-white/50";
};

const TimelineSection = React.forwardRef<HTMLDivElement>((_, ref) => (
  <section
    ref={ref}
    className="py-28 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]"
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-32 text-center">
      Learning Journey
    </h2>

    {/* ===================== DESKTOP (HORIZONTAL) ===================== */}
    <div className="hidden md:block relative max-w-6xl mx-auto">
      {/* Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="grid grid-cols-6 gap-4 pt-12">
        {timelineEvents.map((event, index) => {
          const isRunning = event.status === "running";
          const isCompleted = event.status === "completed";

          return (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connecting line to dot */}
              <div className={`absolute left-1/2 -translate-x-1/2 w-px h-12 -top-12 ${
                isCompleted ? "bg-white/40" : isRunning ? "bg-blue-400/60" : "bg-white/10"
              }`} />

              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] z-10">
                <span
                  className={`block w-1.5 h-1.5 rounded-full ${getDotStyle(
                    event.status
                  )} ${isRunning ? "shadow-lg shadow-blue-400/50" : ""}`}
                />
              </div>

              {/* Card - Hidden by default, shown on hover */}
              <div className="flex flex-col items-center text-center cursor-pointer">
                {/* Title - Always visible */}
                <h3
                  className={`text-sm font-medium mb-3 ${getTextStyle(
                    event.status
                  )} group-hover:text-white transition-colors duration-300`}
                >
                  {event.title}
                </h3>

                {/* Description - Shown on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                  <p className="text-xs text-white/60 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Status badge */}
                {isRunning && (
                  <span className="mt-4 text-[10px] tracking-wider uppercase text-blue-400 font-medium">
                    Current
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>

    {/* ===================== MOBILE (VERTICAL) ===================== */}
    <div className="md:hidden relative max-w-xl mx-auto">
      {/* Line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="space-y-12 pl-16">
        {timelineEvents.map((event, index) => {
          const isRunning = event.status === "running";
          const isCompleted = event.status === "completed";

          return (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connecting line */}
              <div className={`absolute -left-[34px] top-2 w-8 h-px ${
                isCompleted ? "bg-white/40" : isRunning ? "bg-blue-400/60" : "bg-white/10"
              }`} />

              {/* Dot */}
              <span
                className={`absolute -left-[38px] top-[7px] w-1.5 h-1.5 rounded-full ${getDotStyle(
                  event.status
                )} ${isRunning ? "shadow-lg shadow-blue-400/50" : ""}`}
              />

              {/* Content */}
              <div className="cursor-pointer">
                <h3
                  className={`text-base font-medium mb-2 ${getTextStyle(
                    event.status
                  )} group-hover:text-white transition-colors duration-300`}
                >
                  {event.title}
                </h3>
                
                {/* Description - Shown on tap/hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-32 overflow-hidden">
                  <p className="text-sm text-white/60 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {isRunning && (
                  <span className="inline-block mt-3 text-[10px] uppercase tracking-wider text-blue-400 font-medium">
                    Currently Learning
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
));
TimelineSection.displayName = "TimelineSection";
export default TimelineSection;
