'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Lock, Timer, CloudOff, Zap, ShieldCheck, 
  ChevronLeft, Smartphone, ArrowRight, Github
} from 'lucide-react';
import { Jost } from 'next/font/google';

const fontJost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jost',
});

const PlayStoreBadge = () => (
  <div className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-2xl hover:bg-[#8ECAE6] transition-all cursor-pointer group">
    <Smartphone size={20} fill="black" />
    <div className="flex flex-col items-start leading-none">
      <span className="text-[10px] uppercase font-bold opacity-60">Get it on</span>
      <span className="text-lg font-bold">Google Play</span>
    </div>
  </div>
);

export default function ChatterPage() {
  return (
    <main className={`${fontJost.variable} bg-[#050505] text-white selection:bg-[#8ECAE6] selection:text-black min-h-screen font-sans`}>
      
      {/* --- NAVIGATION --- */}
      <nav className="absolute top-0 w-full z-50 px-8 py-8 flex justify-between items-center">
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors"
        >
          <div className="p-2 rounded-full border border-white/5 bg-white/5 group-hover:border-white/20 transition-all">
            <ChevronLeft size={18} />
          </div>
          <span className="text-sm font-medium tracking-wide">Exit</span>
        </Link>
        
        {/* Chatter Logo (Icon Only) */}
        <Image 
          src="/logos/chatter_logo.png" 
          alt="Chatter Icon" 
          width={40} 
          height={40} 
          className="opacity-80 hover:opacity-100 transition-opacity"
        />
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Cinematic Background Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#8ECAE6]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#FB8500]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center mb-10"
          >
            {/* Full Logo (Font + Icon) */}
            <Image
              src="/logos/chatter_light.png"
              alt="Chatter Full Logo"
              width={220}
              height={60}
              className="mb-4"
              priority
            />
            <div className="px-3 py-1 rounded-full border border-[#8ECAE6]/30 bg-[#8ECAE6]/5 text-[#8ECAE6] text-[10px] uppercase tracking-[0.2em] font-bold">
              Android Exclusive
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]"
          >
            Talk. Vanish. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/60">Repeat.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed mb-12"
          >
            Communication that doesn't leave a trail. 
            Encrypted, ephemeral, and built specifically for your mobile device.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <PlayStoreBadge />
            <button className="px-10 py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors flex items-center gap-2 group">
              View Protocol <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- MOBILE FOCUS BENTO GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Hero Bento */}
          <div className="md:col-span-8 h-[400px] rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-12 relative overflow-hidden group">
             <div className="relative z-10 max-w-sm">
               <Timer className="text-[#FB8500] mb-6" size={40} />
               <h3 className="font-jost font-medium text-4xl mb-4 italic">24h Destruction</h3>
               <p className="text-white/50 text-lg leading-relaxed">
                 Chatter isn't a cloud service. Messages live on your phone for 24 hours, then they're purged from existence. Forever.
               </p>
             </div>
             <div className="absolute right-[-10%] bottom-[-10%] opacity-10 group-hover:opacity-20 transition-opacity">
                <Timer size={400} />
             </div>
          </div>

          {/* Side Card */}
          <div className="md:col-span-4 h-[400px] rounded-[2.5rem] border border-white/10 bg-[#8ECAE6]/5 p-12 flex flex-col justify-between">
            <Lock className="text-[#8ECAE6]" size={40} />
            <div>
              <h3 className="font-jost font-medium text-3xl mb-4">Mobile Only</h3>
              <p className="text-white/40">
                By removing the web version, we eliminate the biggest security leak: browser vulnerabilities and desktop screen-grabbing.
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="md:col-span-4 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-black"><CloudOff className="text-white/60" /></div>
            <div>
              <h4 className="font-medium text-lg">Local Logic</h4>
              <p className="text-sm text-white/40">Zero server-side logs.</p>
            </div>
          </div>

          <div className="md:col-span-4 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-black"><Zap className="text-[#FB8500]" /></div>
            <div>
              <h4 className="font-medium text-lg">Push Protocol</h4>
              <p className="text-sm text-white/40">Instant, peer-to-peer delivery.</p>
            </div>
          </div>

          <div className="md:col-span-4 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center gap-6">
            <div className="p-4 rounded-2xl bg-black"><ShieldCheck className="text-[#8ECAE6]" /></div>
            <div>
              <h4 className="font-medium text-lg">Bio-Lock</h4>
              <p className="text-sm text-white/40">Fingerprint protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY STRIP --- */}
      <section className="py-20 border-y border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Image
            src="/logos/chatter_logo.png"
            alt="Chatter Icon"
            width={80}
            height={80}
            className="mx-auto mb-8 block opacity-80"
          />
          
          <h2 className="text-3xl font-bold mb-6 italic text-white">
            "Your history shouldn't follow you."
          </h2>
          
          <p className="text-white/50 text-lg leading-relaxed mb-10">
            Chatter is an Android-first communication space designed to feel human: 
            present, private, and temporary. No web hooks, no desktop syncing, no traces.
          </p>
          <div className="flex justify-center">
            <PlayStoreBadge />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 px-8 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              {/* Logo Icon in Footer */}
              <Image src="/logos/chatter_logo.png" alt="Logo" width={32} height={32} />
              <span className="font-jost font-medium text-xl tracking-widest uppercase">Chatter</span>
            </div>
            <p className="text-white/20 text-xs tracking-widest uppercase">Mobile-First Privacy</p>
          </div>

          <div className="flex gap-10 text-sm text-white/40 font-medium">
            <a href="#" className="hover:text-[#8ECAE6] transition">Security</a>
            <a href="#" className="hover:text-[#8ECAE6] transition">APK Download</a>
            <a href="#" className="hover:text-[#8ECAE6] transition flex items-center gap-2">
              <Github size={14} /> Source
            </a>
          </div>

          <div className="text-xs text-white/20 text-center md:text-right font-medium">
            Available on Google Play Store.<br />
            © 2025 Chatter Messaging.
          </div>
        </div>
      </footer>
    </main>
  );
}