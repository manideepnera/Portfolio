import React from "react";

const ResumeSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a] text-white"
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Resume</h2>

    <p className="text-white/60 max-w-3xl text-lg leading-relaxed mb-6">
      I have a strong academic background in computer science and design, with a focus on user experience and interface design.
    </p>

    <a
      href="/resume.pdf"
      download
      className="inline-block bg-white text-black px-6 py-3 rounded-lg text-base font-medium hover:bg-white/90 transition"
    >
      Download Resume
    </a>
  </section>
));

export default ResumeSection;
