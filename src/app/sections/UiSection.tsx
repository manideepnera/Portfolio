"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const designs = [
  {
    title: "Chatter UI Design",
    description: "A sleek and modern chat application UI design focused on user experience and accessibility.",
    year: "2025",
    figmaEmbed: "https://embed.figma.com/proto/uAyJgzyaXwdm4eGEwU2IM4/chat-app?page-id=0%3A1&node-id=16-50&p=f&viewport=54%2C144%2C0.75&scaling=scale-down&content-scaling=fixed&starting-point-node-id=16%3A50&embed-host=share"
  },
  // {
  //   title: "Dashboard Concept",
  //   description: "A startup dashboard UI concept focusing on analytics and clarity.",
  //   year: "2025",
  //   figmaEmbed: ""
  // }
];

const UiSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [activeDesign, setActiveDesign] = useState<typeof designs[0] | null>(null);

  const openModal = (design: typeof designs[0]) => setActiveDesign(design);
  const closeModal = () => setActiveDesign(null);

  return (
    <section
      ref={ref}
      aria-labelledby="blog-heading"
      className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a] text-white"
    >
      <h2 id="ui-designs-heading" className="text-3xl sm:text-4xl font-bold mb-12">
        UI Designs
      </h2>

      {/* UI Design Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {designs.map((design, index) => (
          <div
            key={index}
            onClick={() => openModal(design)}
            className="group border border-white/10 rounded-xl p-5 bg-white/5 hover:bg-white/10 transition duration-200 cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2">{design.title}</h3>

            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {design.description.slice(0, 90)}...
            </p>

            <div className="flex justify-between items-center text-xs text-white/50">
              <span>{design.year}</span>
              <span className="text-blue-400">Click to view →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
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
              <div className="p-6 h-full">
                <p className="text-white/70 mb-5 max-w-3xl">
                  {activeDesign.description}
                </p>

                {/* Figma Embed */}
                <div className="w-full h-[85%] border border-white/10 rounded-lg overflow-hidden">
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
    </section>
  );
});

UiSection.displayName = "UiSection";
export default UiSection;