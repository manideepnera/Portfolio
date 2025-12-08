import React from "react";
import Image from "next/image";

const ContactSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <footer
    ref={ref}
    className="py-20 px-5 sm:px-8 lg:px-12 border-t border-white/10 bg-[#0a0a0a] text-white"
  >
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
      Get in Touch
    </h2>

    {/* Wrapper */}
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-stretch lg:justify-between">
      
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-left max-w-xl">
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start gap-3">
          <Image
            src="/logo.png"
            alt="Manideep Nera Logo"
            width={140}
            height={140}
            className="opacity-90"
            priority
          />
        </div>

        {/* Description */}
        <p className="text-white/80 text-base sm:text-lg leading-relaxed">
          I’m always open to new opportunities, collaborations, and meaningful
          conversations. Feel free to reach out anytime.
        </p>

        {/* Email & Location */}
        <div className="space-y-3 w-full text-white/90 text-sm sm:text-base">
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <Image src="/icons/email.svg" alt="Email" width={22} height={22} />
            <span className="break-all sm:break-normal">
              manideepnera@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <Image
              src="/icons/location.svg"
              alt="Location"
              width={22}
              height={22}
            />
            <span>Hyderabad, Telangana, India</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — ✅ Bottom Aligned on Big Screens */}
      <div className="flex items-center lg:items-end lg:self-end">
        <div className="flex gap-5 lg:gap-10 items-center">
          <a
            href="https://www.linkedin.com/in/manideepnera/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition"
          >
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={26} height={26} />
          </a>

          <a
            href="https://github.com/manideepnera/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition"
          >
            <Image src="/icons/github.svg" alt="GitHub" width={26} height={26} />
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

    </div>
  </footer>
));

ContactSection.displayName = "ContactSection";
export default ContactSection;
