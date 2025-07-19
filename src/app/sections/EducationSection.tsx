import React from "react";

const EducationSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Education</h2>
    <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
      {/* Your Education content here */}
      I have a strong academic background in computer science and design, with a focus on user experience and interface design.
    </p>
  </section>
));
export default EducationSection;