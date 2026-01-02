'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Jost } from 'next/font/google';

const fontJost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
});

export default function AccountDeletionPage() {
  return (
    <main
      className={`${fontJost.variable} bg-[#050505] text-white min-h-screen font-sans`}
    >
      {/* --- NAV --- */}
      <nav className="absolute top-0 w-full z-50 px-8 py-8 flex justify-between items-center">
        <Link
          href="/chatter"
          className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors"
        >
          <div className="p-2 rounded-full border border-white/5 bg-white/5 group-hover:border-white/20 transition-all">
            <ChevronLeft size={18} />
          </div>
          <span className="text-sm font-medium tracking-wide">Back</span>
        </Link>

        <Image
          src="/logos/chatter_logo.png"
          alt="Chatter"
          width={36}
          height={36}
          className="opacity-80"
        />
      </nav>

      {/* --- HERO --- */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#8ECAE6]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#FB8500]/5 rounded-full blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <Image
            src="/logos/chatter_light.png"
            alt="Chatter"
            width={180}
            height={50}
            className="mx-auto mb-6"
          />

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Account & Data Deletion
          </h1>

          <p className="text-white/50 text-lg leading-relaxed">
            This page explains how Chatter users can request deletion of their
            account and associated data.
          </p>
        </motion.div>
      </section>

      {/* --- CONTENT --- */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-16 text-white/70">

          <PolicySection title="Chatter Account Deletion">
            <p>
              Chatter allows users to request deletion of their account and
              associated data at any time.
            </p>
          </PolicySection>

          <PolicySection title="How to Request Account Deletion">
            <ol className="list-decimal list-inside space-y-3">
              <li>
                Send an email to:{" "}
                <span className="text-white">
                  manideepnera@gmail.com
                </span>
              </li>
              <li>
                Use the subject line:{" "}
                <span className="text-white">
                  “Chatter Account Deletion Request”
                </span>
              </li>
              <li>
                Include the phone number or account identifier used to register
                on Chatter.
              </li>
            </ol>
          </PolicySection>

          <PolicySection title="What Data Will Be Deleted">
            <ul className="list-disc list-inside space-y-2">
              <li>User account information (user ID, phone number)</li>
              <li>Profile information</li>
              <li>Contacts and chat metadata</li>
              <li>
                All message content stored on Chatter systems (if any)
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="What Data May Be Retained">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Minimal technical logs required for security, fraud prevention,
                or legal compliance
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="Data Retention Period">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Account deletion requests are processed within{" "}
                <span className="text-white">7–14 days</span>
              </li>
              <li>
                Any retained logs are automatically deleted within{" "}
                <span className="text-white">30 days</span>
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              If you have questions about account or data deletion, contact:
            </p>
            <p className="text-white mt-2">
              manideepnera@gmail.com
            </p>
          </PolicySection>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 border-t border-white/5 text-center text-white/20 text-sm">
        Chatter · Account Deletion Policy · © 2025
      </footer>
    </main>
  );
}

/* ---------- Helper ---------- */

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {children}
    </section>
  );
}
