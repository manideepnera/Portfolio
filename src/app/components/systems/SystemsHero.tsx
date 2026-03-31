'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function SystemsHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8ECAE6]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl"
      >
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Tag */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white/60 font-medium tracking-wider">
              AN INTERCONNECTED VISION
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-[#8ECAE6] to-white bg-clip-text text-transparent">
              Vision in Motion
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            Research-backed framework connecting digital ecosystems, social architecture, and real-world implementation.
          </motion.p>

          {/* Features Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
            {[
              { label: 'Research', desc: 'USE Framework' },
              { label: 'Architecture', desc: 'Project CtoC' },
              { label: 'Implementation', desc: 'Corex' },
            ].map((item) => (
              <div key={item.label} className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="text-white/50 text-xs font-medium tracking-wider mb-1">{item.label}</div>
                <div className="text-white/90 font-medium">{item.desc}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
            <button className="group px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-medium transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base">
              Explore
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs">Scroll to explore</span>
          <ArrowDown size={18} />
        </div>
      </motion.div>
    </section>
  );
}
