'use client';

import { motion } from 'framer-motion';
import { Lightbulb, BookOpen, Beaker, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectHierarchy() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative px-6 sm:px-12 py-20 sm:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            The Architecture
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            How Vision in Motion connects research, vision, and implementation
          </p>
        </motion.div>

        {/* Hierarchy Container */}
        <div className="relative space-y-12">
          {/* Level 1: Vision in Motion */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="max-w-2xl mx-auto px-8 py-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/20 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-white/50 text-sm font-medium tracking-widest mb-2 uppercase">
                  Overarching Framework
                </p>
                <h3 className="text-4xl font-bold text-white mb-2">Vision in Motion</h3>
                <p className="text-white/60 text-base">
                  The unified initiative connecting theory, strategy, and execution
                </p>
              </div>
            </div>
            
            {/* Connector down */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 w-0.5 h-12 bg-gradient-to-b from-white/40 to-white/10" />
          </motion.div>

          {/* Level 2: Project CtoC & USE Framework */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
              {/* Left: Project CtoC */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                {/* Simple vertical line from top */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-white/40 to-white/10" />

                <div className="p-7 rounded-2xl bg-gradient-to-br from-[#FFB703]/10 to-[#FB8500]/5 border border-[#FFB703]/30 hover:border-[#FFB703]/50 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-[#FFB703]/20 border border-[#FFB703]/30 flex-shrink-0">
                      <Lightbulb size={20} className="text-[#FFB703]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-medium tracking-wider mb-1">THE MAIN VISION</p>
                      <h4 className="text-2xl font-bold text-white">Project CtoC</h4>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    The complete architectural blueprint for a Unified Social Ecosystem. Represents the full-scale vision integrating social, communication, community, professional, and intelligent systems.
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-t border-white/10">
                      <span className="text-white/50 text-sm">Scope</span>
                      <span className="text-white/90 font-medium">Complete Ecosystem</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-white/10">
                      <span className="text-white/50 text-sm">Status</span>
                      <span className="text-[#FFB703] font-medium">Blueprint</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-white/10">
                      <span className="text-white/50 text-sm">Scale</span>
                      <span className="text-white/90 font-medium">Global</span>
                    </div>
                  </div>
                  
                  <Link 
                    href="/vision-in-motion/use"
                    className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFB703]/10 hover:bg-[#FFB703]/20 border border-[#FFB703]/30 hover:border-[#FFB703]/50 text-[#FFB703] font-medium transition-all text-sm"
                  >
                    Explore
                    <ArrowRight size={14} />
                  </Link>
                </div>
                
                {/* Connector down */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-white/20 to-white/10" />
              </motion.div>

              {/* Right: USE Framework */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                {/* Simple vertical line from top */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-white/40 to-white/10" />

                <div className="p-7 rounded-2xl bg-gradient-to-br from-[#8ECAE6]/10 to-[#FFB703]/5 border border-[#8ECAE6]/30 hover:border-[#8ECAE6]/50 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-[#8ECAE6]/20 border border-[#8ECAE6]/30 flex-shrink-0">
                      <BookOpen size={20} className="text-[#8ECAE6]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-medium tracking-wider mb-1">THEORETICAL FOUNDATION</p>
                      <h4 className="text-2xl font-bold text-white">USE Framework</h4>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    The research-backed theory explaining how digital platforms evolve. Provides the conceptual foundation and design principles guiding all Project CtoC development.
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-t border-white/10">
                      <span className="text-white/50 text-sm">Scope</span>
                      <span className="text-white/90 font-medium">Theory & Framework</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-white/10">
                      <span className="text-white/50 text-sm">Status</span>
                      <span className="text-[#8ECAE6] font-medium">Published</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-white/10">
                      <span className="text-white/50 text-sm">Role</span>
                      <span className="text-white/90 font-medium">Guides Development</span>
                    </div>
                  </div>
                  
                  <Link 
                    href="/vision-in-motion/use"
                    className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8ECAE6]/10 hover:bg-[#8ECAE6]/20 border border-[#8ECAE6]/30 hover:border-[#8ECAE6]/50 text-[#8ECAE6] font-medium transition-all text-sm"
                  >
                    Explore
                    <ArrowRight size={14} />
                  </Link>
                </div>
                
                {/* Connector down */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-white/20 to-white/10" />
              </motion.div>
            </div>
            
            {/* Connection point visual aid (bottom) */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 w-2 h-2 rounded-full bg-white/30" />
          </div>

          {/* Level 3: Corex */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Connector from above */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-white/20 to-white/10" />

            <div className="max-w-2xl mx-auto p-7 rounded-2xl bg-gradient-to-br from-[#8ECAE6]/10 to-[#FB8500]/5 border border-[#8ECAE6]/40 hover:border-[#8ECAE6]/60 transition-all duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="p-3 rounded-xl bg-[#8ECAE6]/20 border border-[#8ECAE6]/30 flex-shrink-0">
                  <Beaker size={20} className="text-[#8ECAE6]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium tracking-wider mb-1">PROOF OF CONCEPT</p>
                  <h4 className="text-2xl font-bold text-white">Corex</h4>
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-4">
                A functional implementation demonstrating core USE principles in practice. Corex serves as a proof-of-concept—showing that the theory works and validating Project CtoC's architectural vision.
              </p>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                <span className="text-white font-medium">Think of it as:</span> A working prototype testing key concepts from the full Project CtoC vision.
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-t border-white/10">
                  <span className="text-white/50 text-sm">Scale</span>
                  <span className="text-white/90 font-medium">Functional Sample</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-white/10">
                  <span className="text-white/50 text-sm">Status</span>
                  <span className="text-[#8ECAE6] font-medium">Live & Active</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-white/10">
                  <span className="text-white/50 text-sm">Purpose</span>
                  <span className="text-white/90 font-medium">Validate & Demonstrate</span>
                </div>
              </div>
              
              <Link 
                href="/vision-in-motion/use"
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8ECAE6]/10 hover:bg-[#8ECAE6]/20 border border-[#8ECAE6]/30 hover:border-[#8ECAE6]/50 text-[#8ECAE6] font-medium transition-all text-sm"
              >
                Explore
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/15 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-white mb-4">Why This Matters</h3>
          <p className="text-white/70 leading-relaxed mb-3">
            <span className="text-white font-medium">Corex proves the concept.</span> By demonstrating a working implementation of USE principles, it validates the architectural thinking and shows what's possible at scale.
          </p>
          <p className="text-white/70 leading-relaxed">
            <span className="text-white font-medium">Project CtoC is the future.</span> A truly integrated ecosystem combining social, communication, community, professional, and intelligent systems. Corex is the first proof point on that journey.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
