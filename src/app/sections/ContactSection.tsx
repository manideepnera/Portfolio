import React from "react";

const ContactSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a]">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact</h2>
    <p className="text-white/60 max-w-3xl text-lg leading-relaxed">
      {/* Your Contact content here */}
      If you’d like to get in touch, feel free to reach out via email or connect with me on social media.
    </p>
  </section>
));
export default ContactSection;