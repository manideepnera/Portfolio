'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function HeroSection({ homeRef, contactbtnRef, scrollToContact }: any) {
  return (
    <section
      ref={homeRef}
      className="relative flex flex-col-reverse md:flex-row h-[740px] px-6 sm:px-12 py-32 items-center gap-10 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#8ECAE6]/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#FB8500]/20 rounded-full blur-3xl z-0" />

      {/* Decorative Circles */}
      <div className="absolute w-40 h-40 border border-white/10 rounded-full top-[10%] left-[5%] hidden md:block" />
      <div className="absolute w-60 h-60 border border-white/5 rounded-full bottom-[15%] right-[10%] hidden md:block" />

      {/* Left Text Section */}
      <div className="md:w-1/2 z-10 flex flex-col gap-6">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
        >
          <span className="text-[#C0C0C0]">Hello World!</span> <br /> Dream it. Build it. Scale it.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-white/60 text-base sm:text-lg"
        >
          Hi, I’m Manideep Nera — a passionate developer exploring AI and web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <button
            ref={contactbtnRef}
            onClick={scrollToContact}
            className="px-5 py-2 text-sm border border-white/20 rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Contact
          </button>
          <span className="text-green-400 text-sm animate-pulse">● Available for collaboration.</span>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="md:w-1/2 w-full max-w-md mx-auto relative aspect-square rounded-xl overflow-hidden border border-white/10 shadow-2xl z-10"
      >
        <Image
          src="/profile.png"
          alt="Profile"
          fill
          className="object-cover object-center rounded-xl"
        />
      </motion.div>
    </section>
  );
}
