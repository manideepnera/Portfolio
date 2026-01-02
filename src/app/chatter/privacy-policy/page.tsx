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

export default function PrivacyPolicyPage() {
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
            Privacy Policy for Chatter
          </h1>

          <p className="text-white/40 text-sm">
            Last updated: January 02, 2026
          </p>
        </motion.div>
      </section>

      {/* --- CONTENT --- */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-16 text-white/70">

          <p>
            This Privacy Policy describes how Chatter ("we", "us", or "our")
            collects, uses, and protects your information when you use the
            Chatter mobile application ("Service").
          </p>

          <p>
            By using the Service, you agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>

          {/* Interpretation & Definitions */}
          <PolicySection title="Interpretation and Definitions">
            <SubTitle>Interpretation</SubTitle>
            <p>
              Words with capitalized initial letters have meanings defined under
              the following conditions. These definitions apply whether the terms
              appear in singular or plural.
            </p>

            <SubTitle>Definitions</SubTitle>
            <ul className="list-disc list-inside space-y-2">
              <li><b>Application</b> refers to Chatter, the mobile software provided by us.</li>
              <li><b>Company</b> refers to Chatter.</li>
              <li><b>Device</b> means any device that can access the Service, such as a smartphone.</li>
              <li><b>Personal Data</b> means any information that relates to an identifiable individual.</li>
              <li><b>Service</b> refers to the Application.</li>
              <li><b>You</b> means the individual using the Service.</li>
            </ul>
          </PolicySection>

          {/* Data Collection */}
          <PolicySection title="Collecting and Using Your Personal Data">
            <SubTitle>Types of Data Collected</SubTitle>

            <SubTitle>Personal Data</SubTitle>
            <p>
              While using our Service, we may collect limited personally
              identifiable information strictly required to operate the app,
              including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Phone number (for authentication)</li>
              <li>Display name (if provided)</li>
            </ul>

            <SubTitle>Usage Data</SubTitle>
            <p>
              Usage Data is collected automatically and may include device type,
              operating system version, app performance logs, and diagnostic data.
              This data is used only to improve reliability and security.
            </p>
          </PolicySection>

          {/* E2EE */}
          <PolicySection title="End-to-End Encryption">
            <p>Chatter uses end-to-end encryption (E2EE) to protect your messages.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Messages and media are encrypted on your device</li>
              <li>Only you and the intended recipient can decrypt messages</li>
              <li>Chatter cannot read, access, or store message contents</li>
            </ul>
            <p>
              Encryption keys are generated and stored locally on your device.
              If the app is uninstalled or the device is changed, previous
              messages may become inaccessible.
            </p>
          </PolicySection>

          {/* Use of Data */}
          <PolicySection title="Use of Your Personal Data">
            <p>We use Personal Data only to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide and maintain the Service</li>
              <li>Authenticate users securely</li>
              <li>Improve app stability and performance</li>
              <li>Prevent abuse and unauthorized access</li>
            </ul>
            <p>
              We do not sell your data, run ads, or track you across services.
            </p>
          </PolicySection>

          {/* Retention */}
          <PolicySection title="Retention of Your Personal Data">
            <p>
              Personal Data is retained only for as long as necessary to operate
              the Service and comply with legal obligations.
            </p>
            <p>
              Messages are not stored long-term and are automatically removed
              according to app logic (such as expiry or deletion).
            </p>
          </PolicySection>

          {/* Transfers */}
          <PolicySection title="Transfer of Your Personal Data">
            <p>
              Your information may be processed on servers located outside your
              jurisdiction. We ensure appropriate safeguards are in place to
              protect your data.
            </p>
          </PolicySection>

          {/* Disclosure */}
          <PolicySection title="Disclosure of Your Personal Data">
            <SubTitle>Legal Requirements</SubTitle>
            <p>
              We may disclose Personal Data if required by law or valid requests
              from public authorities.
            </p>
          </PolicySection>

          {/* Security */}
          <PolicySection title="Security of Your Personal Data">
            <p>
              We use commercially reasonable security measures to protect your
              Personal Data. However, no method of transmission or storage is
              completely secure.
            </p>
          </PolicySection>

          {/* Children */}
          <PolicySection title="Children’s Privacy">
            <p>
              Chatter does not knowingly collect data from anyone under the age
              of 13. If such data is discovered, it will be removed immediately.
            </p>
          </PolicySection>

          {/* External Links */}
          <PolicySection title="Links to Other Websites">
            <p>
              The Service may contain links to third-party websites. We are not
              responsible for their content or privacy practices.
            </p>
          </PolicySection>

          {/* Changes */}
          <PolicySection title="Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes become
              effective when posted on this page.
            </p>
          </PolicySection>

          {/* Contact */}
          <PolicySection title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy, you can contact us at:
            </p>
            <p className="text-white">manideepnera@gmail.com</p>
          </PolicySection>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 text-center text-white/20 text-sm">
        Chatter · Mobile-First Privacy · © 2025
      </footer>
    </main>
  );
}

/* ---------- Helpers ---------- */

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

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold mt-6 text-white">
      {children}
    </h3>
  );
}
