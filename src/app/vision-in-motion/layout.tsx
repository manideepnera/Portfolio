import Link from 'next/link';
import { X } from 'lucide-react';

export default function VisionInMotionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10 px-6 py-4 flex justify-between items-center h-16">
        <Link href="/" className="text-white font-semibold text-lg hover:text-white/80 transition-colors">
          Manideep Nera
        </Link>
        <Link
          href="/"
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          title="Back to Portfolio"
        >
          <X size={20} />
        </Link>
      </nav>

      {/* Content */}
      {children}

      {/* Footer */}
      <footer className="py-8 text-center text-white/40 text-sm border-t border-white/10 bg-black">
        © {new Date().getFullYear()} Manideep Nera. Vision in Motion. All rights reserved.
      </footer>
    </main>
  );
}
