'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function HeroProfil() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 px-4 py-16 text-white md:py-24">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <nav className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/" className="hover:text-emerald-200 transition">Beranda</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-emerald-200">Profil</span>
        </nav>
        <h1 className="text-5xl font-bold leading-tight md:text-6xl">Profil & Sejarah Pesantren</h1>
        <p className="mt-4 max-w-2xl text-lg text-emerald-100">Mengenal perjalanan, visi, misi, dan nilai-nilai inti yang menggerakkan Pesantren Darul Hikmah.</p>
      </div>
    </section>
  );
}
