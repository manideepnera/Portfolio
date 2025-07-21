import React from "react";
import Image from "next/image";

const skills = [
  { name: "React", icon: "/skills/react.png" },
  { name: "JavaScript", icon: "/skills/javascript.png" },
  { name: "TypeScript", icon: "/skills/typescript.png" },
  { name: "HTML & CSS", icon: "/skills/htmlcss.png" },
  { name: "Figma", icon: "/skills/figma.png" },
  { name: "Git", icon: "/skills/git.png" },
];

const SkillsSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]"
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Skills</h2>
    <p className="text-white/60 max-w-3xl text-lg leading-relaxed mb-10">
      I possess a diverse set of skills, including proficiency in programming
      languages, design tools, and a strong understanding of user experience
      principles.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition"
        >
          <div className="relative w-12 h-12 mb-3">
            <Image
              src={skill.icon}
              alt={skill.name}
              layout="fill"
              className="object-contain"
            />
          </div>
          <p className="text-white/80 text-center text-sm">{skill.name}</p>
        </div>
      ))}
    </div>
  </section>
));

export default SkillsSection;
