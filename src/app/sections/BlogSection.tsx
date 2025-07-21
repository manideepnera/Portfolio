'use client';
import React from "react";
import Image from "next/image";

const BlogSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]"
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-12">Blog</h2>

    <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl">
      {/* Image Section */}
      <div className="w-full md:w-1/3 relative h-64 md:h-80">
        <Image
          src="/blog.jpg" // Replace this with your actual image path
          alt="Blog section illustration"
          fill
          className="object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/3 text-white/60 text-lg leading-relaxed">
        Welcome to my blog! Here, I share my thoughts on design, development, and the intersection of technology and creativity. Whether it’s a deep dive into frameworks or reflections on digital design trends, I aim to inspire and educate.
      </div>
    </div>
  </section>
));

export default BlogSection;
