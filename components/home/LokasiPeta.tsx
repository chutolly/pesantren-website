'use client';

import { MapPin } from 'lucide-react';
import data from '@/data/pesantren-data.json';

export default function LokasiPeta() {
  const kontak = data.kontak;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lokasi Pesantren
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
            <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>{kontak.alamat}</span>
          </div>
        </div>

        {/* Map Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-900">
          <iframe
            src={kontak.googleMapsEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Lokasi Pesantren Darul Hikmah"
          />
        </div>

        {/* Open in Maps Button */}
        <div className="text-center mt-6">
          <a
            href={kontak.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
          >
            <MapPin className="w-5 h-5" />
            Buka di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
