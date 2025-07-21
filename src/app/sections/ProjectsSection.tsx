import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Tackle",
    description:
      "A productivity app that helps users manage tasks, notes, to-do lists, and reminders. Built with Flutter and Firebase.",
    image: "/projects/tackle.png",
    link: "https://github.com/TheMaxy4/tackle-app",
  },
  {
    title: "Maxy Website",
    description:
      "The official website for Maxy — built using WordPress and soon transitioning to a full-stack MERN architecture.",
    image: "/projects/maxy-site.png",
    link: "https://maxy.example.com", // Replace with actual
  },
  {
    title: "Share Space",
    description:
      "A creative digital hub within Maxy featuring questions, polls, and engagement spaces divided into Keeropedia and Thrillopia.",
    image: "/projects/share-space.png",
    link: "#", // Coming soon or placeholder
  },
];

const ProjectsSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a] text-white"
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border border-white/10 rounded-xl p-5 bg-white/5 hover:bg-white/10 transition duration-200"
        >
          <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-white/60 text-sm mb-4">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:underline"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  </section>
));

export default ProjectsSection;
