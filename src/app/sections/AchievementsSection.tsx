"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const achievements = [
  {
    title: "AI-ML Virtual Internship",
    issuer: "Google for Developers – India Edu Program, AICTE, EduSkills",
    date: "June 2025",
    image: "/certificates/ai-ml.jpg",
  },
  {
    title: "Published Research Paper",
    issuer:
      "International Journal of Innovative Research in Technology (IJIRT)",
    date: "June 2025",
    image: "/certificates/research-paper.jpg",
  },
  {
    title: "Pearson MePro Level 10 Expert",
    issuer: "Pearson MePro",
    date: "May 2025",
    image: "/certificates/pearson-mepro.jpg",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Jan 2025",
    image: "/certificates/ccna.jpg",
  },
  {
    title: "AWS Generative AI Ideathon",
    issuer: "Amazon Web Services (AWS)",
    date: "Aug 2024",
    image: "/certificates/aws-ideathon.jpg",
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

const AchievementsSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");

  const openModal = (image: string, title: string) => {
    setModalImage(image);
    setModalTitle(title);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalTitle("");
  };

  return (
    <motion.section
      ref={ref}
      aria-labelledby="achievements-heading"
      className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Heading */}
      <motion.h2
        id="achievements-heading"
        className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Achievements
      </motion.h2>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group cursor-pointer border border-white/10 rounded-xl p-5 bg-white/5 hover:bg-white/10 transition duration-200"
            onClick={() => openModal(item.image, item.title)}
          >
            <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {item.title}
            </h3>
            <p className="text-white/60 text-sm">{item.issuer}</p>
            <p className="text-white/40 text-sm mt-1">{item.date}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
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
              className="relative max-w-3xl w-full"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
                aria-label="Close Modal"
              >
                <X size={30} />
              </button>

              <Image
                src={modalImage}
                alt={modalTitle}
                width={1200}
                height={800}
                className="rounded-lg max-h-[90vh] w-auto mx-auto object-contain"
              />
              <p className="mt-4 text-center text-white text-lg font-medium">
                {modalTitle}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
});

AchievementsSection.displayName = "AchievementsSection";

export default AchievementsSection;
