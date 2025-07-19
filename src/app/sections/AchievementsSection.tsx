import React from "react";

const AchievementsSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Achievements</h2>
    <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
      {/* Your Achievements content here */}
      I have received several awards for my work in design and development, including recognition from industry leaders and academic institutions.
    </p>
  </section>
));
export default AchievementsSection;
