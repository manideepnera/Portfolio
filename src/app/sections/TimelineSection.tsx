import React from "react";

const timelineEvents = [
  {
    year: "2020",
    title: "Started B.Tech in Computer Science",
    description: "Began my academic journey with a focus on software engineering and development.",
  },
  {
    year: "2022",
    title: "Internship at XYZ Tech",
    description: "Worked as a frontend developer intern, contributing to a live project using React.",
  },
  {
    year: "2023",
    title: "Open Source Contributions",
    description: "Contributed to open-source repositories, collaborating with global developers.",
  },
  {
    year: "2024",
    title: "Capstone Project",
    description: "Led a team to develop a full-stack web application solving real-world logistics problems.",
  },
];

const TimelineSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]"
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-12">Timeline</h2>
    <div className="relative border-l border-white/20 pl-6">
      {timelineEvents.map((event, index) => (
        <div key={index} className="mb-12 relative">
          <div className="absolute -left-[10px] top-1.5 w-4 h-4 bg-white rounded-full border-2 border-black"></div>
          <h3 className="text-xl font-semibold text-white">{event.year}</h3>
          <p className="text-white/80 font-medium">{event.title}</p>
          <p className="text-white/60">{event.description}</p>
        </div>
      ))}
    </div>
  </section>
));

export default TimelineSection;
