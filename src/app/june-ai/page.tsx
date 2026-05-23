'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Brain, Radio, Zap, Cpu, Globe, Mic, Clock, Database,
  ChevronRight, ArrowRight, Github, ExternalLink,
  BookOpen, Layers, Sparkles, Lock, Network, Volume2, ChevronLeft
} from 'lucide-react';

// ─── Design System: June AI (Greyscale Only) ─────────────────────
// Follows june_ai design system v1.0
// No hues. No gradients. No glow effects. No icons in chrome.
// DM Mono for all UI chrome. DM Sans Light (300) for content.
// All UI text lowercase.

const T = {
  bg:      '#0a0a0a',
  surface: '#111111',
  line:    '#1e1e1e',
  muted:   '#3a3a3a',
  sub:     '#666666',
  text:    '#c0c0c0',
  bright:  '#e8e8e8',
};

// ─── Reusable Components ──────────────────────────────────────────

// Section label — DM Mono, 9px, uppercase, letter-spaced
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontFamily: "'DM Mono', monospace",
      fontSize: '9px',
      letterSpacing: '0.14em',
      color: T.sub,
      textTransform: 'uppercase' as const,
      borderBottom: `1px solid ${T.line}`,
      paddingBottom: '10px',
      marginBottom: '28px',
    }}
  >
    {children}
  </div>
);

// Module block — surface card, no colored borders, no icons
const ModuleBlock = ({ label, description }: { label: string; description: string }) => (
  <motion.div
    whileHover={{ opacity: 0.85 }}
    transition={{ duration: 0.15 }}
    style={{
      padding: '24px',
      background: T.surface,
      borderBottom: `1px solid ${T.line}`,
    }}
  >
    <div
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '10px',
        letterSpacing: '0.08em',
        color: T.text,
        marginBottom: '8px',
      }}
    >
      {label.toLowerCase()}
    </div>
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        fontSize: '13px',
        lineHeight: 1.75,
        color: T.sub,
      }}
    >
      {description}
    </div>
  </motion.div>
);

// Section wrapper with subtle rise animation
const SectionReveal = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.3'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [8, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────

export default function JuneAIPage() {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      style={{
        background: T.bg,
        color: T.text,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      {/* Google Fonts import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=DM+Sans:wght@300;400&display=swap');
        @keyframes breathe {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes rise {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes thinkdot {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50%       { opacity: 1;   transform: scale(1); }
        }
      `}</style>

      {/* ─── BACK BUTTON ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
        style={{ position: 'fixed', top: '20px', left: '24px', zIndex: 40 }}
      >
        <Link href="/">
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: T.sub,
              padding: '4px 0',
              transition: 'color 0.15s linear',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = T.text)}
            onMouseLeave={e => (e.currentTarget.style.color = T.sub)}
          >
            ← back
          </button>
        </Link>
      </motion.div>

      {/* ─── HEADER (fixed, 52px) ─────────────────────────────── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '52px',
          borderBottom: `1px solid ${T.line}`,
          background: T.bg,
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          gap: '10px',
          zIndex: 30,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '13px',
            fontWeight: 400,
            color: T.bright,
            letterSpacing: '0.04em',
          }}
        >
          june
        </span>
        {/* Status dot — breathing */}
        <div
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: T.bright,
            animation: 'breathe 3s ease-in-out infinite',
          }}
        />
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '20px' }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              color: T.sub,
              letterSpacing: '0.08em',
            }}
          >
            ready
          </span>
        </div>
      </header>

      {/* ─── HERO SECTION ──────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '52px 40px 80px',
          borderBottom: `1px solid ${T.line}`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ maxWidth: '680px', width: '100%' }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px',
              letterSpacing: '0.14em',
              color: T.sub,
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            ai operating system
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 400,
              color: T.bright,
              letterSpacing: '0.04em',
              marginBottom: '8px',
              lineHeight: 1.2,
            }}
          >
            june
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '13px',
              color: T.sub,
              letterSpacing: '0.10em',
              marginBottom: '40px',
            }}
          >
            persistent adaptive intelligence
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: '14px',
              lineHeight: 1.75,
              color: T.sub,
              marginBottom: '48px',
              maxWidth: '520px',
            }}
          >
            an evolving modular ai ecosystem designed as your personal cognitive operating system.
            every component independently replaceable. every interaction adaptive.
          </motion.p>

          {/* CTA links — text only, no button chrome */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ display: 'flex', gap: '32px', alignItems: 'center' }}
          >
            <Link href="#architecture">
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  color: T.text,
                  cursor: 'pointer',
                  transition: 'color 0.15s linear',
                  textDecoration: 'none',
                  borderBottom: `1px solid ${T.line}`,
                  paddingBottom: '2px',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = T.bright)}
                onMouseLeave={e => (e.currentTarget.style.color = T.text)}
              >
                view architecture →
              </span>
            </Link>
            <Link href="https://github.com" target="_blank">
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  color: T.sub,
                  cursor: 'pointer',
                  transition: 'color 0.15s linear',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = T.text)}
                onMouseLeave={e => (e.currentTarget.style.color = T.sub)}
              >
                github ↗
              </span>
            </Link>
          </motion.div>

          {/* Hero visualization — minimal grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              marginTop: '80px',
              background: T.surface,
              borderTop: `1px solid ${T.line}`,
              borderBottom: `1px solid ${T.line}`,
              padding: '32px 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
            }}
          >
            {[
              { label: 'neural core', spec: 'llm foundation' },
              { label: 'memory system', spec: 'dual-layer recall' },
              { label: 'voice layer', spec: 'whisper · piper' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '0 24px',
                  borderRight: i < 2 ? `1px solid ${T.line}` : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    color: T.text,
                    marginBottom: '4px',
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '9px',
                    letterSpacing: '0.06em',
                    color: T.muted,
                  }}
                >
                  {item.spec}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── ARCHITECTURE SECTION ──────────────────────────────── */}
      <section
        id="architecture"
        style={{
          padding: '80px 40px',
          borderBottom: `1px solid ${T.line}`,
          maxWidth: '900px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <SectionReveal>
          <SectionLabel>architecture</SectionLabel>
          <div style={{ marginBottom: '40px' }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '13px',
                color: T.bright,
                letterSpacing: '0.04em',
                marginBottom: '8px',
              }}
            >
              modular systems
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '13px',
                lineHeight: 1.75,
                color: T.sub,
                maxWidth: '520px',
              }}
            >
              seven independent, replaceable systems working in orchestrated harmony.
              swap any component. evolve your ai.
            </p>
          </div>

          {/* Architecture grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1px',
              background: T.line,
              marginBottom: '1px',
            }}
          >
            {[
              { label: 'llm core', description: 'language model foundation. swap between local ollama, claude, or gpt models.' },
              { label: 'memory system', description: 'dual-layer memory: short-term context + long-term learning with adaptive recall.' },
              { label: 'voice interface', description: 'speech-to-text with whisper, text-to-speech with piper. natural conversations.' },
              { label: 'orchestrator', description: 'intelligent task routing and state management. coordinates all subsystems.' },
              { label: 'internet access', description: 'real-time information retrieval. browse, research, stay current.' },
              { label: 'rag system', description: 'chromadb vector storage. retrieval-augmented generation for personalized knowledge.' },
              { label: 'wake word', description: 'always-listening with "hey june" activation. privacy-first local processing.' },
              { label: 'tool suite', description: 'extensible tools interface. add capabilities as needed. plugin architecture.' },
            ].map((mod, i) => (
              <ModuleBlock key={i} label={mod.label} description={mod.description} />
            ))}
          </div>

          {/* Philosophy */}
          <div
            style={{
              marginTop: '48px',
              padding: '32px',
              background: T.surface,
              borderTop: `1px solid ${T.line}`,
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '9px',
                letterSpacing: '0.14em',
                color: T.sub,
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              philosophy: system › model
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '32px',
              }}
            >
              {[
                { title: 'modularity first', desc: 'each component is independently replaceable. upgrade one part without rebuilding the entire system.' },
                { title: 'intelligent orchestration', desc: 'the real intelligence emerges from how systems communicate and orchestrate, not just raw model power.' },
                { title: 'adaptive evolution', desc: 'the system learns from interactions, adapts behavior, and improves over time without manual retraining.' },
              ].map((item, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '10px',
                      letterSpacing: '0.08em',
                      color: T.text,
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: '12px',
                      lineHeight: 1.75,
                      color: T.sub,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ─── VOICE & INTERACTION SECTION ──────────────────────── */}
      <section
        style={{
          padding: '80px 40px',
          borderBottom: `1px solid ${T.line}`,
          maxWidth: '900px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <SectionReveal>
          <SectionLabel>voice & interaction</SectionLabel>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '13px',
                  color: T.bright,
                  letterSpacing: '0.04em',
                  marginBottom: '8px',
                }}
              >
                natural conversation
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '13px',
                  lineHeight: 1.75,
                  color: T.sub,
                  marginBottom: '40px',
                }}
              >
                june understands you through multiple modalities. speak naturally, and the system adapts to your communication style.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { label: 'hey june activation', desc: 'wake word detection that respects privacy. local processing, never phoning home.' },
                  { label: 'natural speech processing', desc: 'powered by openai whisper. understands accents, background noise, and context.' },
                  { label: 'adaptive voice response', desc: 'piper text-to-speech with emotional nuance. your companion, not a robot.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.2 }}
                    style={{
                      padding: '16px 0',
                      borderBottom: `1px solid ${T.line}`,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '10px',
                        letterSpacing: '0.08em',
                        color: T.text,
                        marginBottom: '4px',
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        fontSize: '12px',
                        lineHeight: 1.75,
                        color: T.sub,
                      }}
                    >
                      {item.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Waveform visualization — greyscale dots */}
            <div
              style={{
                background: T.surface,
                padding: '48px 32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderTop: `1px solid ${T.line}`,
                borderBottom: `1px solid ${T.line}`,
                minHeight: '240px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '24px' }}>
                {[20, 50, 30, 80, 40, 60, 25, 70, 35, 55, 20, 45].map((h, i) => (
                  <motion.div
                    key={i}
                    style={{
                      width: '3px',
                      borderRadius: '2px',
                      background: T.muted,
                    }}
                    animate={{ height: [h * 0.5, h, h * 0.6] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.08, repeatType: 'mirror' }}
                  />
                ))}
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '9px',
                  letterSpacing: '0.10em',
                  color: T.muted,
                }}
              >
                listening for commands...
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ─── MEMORY SYSTEM SECTION ────────────────────────────── */}
      <section
        style={{
          padding: '80px 40px',
          borderBottom: `1px solid ${T.line}`,
          maxWidth: '900px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <SectionReveal>
          <SectionLabel>adaptive memory</SectionLabel>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: '13px',
              lineHeight: 1.75,
              color: T.sub,
              marginBottom: '48px',
              maxWidth: '520px',
            }}
          >
            june remembers not just facts, but your preferences, patterns, and the context of every conversation.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: T.line,
            }}
          >
            {[
              {
                phase: 'immediate',
                title: 'short-term context',
                desc: 'current conversation buffer. active reasoning window. maintains coherence within sessions.',
              },
              {
                phase: 'extended',
                title: 'session memory',
                desc: 'multi-turn conversation history. learns your communication style. adapts tone and depth.',
              },
              {
                phase: 'persistent',
                title: 'long-term learning',
                desc: 'grows over weeks and months. knows your goals, preferences, and context. truly learns.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.2 }}
                style={{ padding: '28px', background: T.surface }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '9px',
                    letterSpacing: '0.12em',
                    color: T.muted,
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  {item.phase}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    color: T.text,
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: '12px',
                    lineHeight: 1.75,
                    color: T.sub,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* ─── TECH STACK SECTION ───────────────────────────────── */}
      <section
        style={{
          padding: '80px 40px',
          borderBottom: `1px solid ${T.line}`,
          maxWidth: '900px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <SectionReveal>
          <SectionLabel>built with open technology</SectionLabel>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1px',
              background: T.line,
            }}
          >
            {[
              { category: 'ai & language', techs: ['ollama', 'langchain', 'llama', 'mistral'] },
              { category: 'memory & storage', techs: ['chromadb', 'postgresql', 'redis', 'qdrant'] },
              { category: 'voice & audio', techs: ['whisper', 'piper', 'pyaudio', 'webrtc'] },
              { category: 'infrastructure', techs: ['fastapi', 'python', 'docker', 'cuda'] },
            ].map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.2 }}
                style={{ padding: '28px', background: T.surface }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '9px',
                    letterSpacing: '0.12em',
                    color: T.sub,
                    textTransform: 'uppercase',
                    borderBottom: `1px solid ${T.line}`,
                    paddingBottom: '10px',
                    marginBottom: '16px',
                  }}
                >
                  {group.category}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {group.techs.map((tech, j) => (
                    <span
                      key={j}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: '11px',
                        letterSpacing: '0.06em',
                        color: T.text,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* ─── FUTURE VISION SECTION ────────────────────────────── */}
      <section
        style={{
          padding: '80px 40px',
          borderBottom: `1px solid ${T.line}`,
          maxWidth: '900px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <SectionReveal>
          <SectionLabel>the future</SectionLabel>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '13px',
              color: T.bright,
              letterSpacing: '0.04em',
              marginBottom: '8px',
            }}
          >
            an evolving ai ecosystem
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: '13px',
              lineHeight: 1.75,
              color: T.sub,
              marginBottom: '48px',
              maxWidth: '520px',
            }}
          >
            june ai is not a finished product — it's a foundation. every component can evolve.
            every system can improve. it's an open invitation to build the future of personal ai, not isolated chatbots.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { title: 'multi-modal intelligence', desc: 'vision, audio, text, and more. june will understand the full context of your world.' },
              { title: 'embedded deployment', desc: 'runs locally on your hardware. your privacy, your data, your control.' },
              { title: 'collaborative agents', desc: 'multiple specialized june instances working together for complex tasks.' },
              { title: 'real-time learning', desc: 'fine-tuning and adaptation without stopping. continuous improvement.' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '32px',
                  padding: '16px 0',
                  borderBottom: `1px solid ${T.line}`,
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    color: T.muted,
                    width: '24px',
                    flexShrink: 0,
                    paddingTop: '1px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '10px',
                      letterSpacing: '0.08em',
                      color: T.text,
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: '12px',
                      lineHeight: 1.75,
                      color: T.sub,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <Link href="https://github.com" target="_blank">
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  color: T.text,
                  cursor: 'pointer',
                  transition: 'color 0.15s linear',
                  borderBottom: `1px solid ${T.line}`,
                  paddingBottom: '2px',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = T.bright)}
                onMouseLeave={e => (e.currentTarget.style.color = T.text)}
              >
                explore the architecture ↗
              </span>
            </Link>
          </div>
        </SectionReveal>
      </section>

      {/* ─── CTA SECTION ──────────────────────────────────────── */}
      <section
        style={{
          padding: '80px 40px',
          borderBottom: `1px solid ${T.line}`,
          maxWidth: '900px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <SectionReveal>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '13px',
              color: T.bright,
              letterSpacing: '0.04em',
              marginBottom: '8px',
            }}
          >
            ready to build the future of personal ai?
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: '13px',
              lineHeight: 1.75,
              color: T.sub,
              marginBottom: '40px',
            }}
          >
            june ai is open source. join the ecosystem. contribute. evolve.
          </p>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Link href="https://github.com" target="_blank">
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  color: T.text,
                  cursor: 'pointer',
                  transition: 'color 0.15s linear',
                  borderBottom: `1px solid ${T.line}`,
                  paddingBottom: '2px',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = T.bright)}
                onMouseLeave={e => (e.currentTarget.style.color = T.text)}
              >
                view on github ↗
              </span>
            </Link>
            <Link href="https://docs.example.com" target="_blank">
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  color: T.sub,
                  cursor: 'pointer',
                  transition: 'color 0.15s linear',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = T.text)}
                onMouseLeave={e => (e.currentTarget.style.color = T.sub)}
              >
                read documentation →
              </span>
            </Link>
          </div>
        </SectionReveal>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer
        style={{
          padding: '24px 40px',
          borderTop: `1px solid ${T.line}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '9px',
            letterSpacing: '0.10em',
            color: T.muted,
          }}
        >
          june_ai · © 2026 · building the future of personal ai systems
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            { label: 'github', href: 'https://github.com' },
            { label: 'docs', href: '#' },
          ].map((link, i) => (
            <Link key={i} href={link.href} target="_blank">
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '9px',
                  letterSpacing: '0.08em',
                  color: T.muted,
                  cursor: 'pointer',
                  transition: 'color 0.15s linear',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = T.sub)}
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