'use client';

import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Zap } from 'lucide-react';

export default function FutureBlock() {
  const directions = [
    {
      icon: Sparkles,
      title: 'Economic Evolution',
      description: 'USE enables new digital economies-creator platforms, entrepreneurship, and virtual marketplaces within unified ecosystems',
    },
    {
      icon: TrendingUp,
      title: 'Intelligent Integration',
      description: 'AI and algorithms as active architects shaping interactions, not just optimizing content delivery',
    },
    {
      icon: Zap,
      title: 'Digital Society',
      description: 'Platforms evolving into full digital societies where human and artificial agents coexist meaningfully',
    },
  ];

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
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The Evolution of USE</h2>
          <p className="text-white/60 text-lg">
            As digital platforms continue to integrate across the five layers, we enter a new era. Here's where USE is headed:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {directions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className="group p-6 rounded-lg bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#FFB703]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Icon size={24} className="text-[#FFB703]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-[#8ECAE6]/5 to-[#FFB703]/5 border border-[#8ECAE6]/20"
        >
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            <span className="text-white font-semibold">The common thread:</span> Digital platforms are evolving from isolated tools into integrated ecosystems that mirror society itself-with social, communicational, communal, professional, and intelligent dimensions coexisting.
          </p>
          <p className="text-white/60 text-sm">
            The goal is to build tools that respect human agency while enabling new possibilities. Systems that transcend the limitations of traditional networks and evolve into true digital ecosystems.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
