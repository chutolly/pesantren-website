'use client';

import Link from 'next/link';
import { ChevronRight, PhoneCall } from 'lucide-react';

export default function HeroKontak() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 px-4 py-16 text-white md:py-24">
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <nav className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/" className="hover:text-emerald-200 transition">Beranda</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-emerald-200">Kontak</span>
        </nav>
        <div className="flex items-center gap-4 mb-4">
          <PhoneCall className="h-12 w-12" />
          <div>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">Hubungi Kami & Lokasi Pesantren</h1>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-lg text-emerald-100">Selamat datang, silakan hubungi atau kunjungi sekretariat Pesantren Darul Hikmah untuk informasi lebih lanjut.</p>
      </div>
    </section>
  );
}
