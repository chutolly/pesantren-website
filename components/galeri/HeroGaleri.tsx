'use client';

import Link from 'next/link';
import { ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function HeroGaleri() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 px-4 py-16 text-white md:py-24">
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <nav className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/" className="hover:text-emerald-200 transition">Beranda</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-emerald-200">Galeri</span>
        </nav>
        <div className="flex items-center gap-4 mb-4">
          <ImageIcon className="h-12 w-12" />
          <div>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">Galeri & Dokumentasi Kegiatan</h1>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-lg text-emerald-100">Momen dan aktivitas keseharian santri di Pesantren Darul Hikmah.</p>
      </div>
    </section>
  );
}
