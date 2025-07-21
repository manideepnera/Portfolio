import React from "react";
import Image from "next/image";

const achievements = [
  {
    title: "AI-ML Virtual Internship",
    issuer: "Google for Developers – India Edu Program, AICTE, EduSkills",
    date: "June 2025",
    image: "/certificates/ai-ml.jpg",
  },
  {
    title: "Published Research Paper",
    issuer: "International Journal of Innovative Research in Technology (IJIRT)",
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
  }
];

const AchievementsSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a] text-white"
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-12">Achievements</h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      {achievements.map((item, index) => (
        <div
          key={index}
          className="border border-white/10 rounded-xl p-5 bg-white/5 hover:bg-white/10 transition duration-200"
        >
          <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
          <p className="text-white/60 text-sm">{item.issuer}</p>
          <p className="text-white/40 text-sm mt-1">{item.date}</p>
        </div>
      ))}
    </div>
  </section>
));

export default AchievementsSection;
