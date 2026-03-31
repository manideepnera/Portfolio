'use client';

import { motion } from 'framer-motion';
import { Network, Users, Share2, Zap, Brain } from 'lucide-react';

export default function USEBlock() {
  const layers = [
    {
      icon: Share2,
      title: 'Social Layer',
      description: 'Content creation and social interaction—posts, videos, comments, reactions, and sharing mechanisms that form the basis of human connection.',
    },
    {
      icon: Users,
      title: 'Communication Layer',
      description: 'Direct and group communication through messaging, voice calls, video calls, and real-time interaction across the ecosystem.',
    },
    {
      icon: Network,
      title: 'Community Layer',
      description: 'Communities, groups, forums, and digital collectives where individuals participate in shared interests and collective identities.',
    },
    {
      icon: Zap,
      title: 'Professional Layer',
      description: 'Professional identity, collaboration, employment opportunities, entrepreneurship, and the evolving digital economy.',
    },
    {
      icon: Brain,
      title: 'Intelligence Layer',
      description: 'AI, algorithms, data analytics, and automation shaping user experiences, content distribution, and decision-making.',
    },
  ];

  const principles = [
    { title: 'Convergence', description: 'Digital functions converge into a single integrated system' },
    { title: 'Multidimensional Interaction', description: 'Users engage in social, professional, and communal interactions simultaneously' },
    { title: 'Ecosystem Principle', description: 'Platforms evolve to include technological, social, economic, and cultural components' },
    { title: 'Hybrid Governance', description: 'Control shared between institutions, technology, and users' },
    { title: 'Intelligence', description: 'AI and algorithms actively shape interactions and structures' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative px-6 sm:px-12 py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111111]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8ECAE6]/10 border border-[#8ECAE6]/30 mb-6"
          >
            <span className="text-xs font-semibold text-[#8ECAE6] uppercase tracking-wider">Foundation</span>
          </motion.div>
          <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            USE
            <span className="block text-lg font-semibold text-white/60 mt-2">
              Unified Social Ecosystem
            </span>
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto mb-6">
            A theoretical framework explaining how modern digital platforms are transforming from isolated networks into integrated ecosystems resembling a digital society.
          </p>
        </motion.div>

        {/* Core Concept */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-xl bg-gradient-to-r from-[#8ECAE6]/5 to-[#FFB703]/5 border border-[#8ECAE6]/20 mb-16"
        >
          <p className="text-white/80 text-lg leading-relaxed">
            Traditional social media models treat platforms as isolated systems with specific functions. USE proposes that modern platforms are evolving into integrated digital environments where social interaction, communication, community participation, professional collaboration, and intelligent systems coexist within a single interconnected structure. This represents a fundamental shift from networks to ecosystems.
          </p>
        </motion.div>

        {/* Five Layers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h4 className="text-2xl font-bold text-white mb-8">Five Structural Layers</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  className="group relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-lg p-6 border border-white/10 hover:border-[#8ECAE6]/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8ECAE6]/0 via-[#8ECAE6]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
                  <div className="relative z-10">
                    <Icon size={24} className="text-[#8ECAE6] mb-4" />
                    <h5 className="font-semibold text-white mb-2 text-sm">{layer.title}</h5>
                    <p className="text-white/60 text-xs leading-relaxed">{layer.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Five Principles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-2xl font-bold text-white mb-8">Fundamental Principles</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.08 }}
                className="p-5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#FFB703]/30 transition-all"
              >
                <h5 className="font-semibold text-[#FFB703] mb-2">{principle.title}</h5>
                <p className="text-white/60 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lower section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-xl bg-white/[0.02] border border-white/10"
        >
          <p className="text-white/70 leading-relaxed mb-4">
            <span className="font-semibold text-white">The Evolution:</span> Digital platforms are no longer separate tools but interconnected environments where multiple forms of human interaction coexist and influence one another. Unlike traditional networks focused on individual connections, USE encompasses technological infrastructure, economic activities, cultural dynamics, and intelligent systems.
          </p>
          <p className="text-white/60 text-sm">
            This framework provides a theoretical foundation for understanding how digital platforms are evolving toward more integrated, intelligent, and society-like environments.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h4 className="text-2xl font-bold text-white mb-8">Traditional Networks vs. Unified Social Ecosystem</h4>
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/[0.03] border-b border-white/10">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-white">Aspect</th>
                  <th className="text-left px-6 py-4 font-semibold text-white/70">Traditional Networks</th>
                  <th className="text-left px-6 py-4 font-semibold text-[#8ECAE6]">USE Ecosystems</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Structure</td>
                  <td className="px-6 py-4 text-white/60">Isolated platforms</td>
                  <td className="px-6 py-4 text-[#8ECAE6]">Integrated ecosystem</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Function</td>
                  <td className="px-6 py-4 text-white/60">Single-purpose</td>
                  <td className="px-6 py-4 text-[#8ECAE6]">Multi-purpose</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Control</td>
                  <td className="px-6 py-4 text-white/60">Company-centered</td>
                  <td className="px-6 py-4 text-[#8ECAE6]">Hybrid governance</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Interaction Type</td>
                  <td className="px-6 py-4 text-white/60">Mainly social</td>
                  <td className="px-6 py-4 text-[#8ECAE6]">Social + professional + communal + economic</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Scope</td>
                  <td className="px-6 py-4 text-white/60">Network-based</td>
                  <td className="px-6 py-4 text-[#8ECAE6]">Society-like environment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
