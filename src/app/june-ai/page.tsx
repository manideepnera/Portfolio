'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// ─── Design System: June AI (Greyscale Only) ─────────────────────
const T = {
  bg:       '#080808',
  surface:  '#101010',
  surface2: '#161616',
  line:     '#1c1c1c',
  muted:    '#2e2e2e',
  sub:      '#5a5a5a',
  dim:      '#888888',
  text:     '#b8b8b8',
  bright:   '#ececec',
};

// ─── Section Reveal ───────────────────────────────────────────────
const SectionReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.92', 'start 0.4'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [12, 0]);
  return (
    <motion.div ref={ref} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
};

// ─── Section Tag ──────────────────────────────────────────────────
const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    fontFamily: "'DM Mono', monospace",
    fontSize: '12px',
    letterSpacing: '0.22em',
    color: T.text,
    textTransform: 'uppercase' as const,
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '64px',
  }}>
    {children}
    <div style={{ flex: 1, height: '1px', background: T.line }} />
  </div>
);

// ─── Arch Item ────────────────────────────────────────────────────
const ArchItem = ({ num, label, description }: { num: string; label: string; description: string }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? T.surface2 : T.surface,
        padding: '28px 32px',
        transition: 'background 0.15s',
      }}
    >
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.08em', color: T.muted, marginBottom: '14px' }}>
        {num}
      </div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '0.08em', color: T.text, marginBottom: '12px' }}>
        {label}
      </div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '14px', lineHeight: 1.75, color: T.sub }}>
        {description}
      </div>
    </div>
  );
};

// ─── Waveform ─────────────────────────────────────────────────────
const Waveform = () => {
  const heights = [18, 44, 28, 72, 36, 56, 22, 64, 30, 50, 18, 42, 26, 60, 34];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
      {heights.map((h, i) => (
        <motion.div
          key={i}
          style={{ width: '3px', borderRadius: '2px', background: T.text }}
          animate={{ height: [h * 0.4, h, h * 0.5] }}
          transition={{ duration: 0.7, delay: i * 0.08, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────
export default function JuneAIPage() {
  return (
    <div style={{ background: T.bg, color: T.text, fontFamily: "'DM Sans', sans-serif", fontWeight: 300, width: '100%', overflowX: 'hidden' }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes breathe { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }
        @keyframes rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* ─── BACK BUTTON ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        style={{ position: 'fixed', top: '22px', left: '28px', zIndex: 50 }}
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: T.sub,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = T.text)}
            onMouseLeave={e => (e.currentTarget.style.color = T.sub)}
          >
            ← back to portfolio
          </span>
        </Link>
      </motion.div>

      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* ─── HERO ────────────────────────────────────────────── */}
        <section style={{ minHeight: '100vh', padding: '160px 60px 100px', display: 'flex', alignItems: 'center', borderBottom: `1px solid ${T.line}` }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ maxWidth: '680px', width: '100%' }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '13px',
                letterSpacing: '0.18em',
                color: T.sub,
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '36px',
              }}
            >
              <div style={{ width: '20px', height: '1px', background: T.muted }} />
              ai operating system
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 'clamp(68px, 9.1vw, 104px)',
                fontWeight: 400,
                color: T.bright,
                letterSpacing: '0.02em',
                lineHeight: 0.95,
                marginBottom: '24px',
              }}
            >
              june
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '13px',
                letterSpacing: '0.12em',
                color: T.sub,
                marginBottom: '48px',
              }}
            >
              persistent adaptive intelligence
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '22px',
                lineHeight: 2,
                color: T.dim,
                maxWidth: '500px',
                marginBottom: '68px',
                borderLeft: `1px solid ${T.line}`,
                paddingLeft: '20px',
              }}
            >
              an evolving modular ai ecosystem designed as your personal cognitive operating system.
              every component independently replaceable. every interaction adaptive. built to grow with you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', marginBottom: '100px', gap: '16px' }}
            >
              <Link href="#architecture" style={{ textDecoration: 'none' }}>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '14px',
                    cursor: 'pointer',
                    padding: '12px 20px',
                    border: `1px solid ${T.text}`,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = T.bright; e.currentTarget.style.background = T.surface; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = T.text; e.currentTarget.style.background = 'none'; }}
                >
                  view architecture →
                </span>
              </Link>
            </motion.div>

            {/* Metrics bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: `1px solid ${T.line}`, background: T.surface }}
            >
              {[
                { label: 'neural core', value: 'llm foundation' },
                { label: 'memory system', value: 'dual-layer recall' },
                { label: 'voice layer', value: 'whisper · piper' },
              ].map((m, i) => (
                <div key={i} style={{ padding: '24px', borderRight: i < 2 ? `1px solid ${T.line}` : 'none' }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.08em', color: T.text, marginBottom: '6px' }}>{m.label}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.06em', color: T.sub }}>{m.value}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ─── ARCHITECTURE ────────────────────────────────────── */}
        <section id="architecture" style={{ padding: '120px 60px', borderBottom: `1px solid ${T.line}` }}>
          <SectionReveal>
            <SectionTag>architecture</SectionTag>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '22px', fontWeight: 400, color: T.bright, letterSpacing: '0.03em', marginBottom: '12px' }}>
              modular systems
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '16px', lineHeight: 1.8, color: T.sub, maxWidth: '480px', marginBottom: '56px' }}>
              seven independent, replaceable systems working in orchestrated harmony. swap any component. the system evolves.
            </p>

            {/* Architecture grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: `1px solid ${T.line}`, gap: '2px', background: T.line, marginBottom: '64px' }}>
              {[
                { num: '01', label: 'llm core', desc: 'language model foundation. swap between local ollama, claude, or gpt models without rebuilding.' },
                { num: '02', label: 'memory system', desc: 'dual-layer memory: short-term context + long-term learning with adaptive recall.' },
                { num: '03', label: 'voice interface', desc: 'speech-to-text with whisper, text-to-speech with piper. natural, fluid conversations.' },
                { num: '04', label: 'orchestrator', desc: 'intelligent task routing and state management. the connective tissue of all subsystems.' },
                { num: '05', label: 'internet access', desc: 'real-time information retrieval. browse, research, stay current with the world.' },
                { num: '06', label: 'rag system', desc: 'chromadb vector storage. retrieval-augmented generation for personalized knowledge.' },
                { num: '07', label: 'wake word', desc: 'always-listening "hey june" activation. privacy-first local processing, never phoning home.' },
                { num: '08', label: 'tool suite', desc: 'extensible plugin architecture. add capabilities as needed without rebuilding.' },
              ].map((item, i) => (
                <ArchItem key={i} num={item.num} label={item.label} description={item.desc} />
              ))}
            </div>

            {/* Philosophy */}
            <SectionTag>philosophy</SectionTag>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: T.line, border: `1px solid ${T.line}` }}>
              {[
                { title: 'modularity first', desc: 'each component is independently replaceable. upgrade one part without rebuilding the entire system.' },
                { title: 'intelligent orchestration', desc: 'real intelligence emerges from how systems communicate and orchestrate, not raw model power alone.' },
                { title: 'adaptive evolution', desc: 'the system learns from interactions, adapts behavior, and improves over time without manual retraining.' },
              ].map((item, i) => (
                <div key={i} style={{ background: T.surface, padding: '40px' }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '14px', letterSpacing: '0.06em', color: T.text, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '16px', height: '1px', background: T.muted }} />
                    {item.title}
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '18px', lineHeight: 1.9, color: T.sub }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* ─── VOICE ───────────────────────────────────────────── */}
        <section style={{ padding: '96px 40px', borderBottom: `1px solid ${T.line}` }}>
          <SectionReveal>
            <SectionTag>voice & interaction</SectionTag>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '29px', fontWeight: 400, color: T.bright, letterSpacing: '0.03em', marginBottom: '12px' }}>natural conversation</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '21px', lineHeight: 2, color: T.sub, marginBottom: '48px' }}>
                  june understands you through multiple modalities. speak naturally. the system adapts to your communication style over time.
                </p>
                <div>
                  {[
                    { label: 'hey june · activation', desc: 'wake word detection that respects privacy. local processing, never phoning home.' },
                    { label: 'natural speech processing', desc: 'powered by openai whisper. understands accents, background noise, and context.' },
                    { label: 'adaptive voice response', desc: 'piper text-to-speech with emotional nuance. your companion, not a robot.' },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '24px 0', borderBottom: `1px solid ${T.line}`, ...(i === 0 ? { borderTop: `1px solid ${T.line}` } : {}) }}>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '14px', letterSpacing: '0.06em', color: T.text, marginBottom: '8px' }}>{item.label}</div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '17px', lineHeight: 1.9, color: T.sub }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Waveform panel */}
              <div style={{ background: T.surface, border: `1px solid ${T.line}`, padding: '60px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '340px', gap: '32px' }}>
                <Waveform />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '0.14em', color: T.muted, textTransform: 'uppercase' }}>listening...</div>
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* ─── MEMORY ──────────────────────────────────────────── */}
        <section style={{ padding: '120px 60px', borderBottom: `1px solid ${T.line}` }}>
          <SectionReveal>
            <SectionTag>adaptive memory</SectionTag>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '29px', fontWeight: 400, color: T.bright, letterSpacing: '0.03em', marginBottom: '12px' }}>knows you over time</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '21px', lineHeight: 1.8, color: T.sub, maxWidth: '480px', marginBottom: '56px' }}>
              june remembers not just facts, but your preferences, patterns, and the context of every conversation.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: T.line, border: `1px solid ${T.line}` }}>
              {[
                { phase: 'immediate · layer 01', title: 'short-term context', desc: 'current conversation buffer. active reasoning window. maintains coherence within sessions.' },
                { phase: 'extended · layer 02', title: 'session memory', desc: 'multi-turn conversation history. learns your communication style. adapts tone and depth.' },
                { phase: 'persistent · layer 03', title: 'long-term learning', desc: 'grows over weeks and months. knows your goals, preferences, and full context.' },
              ].map((item, i) => (
                <div key={i} style={{ background: T.surface, padding: '44px 32px' }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '0.16em', color: T.muted, textTransform: 'uppercase' as const, marginBottom: '16px' }}>{item.phase}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '17px', letterSpacing: '0.04em', color: T.text, marginBottom: '16px', borderBottom: `1px solid ${T.line}`, paddingBottom: '16px' }}>{item.title}</div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '18px', lineHeight: 1.9, color: T.sub }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* ─── TECH STACK ──────────────────────────────────────── */}
        <section style={{ padding: '120px 60px', borderBottom: `1px solid ${T.line}` }}>
          <SectionReveal>
            <SectionTag>built with open technology</SectionTag>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '29px', fontWeight: 400, color: T.bright, letterSpacing: '0.03em', marginBottom: '12px' }}>open stack</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '21px', lineHeight: 1.8, color: T.sub, maxWidth: '480px', marginBottom: '56px' }}>
              every layer built on proven open-source components. own your stack. no vendor lock-in.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px', background: T.line, border: `1px solid ${T.line}` }}>
              {[
                { category: 'ai & language', techs: ['ollama', 'langchain', 'llama', 'mistral'] },
                { category: 'memory & storage', techs: ['chromadb', 'postgresql', 'redis', 'qdrant'] },
                { category: 'voice & audio', techs: ['whisper', 'piper', 'pyaudio', 'webrtc'] },
                { category: 'infrastructure', techs: ['fastapi', 'python', 'docker', 'cuda'] },
              ].map((group, i) => (
                <div key={i} style={{ background: T.surface, padding: '40px' }}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '0.16em', color: T.sub, textTransform: 'uppercase' as const, marginBottom: '24px', paddingBottom: '16px', borderBottom: `1px solid ${T.line}` }}>{group.category}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px' }}>
                    {group.techs.map((tech, j) => (
                      <span key={j} style={{ fontFamily: "'DM Mono', monospace", fontSize: '14px', letterSpacing: '0.04em', color: T.text, padding: '6px 12px', border: `1px solid ${T.line}` }}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* ─── FUTURE / ROADMAP ────────────────────────────────── */}
        <section style={{ padding: '120px 60px', borderBottom: `1px solid ${T.line}` }}>
          <SectionReveal>
            <SectionTag>the future</SectionTag>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '29px', fontWeight: 400, color: T.bright, letterSpacing: '0.03em', marginBottom: '12px' }}>an evolving ecosystem</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '21px', lineHeight: 1.8, color: T.sub, maxWidth: '480px', marginBottom: '56px' }}>
              june ai is not a finished product — it's a foundation. every component can evolve.
              an open invitation to build the future of personal ai.
            </p>
            <div>
              {[
                { title: 'multi-modal intelligence', desc: 'vision, audio, text, and more. june will understand the full context of your world.' },
                { title: 'embedded deployment', desc: 'runs locally on your hardware. your privacy, your data, your control.' },
                { title: 'collaborative agents', desc: 'multiple specialized june instances working together for complex, layered tasks.' },
                { title: 'real-time learning', desc: 'fine-tuning and adaptation without stopping. continuous, invisible improvement.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '32px', padding: '32px 0', borderBottom: i < 3 ? `1px solid ${T.line}` : 'none', alignItems: 'start' }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '16px', letterSpacing: '0.06em', color: T.muted, paddingTop: '1px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '16px', letterSpacing: '0.06em', color: T.text, marginBottom: '8px' }}>{item.title}</div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '18px', lineHeight: 1.9, color: T.sub }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <section style={{ padding: '120px 60px 100px', borderBottom: 'none' }}>
          <SectionReveal>
            <div style={{ background: T.surface, border: `1px solid ${T.line}`, padding: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '48px' }}>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '21px', letterSpacing: '0.04em', color: T.bright, marginBottom: '12px' }}>
                  experience june now
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '20px', color: T.sub, lineHeight: 1.9 }}>
                  try june ai through the chatter app. coming soon on app too... a full demo coming soon right here on this site. not ready yet.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexShrink: 0, alignItems: 'center' }}>
                <Link href="https://play.google.com/store/apps/details?id=com.manideepnera.chatter" target="_blank" style={{ textDecoration: 'none' }}>
                  <span
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: '14px', letterSpacing: '0.08em', color: T.bright, cursor: 'pointer', padding: '12px 20px', border: `1px solid ${T.text}`, display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'all 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = T.bright; e.currentTarget.style.background = T.surface; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = T.text; e.currentTarget.style.background = 'none'; }}
                  >
                    <img src="/icons/google-play.png" alt="google play" style={{ width: '14px', height: '14px' }} />
                    download chatter
                  </span>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </section>

      </div>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer style={{ padding: '32px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '960px', margin: '0 auto' }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', letterSpacing: '0.10em', color: T.muted }}>
          june_ai · © 2026 · personal ai operating system
        </span>
        <div style={{ display: 'flex', gap: '32px' }}>
          {[{ label: 'chatter app', href: 'https://play.google.com/store/apps/details?id=com.manideepnera.chatter' }, { label: 'changelog', href: '#' }].map((link, i) => (
            <Link key={i} href={link.href} target="_blank" style={{ textDecoration: 'none' }}>
              <span
                style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.08em', color: T.muted, cursor: 'pointer', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = T.text)}
                onMouseLeave={e => (e.currentTarget.style.color = T.muted)}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </footer>

    </div>
  );
}