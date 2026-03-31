'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SystemsCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative px-6 sm:px-12 py-20 sm:py-28 bg-gradient-to-b from-[#0a0a0a] to-[#000000]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#8ECAE6]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Heading */}
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Build What's Next
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-white/60 mb-12 leading-relaxed"
          >
            I'm looking for builders, thinkers, and collaborators who understand the vision. If you're interested in exploring these ideas or want to discuss what's possible-let's connect.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:your-email@example.com"
              className="group px-8 py-4 rounded-lg bg-gradient-to-r from-[#8ECAE6] to-[#FFB703] text-black font-semibold hover:shadow-lg hover:shadow-[#8ECAE6]/40 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Start a Conversation
            </a>
            <a
              href="/USE-by-Manideep-Nera.pdf"
              download
              className="group px-8 py-4 rounded-lg bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Download USE Paper
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 mb-8">
            <a
              href="#"
              className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          {/* Footer Note */}
          <motion.p variants={itemVariants} className="text-sm text-white/40">
            Back to <Link href="/" className="text-white/60 hover:text-white transition-colors underline">portfolio</Link>
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
