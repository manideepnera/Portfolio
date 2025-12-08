import React from "react";
import Image from "next/image";

const ContactSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <footer
    ref={ref}
    className="py-20 px-5 sm:px-8 lg:px-12 border-t border-white/10 bg-[#0a0a0a] text-white"
  >
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
      Get in Touch
    </h2>

    {/* Main Content Wrapper */}
    <div
      className="
        max-w-6xl mx-auto
        flex flex-col items-center
        gap-10
        text-white/80 text-base sm:text-lg
        text-center
      "
    >
      {/* Description */}
      <p className="max-w-xl sm:max-w-2xl leading-relaxed">
        I’m always open to new opportunities, collaborations, and meaningful
        conversations. Feel free to reach out anytime.
      </p>

      {/* Contact Details */}
      <div
        className="
          flex flex-col sm:flex-row
          items-center
          gap-4 sm:gap-8
          text-white
        "
      >
        <div className="flex items-center gap-3">
          <Image
            src="/icons/email.svg"
            alt="Email"
            width={22}
            height={22}
          />
          <span className="break-all sm:break-normal">
            manideepnera@gmail.com
          </span>
        </div>

        <span className="hidden sm:block text-white/30">|</span>

        <div className="flex items-center gap-3">
          <Image
            src="/icons/location.svg"
            alt="Location"
            width={22}
            height={22}
          />
          <span>Hyderabad, Telangana, India</span>
        </div>
      </div>

      {/* Social Links */}
      <div
        className="
          flex items-center justify-center
          gap-6 sm:gap-8
          mt-2 sm:mt-4
        "
      >
        <a
          href="https://www.linkedin.com/in/manideepnera/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition"
        >
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={26}
            height={26}
          />
        </a>

        <a
          href="https://github.com/manideepnera/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition"
        >
          <Image
            src="/icons/github.svg"
            alt="GitHub"
            width={26}
            height={26}
          />
        </a>

        <a
          href="https://instagram.com/manideepnera/"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition"
        >
          <Image
            src="/icons/instagram.svg"
            alt="Instagram"
            width={26}
            height={26}
          />
        </a>
      </div>
    </div>
  </footer>
));

ContactSection.displayName = "ContactSection";
export default ContactSection;
