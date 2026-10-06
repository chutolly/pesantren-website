'use client';

import { ArrowDown, CalendarDays, Sparkles } from 'lucide-react';
import data from '@/data/pesantren-data.json';

export default function HeroPSB() {
  const { psb, pesantren } = data;
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 px-4 py-20 text-white md:py-28">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            <CalendarDays className="h-4 w-4" /> {psb.status}
          </div>
          <p className="mb-3 flex items-center gap-2 text-emerald-200"><Sparkles className="h-4 w-4" /> {pesantren.nama}</p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">Penerimaan Santri Baru (PSB) Tahun Ajaran {psb.tahunAjaran}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-100">{psb.subjudul} Wujudkan langkah terbaik ananda bersama lingkungan pendidikan yang Qurani, berilmu, dan berakhlak mulia.</p>
          <a href="#formulir" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-emerald-800 shadow-lg transition hover:bg-emerald-50">Isi Formulir <ArrowDown className="h-5 w-5" /></a>
        </div>
      </div>
    </section>
  );
}
