import React from "react";

const SkillsSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Skills</h2>
    <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
      {/* Your Skills content here */}
      I possess a diverse set of skills, including proficiency in programming languages, design tools, and a strong understanding of user experience principles.
    </p>
  </section>
));
export default SkillsSection;