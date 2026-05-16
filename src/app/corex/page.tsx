'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe, MessageSquare, Lock, Users, Zap, Shield,
  ChevronLeft, MapPin, Download, ArrowRight, Bell, Star
} from 'lucide-react';
import { Poppins, Manrope } from 'next/font/google';

const fontSatoshi = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-satoshi',
});

const fontManrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

// ─── Color tokens ────────────────────────────────────────────────
const C = {
  bg: '#0D0D0D',
  surface: '#141414',
  card: '#1C1C1C',
  elevated: '#252525',
  border: '#2E2E2E',
  text: '#F2F2F2',
  textSec: '#B8B8B8',
  textMuted: '#7A7A7A',
  textHint: '#4A4A4A',
  primary: '#D4A373',
  accent: '#C97A2B',
  brandTint: '#2A1F12',
  gradStart: '#E6B98A',
  gradEnd: '#A3541E',
  danger: '#E35D5D',
  success: '#4FAF8F',
  like: '#FF3B5C',
  urgHigh: '#FF6B35',
  tagAnnouncementText: '#D4A373',
};

// ─── Play Store Badge ────────────────────────────────────────────
const PlayStoreBadge = ({ size = 'md' }) => (
  <a
    href="https://play.google.com/store/apps/details?id=com.corex.app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 rounded-xl border transition-all hover:scale-[1.03] group"
    style={{
      background: C.card,
      borderColor: C.border,
      padding: size === 'lg' ? '14px 24px' : '10px 18px',
    }}
  >
    {/* Google Play Icon */}
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3.18 23.76c.3.17.65.2.98.08L14.56 12 10.44 7.88 3.18 23.76z" fill={C.primary} />
      <path d="M20.72 10.22l-3.1-1.78-4.06 3.56 4.06 3.56 3.12-1.8a1.74 1.74 0 0 0 0-3.54z" fill={C.accent} />
      <path d="M3.18.24a1.1 1.1 0 0 0-.18.6v22.32c0 .22.06.42.18.6L14.56 12 3.18.24z" fill={C.gradStart} />
      <path d="M14.56 12L3.18 23.76c.33.12.7.08.98-.1l13.46-7.76L14.56 12z" fill={C.accent} />
    </svg>
    <div className="text-left">
      <p style={{ fontSize: '9px', color: C.textMuted, letterSpacing: '0.08em' }}>GET IT ON</p>
      <p style={{ fontSize: size === 'lg' ? '15px' : '13px', fontWeight: 600, color: C.text, letterSpacing: '0.02em' }}>Google Play</p>
    </div>
  </a>
);

// ─── Screenshot Display ───────────────────────────────────────────
const ScreenshotImage = ({ src, alt, className = '', scale = 1, active = false }: { src: string; alt: string; className?: string; scale?: number; active?: boolean }) => (
  <div
    className={`relative transition-all duration-500 ${className}`}
    style={{
      width: `${280 * scale}px`,
      opacity: active ? 1 : 0.6,
      transform: `scale(${active ? 1 : 0.88})`,
    }}
  >
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10">
      <Image src={src} alt={alt} width={280} height={600} className="w-full h-auto" priority />
    </div>
  </div>
)

// ─── Feature Pill ────────────────────────────────────────────────
const FeaturePill = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border text-sm font-medium"
    style={{ background: C.brandTint, borderColor: C.primary + '40', color: C.primary }}>
    <span style={{ color: C.accent }}>{icon}</span>
    {label}
  </div>
);

// ─── Main Component ──────────────────────────────────────────────
export default function CorexPage() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef(null);

  const screenshots = [
    '/projects/corex/Group 23.png',
    '/projects/corex/Group 26.png',
    '/projects/corex/Group 27.png',
    '/projects/corex/Group 28.png',
    '/projects/corex/Group 29.png',
    '/projects/corex/Group 30.png',
    '/projects/corex/Group 31.png',
    '/projects/corex/Group 32.png',
  ];

  const screenLabels = [
    'Home Feed', 'Your Core', 'Discover', 'Quick Ask',
    'Chatrooms', 'Profile', 'Notifications', 'Settings'
  ];

  const screenDescriptions = [
    'See everything happening in your environment at a glance — posts, updates, and activity from your Core.',
    'Your Core is your digital environment. College, workplace, or any space you belong to.',
    'Discover people, posts, and conversations beyond your Core without losing context.',
    'Ask anything. Get instant, anonymous responses from people in your environment.',
    'Organized group chats for every corner of your community — classes, clubs, departments.',
    'Be yourself or stay anonymous. Full control over how you appear in your Core.',
    'Stay on top of every interaction. Filtered, relevant, never noisy.',
    'Manage your identity, privacy, and preferences with full transparency.',
  ];

  // Auto-advance screenshots
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveScreen(prev => (prev + 1) % screenshots.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, screenshots.length]);

  const handleScreenSelect = (idx: number) => {
    setActiveScreen(idx);
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const prev = (activeScreen - 1 + screenshots.length) % screenshots.length;
  const next = (activeScreen + 1) % screenshots.length;

  return (
    <main
      className={`${fontSatoshi.variable} ${fontManrope.variable}`}
      style={{ background: C.bg, color: C.text, minHeight: '100vh', fontFamily: 'var(--font-satoshi), sans-serif' }}
    >
      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="w-full z-50 px-6 py-4 flex justify-between items-center"
        style={{ background: C.bg + 'EE', borderBottom: `1px solid ${C.border}`, backdropFilter: 'blur(16px)' }}>
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-70">
          <div className="p-2 rounded-full border" style={{ borderColor: C.border, background: C.surface }}>
            <ChevronLeft size={16} style={{ color: C.textSec }} />
          </div>
          <span className="text-sm font-medium" style={{ color: C.textMuted }}>Portfolio</span>
        </Link>

        <div className="flex items-center">
          <Image src="/logos/corex_full.png" alt="Corex" width={110} height={24} className="w-auto h-auto" />
        </div>

        <PlayStoreBadge size="sm" />
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative pt-16 pb-20 px-6 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div style={{
            position: 'absolute', top: '10%', left: '20%',
            width: '500px', height: '500px',
            background: `radial-gradient(circle, ${C.primary}18 0%, transparent 70%)`,
            borderRadius: '50%', filter: 'blur(40px)'
          }} />
          <div style={{
            position: 'absolute', bottom: '0', right: '15%',
            width: '400px', height: '400px',
            background: `radial-gradient(circle, ${C.accent}12 0%, transparent 70%)`,
            borderRadius: '50%', filter: 'blur(60px)'
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              {/* Badge */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: C.success }} />
                <span className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: C.textMuted }}>
                  Now Live on Google Play
                </span>
              </div>

              <div className="mb-3">
                <span style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: 'clamp(48px, 7vw, 80px)',
                  lineHeight: 1.0,
                  fontWeight: 700,
                  color: C.text,
                }}>
                  Connect Where
                </span>
              </div>
              <div className="mb-8">
                <span style={{
                  fontFamily: 'var(--font-satoshi)',
                  fontSize: 'clamp(48px, 7vw, 80px)',
                  lineHeight: 1.0,
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${C.gradStart}, ${C.accent})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Life Happens.
                </span>
              </div>

              <p className="text-lg leading-relaxed mb-10" style={{ color: C.textMuted, maxWidth: '420px' }}>
                Corex brings real-world communities into a structured digital space.
                Your college, workplace, or any Core — redefined.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                <FeaturePill icon={<MapPin size={12} />} label="Environment-Aware" />
                <FeaturePill icon={<Shield size={12} />} label="Private & Secure" />
                <FeaturePill icon={<Users size={12} />} label="Flexible Identity" />
                <FeaturePill icon={<Zap size={12} />} label="Quick Ask" />
              </div>

              <PlayStoreBadge size="lg" />
            </motion.div>

            {/* Right: Hero phone */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Glow behind phone */}
                <div style={{
                  position: 'absolute', inset: '-30px',
                  background: `radial-gradient(circle at center, ${C.primary}20 0%, transparent 70%)`,
                  borderRadius: '50%', filter: 'blur(30px)'
                }} />
                <ScreenshotImage
                  src={screenshots[0]}
                  alt="Corex App"
                  scale={1.1}
                  active={true}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── APP SHOWCASE ──────────────────────────────────────────── */}
      <section className="py-28 px-6 overflow-hidden" style={{ background: C.surface }}>
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: C.accent }}>
              Inside the App
            </p>
            <h2 style={{
              fontFamily: 'var(--font-satoshi)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              color: C.text,
              lineHeight: 1.1
            }}>
              Every screen, designed for your community
            </h2>
          </div>

          {/* ── 3-Phone Showcase ──────────────────────────── */}
          <div className="flex justify-center items-end gap-6 mb-16 relative" style={{ minHeight: '560px' }}>
            {/* Left phone (prev) */}
            <div
              className="cursor-pointer hidden md:block"
              onClick={() => handleScreenSelect(prev)}
              style={{ transform: 'translateY(40px)' }}
            >
              <ScreenshotImage
                src={screenshots[prev]}
                alt={screenLabels[prev]}
                scale={0.65}
                active={false}
              />
            </div>

            {/* Center phone (active) */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                >
                  <ScreenshotImage
                    src={screenshots[activeScreen]}
                    alt={screenLabels[activeScreen]}
                    scale={1.15}
                    active={true}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right phone (next) */}
            <div
              className="cursor-pointer hidden md:block"
              onClick={() => handleScreenSelect(next)}
              style={{ transform: 'translateY(40px)' }}
            >
              <ScreenshotImage
                src={screenshots[next]}
                alt={screenLabels[next]}
                scale={0.65}
                active={false}
              />
            </div>
          </div>

          {/* Active screen info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 border"
                style={{ background: C.brandTint, borderColor: C.primary + '40' }}>
                <span style={{ color: C.primary, fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {screenLabels[activeScreen]}
                </span>
              </div>
              <p className="text-base max-w-lg mx-auto" style={{ color: C.textMuted }}>
                {screenDescriptions[activeScreen]}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Screen selector tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {screenLabels.map((label, idx) => (
              <button
                key={idx}
                onClick={() => handleScreenSelect(idx)}
                className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  background: idx === activeScreen ? C.brandTint : 'transparent',
                  color: idx === activeScreen ? C.primary : C.textMuted,
                  border: `1px solid ${idx === activeScreen ? C.primary + '60' : C.border}`,
                  fontWeight: idx === activeScreen ? 600 : 400,
                }}
              >
                {label}
                {idx === activeScreen && (
                  <motion.div
                    layoutId="tabIndicator"
                    className="absolute inset-0 rounded-xl"
                    style={{ border: `1px solid ${C.primary}50`, pointerEvents: 'none' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="flex gap-1 justify-center mt-6">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleScreenSelect(idx)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: idx === activeScreen ? '28px' : '6px',
                  height: '6px',
                  background: idx === activeScreen ? C.primary : C.border,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BENTO FEATURES ────────────────────────────────────────── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: C.accent }}>Features</p>
          <h2 style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700,
            color: C.text,
          }}>
            Built for your world
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Large card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="md:col-span-7 rounded-3xl p-10 relative overflow-hidden group"
            style={{ background: C.card, border: `1px solid ${C.border}`, minHeight: '360px' }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at 70% 50%, ${C.primary}08 0%, transparent 60%)` }} />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: C.brandTint, border: `1px solid ${C.primary}40` }}>
                <MapPin size={22} style={{ color: C.primary }} />
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 700 }}>
                Built Around Your Environment
              </h3>
              <p className="text-base leading-relaxed" style={{ color: C.textMuted, maxWidth: '400px' }}>
                Your Core represents your real-world space. Connect with people in your college, workplace, or community
                with purpose — not noise.
              </p>
            </div>
            <div className="absolute right-[-60px] bottom-[-60px] opacity-5 group-hover:opacity-10 transition-opacity">
              <MapPin size={300} style={{ color: C.primary }} />
            </div>
          </motion.div>

          {/* Right stack */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-3xl p-8 flex items-center gap-5 group hover:scale-[1.02] transition-transform"
              style={{ background: C.card, border: `1px solid ${C.border}` }}
            >
              <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center"
                style={{ background: C.elevated }}>
                <MessageSquare size={20} style={{ color: C.primary }} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Structured Sharing</h4>
                <p className="text-sm" style={{ color: C.textMuted }}>Post within your Core. Relevant content only — no random noise.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="rounded-3xl p-8 flex items-center gap-5 group hover:scale-[1.02] transition-transform"
              style={{ background: C.brandTint, border: `1px solid ${C.primary}30` }}
            >
              <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center"
                style={{ background: C.primary + '20' }}>
                <Zap size={20} style={{ color: C.primary }} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: C.primary }}>Quick Ask</h4>
                <p className="text-sm" style={{ color: C.textMuted }}>Get instant responses from people around you — anonymously.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="rounded-3xl p-8 flex items-center gap-5 group hover:scale-[1.02] transition-transform"
              style={{ background: C.card, border: `1px solid ${C.border}` }}
            >
              <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center"
                style={{ background: C.elevated }}>
                <Users size={20} style={{ color: C.accent }} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Flexible Identity</h4>
                <p className="text-sm" style={{ color: C.textMuted }}>Be yourself or go anonymous — always in your control.</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom row */}
          {[
            { icon: <Bell size={20} />, title: 'Smart Notifications', desc: 'Filtered alerts. Only what matters in your Core.' },
            { icon: <Shield size={20} />, title: 'Secure & Moderated', desc: 'Auth, privacy controls, and full account management.' },
            { icon: <Lock size={20} />, title: 'Reduced Noise', desc: 'Algorithmic silence. Real community, real context.' },
            { icon: <Globe size={20} />, title: 'Multi-Core Support', desc: 'Be part of multiple environments at once.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="md:col-span-3 rounded-2xl p-6 hover:scale-[1.02] transition-transform"
              style={{ background: C.card, border: `1px solid ${C.border}` }}
            >
              <div className="mb-4" style={{ color: C.primary }}>{item.icon}</div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm" style={{ color: C.textMuted }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: C.accent }}>Portfolio Highlight</p>
          <h2 style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: 'clamp(32px, 4vw, 50px)',
            fontWeight: 700,
            color: C.text,
            lineHeight: 1.1
          }}>Complete Full-Stack Architecture</h2>
          <p className="mt-4 text-base" style={{ color: C.textMuted }}>Production-ready platform deployed with 50+ active users</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-8 border"
            style={{ background: C.card, borderColor: C.border }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: C.primary }}>📱 Mobile Application</h3>
            <ul className="space-y-2 text-sm" style={{ color: C.textMuted }}>
              <li>✓ Bare React Native</li>
              <li>✓ Android production deployment on Google Play Store</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="rounded-3xl p-8 border"
            style={{ background: C.card, borderColor: C.border }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: C.primary }}>⚙️ Backend</h3>
            <ul className="space-y-2 text-sm" style={{ color: C.textMuted }}>
              <li>✓ FastAPI architecture</li>
              <li>✓ PostgreSQL database system</li>
              <li>✓ Railway hosting</li>
              <li>✓ Docker-based local development setup</li>
            </ul>
          </motion.div>

          {/* Storage & Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="rounded-3xl p-8 border"
            style={{ background: C.card, borderColor: C.border }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: C.primary }}>☁️ Storage & Services</h3>
            <ul className="space-y-2 text-sm" style={{ color: C.textMuted }}>
              <li>✓ Cloudflare Storage for media handling</li>
              <li>✓ Firebase Cloud Messaging (FCM) for push notifications</li>
            </ul>
          </motion.div>

          {/* Platform Structure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="rounded-3xl p-8 border"
            style={{ background: C.card, borderColor: C.border }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: C.primary }}>🏗️ Platform Structure</h3>
            <ul className="space-y-2 text-sm" style={{ color: C.textMuted }}>
              <li>✓ 1 Mobile Application</li>
              <li>✓ 2 Web Platforms</li>
              <li>✓ Corex Public Website</li>
              <li>✓ Dashboard for moderation</li>
            </ul>
          </motion.div>
        </div>

        {/* Development Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
          className="rounded-3xl p-10 border"
          style={{ background: C.brandTint, borderColor: C.primary + '40' }}
        >
          <h3 className="text-xl font-bold mb-6" style={{ color: C.primary }}>🚀 Development Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Designed and developed the complete full-stack architecture',
              'Built scalable backend APIs using FastAPI',
              'Implemented production-ready PostgreSQL systems',
              'Integrated media storage and notification systems',
              'Developed dashboard infrastructure for moderation and management',
              'Managed deployment workflows and cloud hosting',
            ].map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.25 + idx * 0.05 }}
                className="flex items-start gap-3"
              >
                <span style={{ color: C.accent, marginTop: '2px' }}>▸</span>
                <span style={{ color: C.textMuted, fontSize: '14px' }}>{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Production Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
          className="mt-8 text-center p-8 rounded-2xl"
          style={{ background: C.surface, border: `1px solid ${C.border}` }}
        >
          <div className="text-4xl font-bold mb-2" style={{ background: `linear-gradient(135deg, ${C.gradStart}, ${C.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            50+ Active Users
          </div>
          <p style={{ color: C.textMuted }}>Successfully running in production</p>
        </motion.div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: C.surface, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8" style={{ color: C.primary }}>
            <Image src="/logos/corex_logo.png" alt="Corex" width={60} height={60} className="w-16 h-16 mx-auto" />
          </div>
          <blockquote className="mb-8" style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: 'clamp(26px, 4vw, 42px)',
            fontWeight: 700,
            lineHeight: 1.3,
            color: C.text,
          }}>
            "Connect within your environment — where it actually matters."
          </blockquote>
          <p className="text-base leading-relaxed mb-10" style={{ color: C.textMuted }}>
            Corex is built around real-world communities where your college, workplace, or any physical
            environment becomes your digital space. A true Core Experience — the right people, one place,
            meaningful interaction.
          </p>
          <PlayStoreBadge size="lg" />
        </div>
      </section>

      {/* ── VALUES GRID ─────────────────────────────────────────── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{
            fontFamily: 'var(--font-satoshi)',
            fontSize: 'clamp(32px, 4vw, 50px)',
            fontWeight: 700,
            color: C.text
          }}>The Core Experience</h2>
          <p className="mt-3 text-base" style={{ color: C.textMuted }}>Built to digitize physical environments into structured spaces</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { emoji: '🌐', title: 'Your Environment', desc: 'See everything happening in your Core' },
            { emoji: '📝', title: 'Structured Sharing', desc: 'Post with intent — within or beyond your Core' },
            { emoji: '💬', title: 'Organized Chatrooms', desc: 'Dedicated spaces for focused community talk' },
            { emoji: '⚡', title: 'Quick Ask', desc: 'Instant responses from your community' },
            { emoji: '👤', title: 'Identity Control', desc: 'Choose yourself or anonymity — always yours' },
            { emoji: '🔒', title: 'Safe & Secure', desc: 'Trust, moderation, and full account control' },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-6 rounded-2xl text-center group hover:scale-[1.03] transition-transform cursor-default"
              style={{ background: C.card, border: `1px solid ${C.border}` }}
            >
              <div className="text-3xl mb-3">{v.emoji}</div>
              <h3 className="font-bold mb-2">{v.title}</h3>
              <p className="text-sm" style={{ color: C.textMuted }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${C.brandTint} 0%, ${C.card} 100%)`,
            border: `1px solid ${C.primary}40`,
          }}
        >
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `radial-gradient(ellipse at 50% 0%, ${C.primary}15 0%, transparent 70%)`,
          }} />
          <div className="relative z-10">
            <div className="mb-6">
              <Image src="/logos/corex_logo.png" alt="Corex" width={50} height={50} className="w-14 h-14" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-satoshi)', fontWeight: 700 }}>
              Ready to Connect?
            </h2>
            <p className="text-lg mb-10" style={{ color: C.textMuted, maxWidth: '480px', margin: '0 auto 40px' }}>
              Start with your Core and connect within your environment today. Available now on Google Play.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.corex.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all hover:scale-[1.03] hover:brightness-110"
                style={{ background: `linear-gradient(135deg, ${C.gradStart}, ${C.accent})`, color: '#fff' }}
              >
                <Download size={18} />
                Download on Google Play
              </a>
              <PlayStoreBadge size="md" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="py-16 px-8" style={{ borderTop: `1px solid ${C.border}`, background: C.surface }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center">
          <Image src="/logos/corex_full.png" alt="Corex" width={90} height={20} className="w-auto h-auto" />
        </div>
            <p className="text-xs tracking-widest uppercase" style={{ color: C.textHint }}>
              Social Platform for Real-World Communities
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium" style={{ color: C.textMuted }}>
            <a href="https://corexplatform.vercel.app/privacy-policy" className="transition-colors hover:text-[#D4A373]">Privacy Policy</a>
            <a href="https://corexplatform.vercel.app/terms" className="transition-colors hover:text-[#D4A373]">Terms of Service</a>
          </div>

          <div className="text-xs text-right" style={{ color: C.textHint }}>
            Available on Google Play<br />
            Coming soon to App Store<br />
            © 2026 Corex Platform
          </div>
        </div>
      </footer>
    </main>
  );
}