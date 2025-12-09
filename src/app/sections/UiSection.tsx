"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const designs = [
  {
    title: "Chatter UI Design",
    description:
      "A sleek and modern chat application UI design focused on user experience and accessibility.",
    year: "2025",
    coverImage: "/ui/chatter-cover.png", // ✅ new
    figmaEmbed:
      "https://embed.figma.com/proto/uAyJgzyaXwdm4eGEwU2IM4/chat-app?page-id=0%3A1&node-id=16-50&p=f&viewport=54%2C144%2C0.75&scaling=scale-down&content-scaling=fixed&starting-point-node-id=16%3A50&embed-host=share",
  },
  {
    title: "ShopIt UI Design",
    description:
      "A vibrant and user-friendly e-commerce app UI design that enhances the shopping experience.",
    year: "2025",
    coverImage: "/ui/shopit-cover.png", // ✅ new
    figmaEmbed:
      "https://embed.figma.com/proto/tiN9iNLR2vR5R23eYSCmoB/UI-Manideep?page-id=0%3A1&node-id=1-2&viewport=331%2C162%2C1.01&scaling=scale-down&content-scaling=fixed&embed-host=share",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const UiSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [activeDesign, setActiveDesign] = useState<(typeof designs)[0] | null>(
    null
  );

  const openModal = (design: (typeof designs)[0]) => setActiveDesign(design);
  const closeModal = () => setActiveDesign(null);

  return (
    <motion.section
      ref={ref}
      aria-labelledby="ui-designs-heading"
      className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Heading */}
      <motion.h2
        id="ui-designs-heading"
        className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        UI Designs
      </motion.h2>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {designs.map((design, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={() => openModal(design)}
            className="group border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition duration-200 cursor-pointer overflow-hidden"
          >
            {/* ✅ Cover Image */}
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={design.coverImage}
                alt={design.title}
                fill
                className="object-fit transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">
                {design.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {design.description.slice(0, 90)}...
              </p>

              <div className="flex justify-between items-center text-xs text-white/50">
                <span>{design.year}</span>
                <span className="text-blue-400">Click to view →</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal with Figma Embed */}
      <AnimatePresence>
        {activeDesign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="relative max-w-5xl w-full h-[85vh] bg-[#111] rounded-xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-semibold">{activeDesign.title}</h3>
                  <p className="text-sm text-white/50">📅 {activeDesign.year}</p>
                </div>

                <button
                  onClick={closeModal}
                  className="text-white hover:text-gray-400"
                >
                  <X size={26} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 h-full flex flex-col gap-4">
                <p className="text-white/70 mb-2 max-w-3xl">
                  {activeDesign.description}
                </p>

                <div className="w-full flex-1 border border-white/10 rounded-lg overflow-hidden">
                  <iframe
                    src={activeDesign.figmaEmbed}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
});

UiSection.displayName = "UiSection";
export default UiSection;
