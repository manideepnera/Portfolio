"use client";

import React from "react";
import { motion } from "framer-motion";

const EducationSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <motion.section
    ref={ref}
    className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a] text-white"
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
      Education
    </motion.h2>

    {/* Content */}
    <motion.div
      className="space-y-10 text-white/80 max-w-3xl text-lg leading-relaxed mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      <div>
        <p className="text-white/60 text-base">Expected graduation May 2026</p>
        <p className="font-semibold text-white text-lg">
          B.Tech in CSE (AI & ML)
        </p>
        <p>ACE Engineering College, Ghatkesar, Hyderabad, Telangana 501301.</p>
      </div>

      <div>
        <p className="text-white/60 text-base">April 2022</p>
        <p className="font-semibold text-white text-lg">Intermediate in MPC</p>
        <p>SR Junior College, Nizamabad, Telangana 503001.</p>
      </div>

      <div>
        <p className="text-white/60 text-base">April 2020</p>
        <p className="font-semibold text-white text-lg">SSC</p>
        <p>
          T.S.R. School & Jr. College, (Boys) E/M, Madnoor, Kamareddy 503309.
        </p>
      </div>
    </motion.div>
  </motion.section>
));

EducationSection.displayName = "EducationSection";

export default EducationSection;
