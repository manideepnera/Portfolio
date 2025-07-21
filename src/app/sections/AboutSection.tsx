'use client';
import React from "react";
import Image from "next/image";

const AboutSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]"
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-12">About Me</h2>

    <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
      {/* Image Section */}
      <div className="w-full md:w-1/3 relative h-64 md:h-80">
        <Image
          src="/about.jpg" // Replace with your image path
          alt="About Me"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/3 text-white/60 text-lg leading-relaxed">
        As a driven and passionate student, I’m committed to turning my academic achievements and extracurricular involvement into real-world impact. My work reflects a balance between creativity and structure, and I always aim to grow through challenges.
      </div>
    </div>
  </section>
));

export default AboutSection;
