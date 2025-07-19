import React from "react";

const TimelineSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Timeline</h2>
    <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
      {/* Your Timeline content here */}
      I have a diverse background that includes experiences in various fields, all contributing to my growth as a professional.
    </p>
  </section>
));
export default TimelineSection;
