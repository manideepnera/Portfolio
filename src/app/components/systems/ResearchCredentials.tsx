'use client';

import { motion } from 'framer-motion';
import { BookOpen, Download } from 'lucide-react';

export default function ResearchCredentials() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative px-6 sm:px-12 py-16 sm:py-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-gradient-to-br from-[#8ECAE6]/5 to-[#FFB703]/5 rounded-xl p-8 border border-[#8ECAE6]/20 hover:border-[#8ECAE6]/40 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={24} className="text-[#8ECAE6]" />
                <h3 className="text-2xl font-bold text-white">Research Foundation</h3>
              </div>

              <h4 className="text-lg font-semibold text-white mb-2">
                The Unified Social Ecosystem (USE):
                <span className="block text-base font-normal text-white/60 mt-1">
                  A New Conceptual Framework for the Evolution of Digital Social Systems
                </span>
              </h4>

              <p className="text-white/70 mb-4">
                Author: <span className="font-semibold text-white">Manideep Nera</span>
              </p>

              <p className="text-white/60 leading-relaxed mb-4">
                The systems presented on this page are grounded in research into how modern digital platforms are fundamentally transforming from isolated networks into integrated ecosystems. The USE framework provides a theoretical foundation for understanding this evolution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/50 mb-6">
                <div>
                  <p className="text-white/60 font-medium mb-1">Key Concepts:</p>
                  <ul className="space-y-1 text-xs">
                    <li>✓ Five structural layers</li>
                    <li>✓ Convergence principle</li>
                    <li>✓ Ecosystem evolution</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white/60 font-medium mb-1">Framework Covers:</p>
                  <ul className="space-y-1 text-xs">
                    <li>✓ Social implications</li>
                    <li>✓ Economic transformation</li>
                    <li>✓ Future perspectives</li>
                  </ul>
                </div>
              </div>
            </div>

            <motion.a
              href="/USE-by-Manideep-Nera.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="group/btn flex-shrink-0 flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-gradient-to-r from-[#8ECAE6]/20 to-[#FFB703]/20 border border-[#8ECAE6]/30 hover:border-[#8ECAE6]/50 text-white font-semibold transition-all duration-300"
            >
              <Download size={18} />
              <div className="flex flex-col items-start">
                <span className="text-sm">Download</span>
                <span className="text-xs text-white/60">Full Paper (PDF)</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
