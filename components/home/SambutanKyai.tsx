'use client';

import data from '@/data/pesantren-data.json';
import { Quote } from 'lucide-react';

export default function SambutanKyai() {
  const pengasuh = data.pengasuh;

  return (
    <section id="profil" className="bg-emerald-50 dark:bg-emerald-950/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {pengasuh.label}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mari menyimak sepatah kata dari pemimpin spiritual yang akan membimbing perjalanan santri
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-emerald-100 dark:border-emerald-900">
          <div className="grid md:grid-cols-2">
            {/* Left: Photo */}
            <div className="p-8 md:p-12 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20">
              <div className="relative w-full max-w-sm">
                {/* Placeholder or image */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-200 to-emerald-400 dark:from-emerald-700 dark:to-emerald-900 overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-6xl font-bold mb-2">👳</div>
                      <p className="text-sm font-medium">Foto Pengasuh</p>
                      <p className="text-xs opacity-80">Ganti dengan foto di JSON</p>
                    </div>
                  </div>
                </div>
                {/* Quote Badge */}
                <div className="absolute -top-4 -right-4 bg-yellow-500 text-emerald-900 rounded-full p-4 shadow-lg">
                  <Quote className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-8 md:p-12">
              {/* Name & Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300">
                  {pengasuh.nama}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{pengasuh.jabatan}</p>
              </div>

              {/* Quote */}
              <blockquote className="relative mb-8">
                <div className="text-6xl text-emerald-100 dark:text-emerald-900/30 absolute -top-6 -left-2">❝</div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic pl-6">
                  {pengasuh.kutipan}
                </p>
                <div className="text-6xl text-emerald-100 dark:text-emerald-900/30 absolute -bottom-8 -right-2">❞</div>
              </blockquote>

              {/* Signature */}
              <div className="mt-12 pt-6 border-t border-emerald-100 dark:border-emerald-900">
                <p className="text-emerald-800 dark:text-emerald-400 font-bold">
                  {pengasuh.tandaTangan}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-500">Pengasuh Pesantren</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
