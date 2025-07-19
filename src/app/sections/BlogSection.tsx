import React from "react";

const BlogSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Blog</h2>
    <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
      {/* Your Blog content here */}
      Welcome to my blog! Here, I share my thoughts on design, development, and the intersection of technology and creativity.
    </p>
  </section>
));
export default BlogSection;