import React from "react";

const AboutSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
    <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
      {/* Your About content here */}
      As a driven and passionate student, I’m committed to turning my academic achievements and extracurricular involvement into real-world impact...
    </p>
  </section>
));
export default AboutSection;