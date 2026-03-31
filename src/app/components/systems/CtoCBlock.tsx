'use client';

import { motion } from 'framer-motion';
import { GitBranch } from 'lucide-react';

export default function CtoCBlock() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative px-6 sm:px-12 py-16 sm:py-24 bg-[#0a0a0a]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-gradient-to-br from-[#FFB703]/5 via-[#0a0a0a] to-[#FB8500]/5 rounded-2xl border border-white/10 p-8 sm:p-12 hover:border-[#FFB703]/30 transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB703]/10 border border-[#FFB703]/30 mb-4"
              >
                <GitBranch size={14} className="text-[#FFB703]" />
                <span className="text-xs font-semibold text-[#FFB703] uppercase tracking-wider">Architecture</span>
              </motion.div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mt-4">Project CtoC</h3>
            </div>
            <div className="text-5xl opacity-15">◇</div>
          </div>

          {/* Content */}
          <div className="mb-8">
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              An architectural exploration of the <span className="text-white">convergence principle</span> at the heart of USE. CtoC represents how the five layers of the Unified Social Ecosystem scale and compound across domains.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#FFB703]/10 border border-[#FFB703]/30">
                    <span className="text-sm font-bold text-[#FFB703]">01</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Layer Convergence</h4>
                  <p className="text-white/60 text-sm">How five layers integrate into a unified framework</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#FFB703]/10 border border-[#FFB703]/30">
                    <span className="text-sm font-bold text-[#FFB703]">02</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Multidimensional Design</h4>
                  <p className="text-white/60 text-sm">Systems where social, professional, and community coexist</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#FFB703]/10 border border-[#FFB703]/30">
                    <span className="text-sm font-bold text-[#FFB703]">03</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Ecosystem Thinking</h4>
                  <p className="text-white/60 text-sm">Moving from isolated platforms to integrated environments</p>
                </div>
              </div>
            </div>
          </div>

          {/* No CTA - Blueprint only */}
        </motion.div>
      </div>
    </motion.section>
  );
}
