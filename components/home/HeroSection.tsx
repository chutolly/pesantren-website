'use client';

import Link from 'next/link';
import { Users, BookOpen, Trophy } from 'lucide-react';
import data from '@/data/pesantren-data.json';

export default function HeroSection() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-emerald-950 dark:via-black dark:to-emerald-900 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-24 md:pb-32">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
              <span className="text-emerald-600 dark:text-emerald-400">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {data.hero.judul}
            </h1>

            {/* Ayat Al-Qur'an */}
            <div className="space-y-3">
              <p className="text-emerald-800 dark:text-emerald-300 text-2xl font-arabic">
                {data.hero.ayat}
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                {data.hero.terjemahanAyat}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.hero.deskripsi}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={data.hero.tombolUtama.url}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-800"
              >
                {data.hero.tombolUtama.label}
              </Link>
              <Link
                href={data.hero.tombolSekunder.url}
                className="border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/50 px-8 py-3 rounded-lg font-bold transition"
              >
                {data.hero.tombolSekunder.label}
              </Link>
            </div>
          </div>

          {/* Right: Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {data.hero.statistik.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 border border-emerald-100 dark:border-emerald-900 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                  {stat.angka}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
