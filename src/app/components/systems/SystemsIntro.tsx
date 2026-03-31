'use client';

import { motion } from 'framer-motion';

export default function SystemsIntro() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative px-6 sm:px-12 py-16 sm:py-24 bg-[#0a0a0a]"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">An Integrated Initiative</h2>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-white/70 leading-relaxed"
        >
          <p className="text-lg">
            Vision in Motion represents three connected elements working together: a <span className="text-white">theoretical framework</span> (USE), an <span className="text-white">architectural vision</span> (Project CtoC), and <span className="text-white">real-world proof</span> (Corex).
          </p>

          <p className="text-lg">
            Unlike traditional projects that operate in isolation, these three layers inform and strengthen each other. Research guides architecture. Architecture informs implementation. Implementation validates research. All pointing toward one goal: building the Unified Social Ecosystem.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { label: 'USE', desc: 'Theoretical foundation' },
              { label: 'Project CtoC', desc: 'Architectural vision' },
              { label: 'Corex', desc: 'Real implementation' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="p-4 rounded-lg bg-white/[0.02] border border-white/10 hover:border-[#8ECAE6]/30 transition-colors"
              >
                <div className="text-[#8ECAE6] font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-white/50 text-sm">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
