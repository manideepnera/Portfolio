'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CorexBlock() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative px-6 sm:px-12 py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-gradient-to-br from-[#8ECAE6]/10 via-[#0a0a0a] to-[#FB8500]/5 rounded-2xl border border-[#8ECAE6]/20 p-8 sm:p-12 hover:border-[#8ECAE6]/40 transition-all duration-300 overflow-hidden"
        >
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8ECAE6]/0 via-[#8ECAE6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8ECAE6]/10 border border-[#8ECAE6]/30 mb-4"
                >
                  <Zap size={14} className="text-[#8ECAE6]" />
                  <span className="text-xs font-semibold text-[#8ECAE6] uppercase tracking-wider">Live System</span>
                </motion.div>
                <h3 className="text-4xl sm:text-5xl font-bold text-white mt-4">Corex</h3>
              </div>
              <div className="text-5xl opacity-20">◆</div>
            </div>

            {/* Content */}
            <div className="mb-8">
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                A real-world implementation exploring the <span className="text-white">intersection of the Social, Communication, and Professional layers</span> of the Unified Social Ecosystem. Corex demonstrates how these layers integrate in practice.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  'Multi-layer integration',
                  'Real-time interactions',
                  'Scalable architecture',
                  'Privacy-centered design',
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8ECAE6]" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mt-10 flex-wrap"
            >
              <a href="https://corexplatform.vercel.app/" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#8ECAE6]/10 border border-[#8ECAE6]/30 text-white hover:bg-[#8ECAE6]/20 hover:border-[#8ECAE6]/50 transition-all">
                Visit Website
                <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.manideepnera.corex" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#8ECAE6]/10 border border-[#8ECAE6]/30 text-white hover:bg-[#8ECAE6]/20 hover:border-[#8ECAE6]/50 transition-all">
                Get on Google Play
                <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
