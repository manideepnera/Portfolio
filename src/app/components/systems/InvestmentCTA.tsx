'use client';

import { motion } from 'framer-motion';
import { Zap, Users, TrendingUp, ArrowRight } from 'lucide-react';

export default function InvestmentCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative px-6 sm:px-12 py-20 sm:py-28 bg-gradient-to-b from-[#0a0a0a] to-[#000000]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#8ECAE6]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main Pitch */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Help Build the Future
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-white/70 mb-6 leading-relaxed max-w-2xl mx-auto"
          >
            Project CtoC is an ambitious initiative to build the Unified Social Ecosystem-a truly integrated digital environment where social, communication, community, professional, and intelligent systems coexist. We're looking for visionary partners, investors, and builders to make this happen.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base text-white/60 max-w-2xl mx-auto"
          >
            Corex already proves the concept works. Now it's time to scale.
          </motion.p>
        </motion.div>

        {/* Three Pillars: Why Invest */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: TrendingUp,
              title: 'Market Opportunity',
              description:
                'Digital ecosystems are the future. The platform that successfully integrates all forms of human interaction will define the next generation of the internet.',
            },
            {
              icon: Users,
              title: 'Research-Backed',
              description:
                'Built on the Unified Social Ecosystem framework-published research into how digital platforms are fundamentally transforming.',
            },
            {
              icon: Zap,
              title: 'Proven Concept',
              description:
                'Corex demonstrates the architectural thinking and proves that the integration works. From sample to scale.',
            },
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group p-6 rounded-lg bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#8ECAE6]/30 transition-all duration-300"
              >
                <Icon size={28} className="text-[#8ECAE6] mb-4" />
                <h3 className="font-semibold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* The Ask */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl bg-gradient-to-r from-[#8ECAE6]/10 to-[#FFB703]/10 border border-[#8ECAE6]/30"
          >
            <h3 className="text-2xl font-bold text-white mb-4">How You Can Be Part of This</h3>
            <div className="space-y-4 text-white/70">
              <p>
                <span className="text-[#8ECAE6] font-semibold">Investors:</span> Fund the development of Project CtoC's core infrastructure. Help us build a platform that respects human agency while enabling new possibilities.
              </p>
              <p>
                <span className="text-[#FFB703] font-semibold">Builders & Engineers:</span> Join the team designing and implementing the five layers of the Unified Social Ecosystem. Shape the architecture that will define digital interaction for the next decade.
              </p>
              <p>
                <span className="text-[#FB8500] font-semibold">Advisors & Partners:</span> Bring your expertise in product, AI, infrastructure, or business strategy. Help us navigate the complexities of building at this scale.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            variants={itemVariants}
            href="mailto:manideep@yourdomain.com"
            className="group px-8 py-4 rounded-lg bg-gradient-to-r from-[#8ECAE6] to-[#FFB703] text-black font-semibold hover:shadow-lg hover:shadow-[#8ECAE6]/40 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Let's Talk
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="/USE-by-Manideep-Nera.pdf"
            download
            className="group px-8 py-4 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Read the Research
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Bottom Message */}
        <motion.p
          variants={itemVariants}
          className="text-center text-white/40 text-sm mt-12 max-w-2xl mx-auto"
        >
          The future of digital interaction is interconnected. Project CtoC isn't just another platform-it's a rethinking of what digital ecosystems can be. Join us in building it.
        </motion.p>
      </div>
    </motion.section>
  );
}
