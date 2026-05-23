'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ homeRef, contactbtnRef, scrollToContact }: any) {
  return (
    <section
      ref={homeRef}
      className="relative flex flex-col h-auto min-h-[740px] px-6 sm:px-12 pt-32 pb-16 items-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#8ECAE6]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#FB8500]/10 rounded-full blur-3xl z-0" />

      {/* Main Hero Content */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 w-full z-10 mb-20">
        {/* Left Text Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
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
            Hi, I’m Manideep Nera, a product-focused developer with a strong interest in AI engineering.
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
          className="md:w-1/2 w-full max-w-md mx-auto relative aspect-square rounded-xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <Image
            src="/profile.png"
            alt="Profile"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>
      {/* Featured Projects Section */}
      <div className="z-10 w-full mx-auto mt-16 md:mt-24 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-white/50 text-sm uppercase tracking-widest font-medium">Featured Projects</p>
          <h3 className="text-2xl font-bold text-white mt-2">Key Works</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Corex Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/corex" className="group h-full">
              <div className="h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-[#FFB703]/10 to-transparent border border-[#FFB703]/20 hover:border-[#FFB703]/50 hover:bg-gradient-to-br hover:from-[#FFB703]/15 hover:to-[#FFB703]/5 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <Image 
                      src="/logos/corex_logo.png" 
                      alt="Corex Icon" 
                      width={56} 
                      height={56} 
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <ArrowRight size={20} className="text-[#FFB703]/50 group-hover:text-[#FFB703] group-hover:translate-x-1 transition-all" />

                </div>

                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">Corex</h4>
                  <p className="text-base text-white/60 mb-4">Core Social Network</p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    A functional proof-of-concept demonstrating core principles of digital ecosystem evolution.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-[#FFB703]/10 flex items-center gap-2">
                  <span className="text-sm text-[#FFB703]/70 font-medium">Explore Project</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* June AI Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            <Link href="/june-ai" className="group h-full">
              <div className="h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/20 hover:border-[#3B82F6]/50 hover:bg-gradient-to-br hover:from-[#3B82F6]/15 hover:to-[#3B82F6]/5 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-lg bg-[#3B82F6]/20">
                    <span className="text-2xl font-bold text-[#3B82F6]">♦</span>
                  </div>
                  <ArrowRight size={20} className="text-[#3B82F6]/50 group-hover:text-[#3B82F6] group-hover:translate-x-1 transition-all" />
                </div>

                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">June AI</h4>
                  <p className="text-base text-white/60 mb-4">Modular AI Operating System</p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    An evolving modular AI ecosystem designed as a personal cognitive operating system.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-[#3B82F6]/10 flex items-center gap-2">
                  <span className="text-sm text-[#3B82F6]/70 font-medium">Explore Project</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Chatter Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/chatter" className="group h-full">
              <div className="h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-[#8ECAE6]/10 to-transparent border border-[#8ECAE6]/20 hover:border-[#8ECAE6]/50 hover:bg-gradient-to-br hover:from-[#8ECAE6]/15 hover:to-[#8ECAE6]/5 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <Image 
                      src="/logos/chatter_logo.png" 
                      alt="Chatter Icon" 
                      width={56} 
                      height={56} 
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <ArrowRight size={20} className="text-[#8ECAE6]/50 group-hover:text-[#8ECAE6] group-hover:translate-x-1 transition-all" />

                </div>

                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">Chatter</h4>
                  <p className="text-base text-white/60 mb-4">Ephemeral Messaging</p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Privacy-first messaging platform with ephemeral conversations and secure communications.
                  </p>
                </div>

<div className="mt-6 pt-6 border-t border-[#8ECAE6]/10 flex items-center gap-2">
                  <span className="text-sm text-[#8ECAE6]/70 font-medium">Explore Project</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

{/* --- CHATTER FLOATING CARD --- */}
      // <motion.div 
      //   initial={{ y: 100, opacity: 0 }}
      //   animate={{ y: 0, opacity: 1 }}
      //   transition={{ delay: 0.8, duration: 0.6 }}
      //   className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md"
      // >
      //   <Link href="/chatter" className="group">
      //     <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center justify-between hover:border-[#8ECAE6]/50 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      //       <div className="flex items-center gap-4">
      //         <div className="relative w-12 h-12 rounded-xl bg-[#050505] border border-white/5 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
      //           <Image 
      //             src="/logos/chatter_logo.png" 
      //             alt="Chatter" 
      //             width={30} 
      //             height={30} 
      //           />
      //         </div>
      //         <div>
      //           <h4 className="text-white font-bold text-sm tracking-tight">Explore Chatter</h4>
      //           <p className="text-white/40 text-xs">Privacy-first ephemeral messaging</p>
      //         </div>
      //       </div>
            
      //       <div className="bg-white/5 p-2 rounded-full group-hover:bg-[#8ECAE6] group-hover:text-black transition-colors">
      //         <ArrowUpRight size={18} />
      //       </div>
      //     </div>
      //   </Link>
      // </motion.div>



// 'use client';
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useRef } from "react";
// import Link from "next/link";

// export default function HeroSection({ homeRef, contactbtnRef, scrollToContact }: any) {
//   return (
//     <section
//       ref={homeRef}
//       className="relative flex flex-col-reverse md:flex-row h-[740px] px-6 sm:px-12 py-32 items-center gap-10 bg-[#0a0a0a] overflow-hidden"
//     >
//       {/* Background Glow */}
//       <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#8ECAE6]/20 rounded-full blur-3xl z-0" />
//       <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#FB8500]/20 rounded-full blur-3xl z-0" />

//       {/* Decorative Circles */}
//       <div className="absolute w-40 h-40 border border-white/10 rounded-full top-[10%] left-[5%] hidden md:block" />
//       <div className="absolute w-60 h-60 border border-white/5 rounded-full bottom-[15%] right-[10%] hidden md:block" />

//       {/* Left Text Section */}
//       <div className="md:w-1/2 z-10 flex flex-col gap-6">
//         <motion.h1
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
//         >
//           <span className="text-[#C0C0C0]">Hello World!</span> <br /> Dream it. Build it. Scale it.
//         </motion.h1>

//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.1, duration: 0.5 }}
//           className="text-white/60 text-base sm:text-lg"
//         >
//           Hi, I'm Manideep Nera, a passionate developer exploring AI and web technologies.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="flex items-center gap-4"
//         >
//           <button
//             ref={contactbtnRef}
//             onClick={scrollToContact}
//             className="px-5 py-2 text-sm border border-white/20 rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out"
//           >
//             Contact
//           </button>
//           <span className="text-green-400 text-sm animate-pulse">● Available for collaboration.</span>
//         </motion.div>
//       </div>

//       {/* Right Image Section */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//         className="md:w-1/2 w-full max-w-md mx-auto relative aspect-square rounded-xl overflow-hidden border border-white/10 shadow-2xl z-10"
//       >
//         <Image
//           src="/profile.png"
//           alt="Profile"
//           fill
//           className="object-cover object-center rounded-xl"
//         />
//       </motion.div>
//     </section>
//   );
// }
