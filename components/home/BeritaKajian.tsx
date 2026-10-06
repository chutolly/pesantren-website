'use client';

import Link from 'next/link';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import data from '@/data/pesantren-data.json';

export default function BeritaKajian() {
  const beritaData = data.berita;

  return (
    <section id="berita" className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {beritaData.judul}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {beritaData.deskripsi}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beritaData.artikel.map((artikel, idx) => (
            <article
              key={idx}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-100 dark:border-gray-900"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800 flex items-center justify-center overflow-hidden">
                <div className="text-center text-emerald-600 dark:text-emerald-400">
                  <div className="text-4xl mb-2">📰</div>
                  <p className="text-sm font-medium">Foto Artikel</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <Calendar className="w-3 h-3" />
                    {artikel.tanggal}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                    <Tag className="w-3 h-3" />
                    {artikel.kategori}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {artikel.judul}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {artikel.ringkasan}
                </p>

                {/* Read More */}
                <Link
                  href={artikel.id ? `/berita/${artikel.id}` : '/berita'}
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-800"
          >
            Lihat Semua Berita
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
