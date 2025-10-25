import React from "react";
import Image from "next/image";

const skills = [
  { name: "Python", icon: "/skills/python.png", percentage: 10 },
  { name: "Java", icon: "/skills/java.png", percentage: 5 },
  // { name: "React", icon: "/skills/react.png", percentage: 85 },
  // { name: "JavaScript", icon: "/skills/js.png", percentage: 80 },
  // { name: "TypeScript", icon: "/skills/typescript.png", percentage: 70 },
  { name: "HTML & CSS", icon: "/skills/html.png", percentage: 60 },
  { name: "Figma", icon: "/skills/figma.png", percentage: 80 },
  { name: "Git", icon: "/skills/github.png", percentage: 40 },
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
          <p className="text-white/80 text-center text-sm mb-2">
            {skill.name}
          </p>

          {/* Percentage Text */}
          <p className="text-white/50 text-xs mb-1">{skill.percentage}%</p>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-white/10 rounded-full">
            <div
              className="h-full bg-white rounded-full transition-all duration-500"
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
));

export default SkillsSection;



// "use client";

// import React from "react";
// import Image from "next/image";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

// const skills = [
//   { name: "Python", icon: "/skills/python.png", percentage: 90 },
//   { name: "React", icon: "/skills/react.png", percentage: 85 },
//   { name: "JavaScript", icon: "/skills/js.png", percentage: 80 },
//   { name: "HTML & CSS", icon: "/skills/html.png", percentage: 88 },
//   { name: "Figma", icon: "/skills/figma.png", percentage: 75 },
//   { name: "Git", icon: "/skills/github.png", percentage: 70 },
// ];

// const CircularProgress = ({ percentage }: { percentage: number }) => {
//   const radius = 28;
//   const stroke = 5;
//   const normalizedRadius = radius - stroke / 2;
//   const circumference = normalizedRadius * 2 * Math.PI;
//   const strokeDashoffset = circumference - (percentage / 100) * circumference;

//   return (
//     <svg height={radius * 2} width={radius * 2} className="mb-2">
//       <circle
//         stroke="#1f1f1f"
//         fill="transparent"
//         strokeWidth={stroke}
//         r={normalizedRadius}
//         cx={radius}
//         cy={radius}
//       />
//       <circle
//         stroke="white"
//         fill="transparent"
//         strokeWidth={stroke}
//         strokeLinecap="round"
//         strokeDasharray={circumference}
//         strokeDashoffset={strokeDashoffset}
//         r={normalizedRadius}
//         cx={radius}
//         cy={radius}
//         style={{ transition: "stroke-dashoffset 1s ease-out" }}
//       />
//     </svg>
//   );
// };

// const SkillsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
//   const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

//   return (
//     <section
//       ref={(node) => {
//         if (ref && typeof ref === "function") ref(node);
//         inViewRef(node);
//       }}
//       className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]"
//     >
//       <h2 className="text-3xl sm:text-4xl font-bold mb-6">Skills</h2>
//       <p className="text-white/60 max-w-3xl text-lg leading-relaxed mb-10">
//         I possess a diverse set of skills, including proficiency in programming
//         languages, design tools, and a strong understanding of user experience
//         principles.
//       </p>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl">
//         {skills.map((skill, idx) => (
//           <motion.div
//             key={skill.name}
//             initial={{ opacity: 0, y: 30 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: idx * 0.1 }}
//             className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition"
//           >
//             <div className="relative w-12 h-12 mb-3">
//               <Image
//                 src={skill.icon}
//                 alt={skill.name}
//                 layout="fill"
//                 className="object-contain"
//               />
//             </div>

//             {/* Circular Progress Bar */}
//             <div className="relative flex items-center justify-center">
//               <CircularProgress percentage={inView ? skill.percentage : 0} />
//               <span className="absolute text-sm font-medium text-white">
//                 {inView && (
//                   <CountUp end={skill.percentage} duration={1} suffix="%" />
//                 )}
//               </span>
//             </div>

//             {/* Skill Name */}
//             <p className="text-white/80 text-center text-sm mt-1">
//               {skill.name}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// });

// export default SkillsSection;
