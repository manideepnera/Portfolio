import React from "react";
import Image from "next/image";

const ContactSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    className="py-24 px-6 sm:px-12 border-t border-white/10 bg-[#0a0a0a] text-white"
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-12">Contact</h2>

    <div className="flex flex-col lg:flex-row gap-12 text-white/80 max-w-6xl text-lg leading-relaxed">
      {/* Contact Info */}
      <div className="flex-1 space-y-6">
        <p>
          If you’d like to get in touch, feel free to reach out via email or connect with me on social platforms.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Image src="/icons/email.svg" alt="Email" width={24} height={24} />
            <span className="text-white">maxyforfuture@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/icons/location.svg" alt="Location" width={24} height={24} />
            <span className="text-white">Hyderabad, Telangana, India</span>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex-1 space-y-6">
        <h3 className="text-2xl font-semibold text-white mb-2">Connect with me</h3>
        <div className="flex gap-6 items-center">
          <a
            href="https://www.linkedin.com/in/manideep-nera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={28} height={28} />
          </a>
          <a
            href="https://github.com/TheMaxy4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icons/github.svg" alt="GitHub" width={28} height={28} />
          </a>
          <a
            href="https://instagram.com/themaxy_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icons/instagram.svg" alt="Instagram" width={28} height={28} />
          </a>
        </div>
      </div>
    </div>
  </section>
));

export default ContactSection;
