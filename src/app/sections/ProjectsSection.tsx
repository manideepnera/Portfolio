"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Crop_Yield_Prediction",
    description:
      "A machine learning project that predicts crop yields based on various parameters. Built with Python and TensorFlow. It includes data visualization, preprocessing pipelines, and yield forecasting features.",
    image: "/projects/crop_yield_prediction.png",
    link: "https://themaxy4.github.io/Crop_Yield_Prediction/",
    year: "2024",
    technologies: ["Python", "TensorFlow", "Pandas"],
  },
  {
    title: "Maxy Website",
    description:
      "The official website for Maxy — initially built using WordPress and now transitioning to a full-stack MERN architecture for better performance, customization, and scalability.",
    image: "/projects/maxy-site.png",
    link: "https://maxy.example.com",
    year: "2023",
    technologies: ["WordPress", "MERN Stack (Planned)"],
  },
  {
    title: "Share Space",
    description:
      "A creative digital hub within Maxy featuring questions, polls, and engagement spaces divided into Keeropedia and Thrillopia. Designed to encourage participation and creativity.",
    image: "/projects/share-space.png",
    link: "#",
    year: "2025",
    technologies: ["Next.js", "Firebase", "TailwindCSS"],
  },
];

const ProjectsSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [modalProject, setModalProject] = useState<typeof projects[0] | null>(null);

  const openModal = (project: typeof projects[0]) => setModalProject(project);
  const closeModal = () => setModalProject(null);

  return (
    <section
      ref={ref}
      aria-labelledby="projects-heading"
      className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a] text-white"
    >
      <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border border-white/10 rounded-xl p-5 bg-white/5 hover:bg-white/10 transition duration-200 cursor-pointer"
            onClick={() => openModal(project)}
          >
            <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-white/60 text-sm mb-4">{project.description.slice(0, 90)}...</p>
            <p className="text-sm text-blue-400">Click to open</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden bg-[#111] rounded-xl shadow-2xl text-white"
            >
              {/* Close Button */}
              <div className="sticky top-0 z-50 flex justify-end p-4 bg-[#111] border-b border-white/10">
                <button
                  onClick={closeModal}
                  className="text-white hover:text-gray-300"
                  aria-label="Close Modal"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-60px)] scrollbar-thin scrollbar-thumb-white/90 scrollbar-track-white/10">
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src={modalProject.image}
                    alt={modalProject.title}
                    width={1200}
                    height={800}
                    className="rounded-lg max-h-[400px] object-contain"
                  />

                  <div className="mt-4 text-center">
                    <h3 className="text-2xl font-bold">{modalProject.title}</h3>
                    <p className="text-white/70 text-sm mt-1">📅 {modalProject.year}</p>
                  </div>

                  <p className="mt-3 text-white/90 text-base leading-relaxed text-center max-w-2xl">
                    {modalProject.description}
                  </p>

                  {modalProject.technologies && (
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {modalProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 border border-white/20 rounded-full bg-white/10 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {modalProject.link && modalProject.link !== "#" ? (
                    <a
                      href={modalProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-md text-sm font-medium"
                    >
                      Open Project →
                    </a>
                  ) : (
                    <p className="text-white/50 text-sm mt-5">Coming soon</p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
