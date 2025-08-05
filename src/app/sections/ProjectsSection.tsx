"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react"; // Optional close icon

const projects = [
  {
    title: "Crop_Yield_Prediction",
    description:
      "A machine learning project that predicts crop yields based on various parameters. Built with Python and TensorFlow.",
    image: "/projects/crop_yield_prediction.png",
    link: "https://github.com/TheMaxy4/crop_yield_prediction",
  },
  {
    title: "Maxy Website",
    description:
      "The official website for Maxy — built using WordPress and soon transitioning to a full-stack MERN architecture.",
    image: "/projects/maxy-site.png",
    link: "https://maxy.example.com",
  },
  {
    title: "Share Space",
    description:
      "A creative digital hub within Maxy featuring questions, polls, and engagement spaces divided into Keeropedia and Thrillopia.",
    image: "/projects/share-space.png",
    link: "#",
  },
];

const ProjectsSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalLink, setModalLink] = useState<string>("");

  const openModal = (image: string, title: string, link: string) => {
    setModalImage(image);
    setModalTitle(title);
    setModalLink(link);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalTitle("");
    setModalLink("");
  };

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
            onClick={() => openModal(project.image, project.title, project.link)}
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
            <p className="text-white/60 text-sm mb-4">{project.description}</p>
            <p className="text-sm text-blue-400">Click to open</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative max-w-4xl w-full text-center">
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
              className="rounded-lg max-h-[80vh] w-auto mx-auto object-contain"
            />
            <p className="mt-4 text-white text-xl font-semibold">{modalTitle}</p>
            {modalLink && modalLink !== "#" && (
              <a
                href={modalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-md text-sm font-medium"
              >
                Open Project →
              </a>
            )}
            {modalLink === "#" && (
              <p className="text-white/50 text-sm mt-2">Coming soon</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
