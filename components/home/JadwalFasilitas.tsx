'use client';

import { BookOpen, Clock, HeartPulse, Home, MapPin } from 'lucide-react';
import data from '@/data/pesantren-data.json';

const ikonFasilitas = {
  HeartPulse,
  BookOpen,
  Home,
};

export default function JadwalFasilitas() {
  const fasilitasData = data.fasilitas;

  return (
    <section id="fasilitas" className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {fasilitasData.judul}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {fasilitasData.deskripsi}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Jadwal Harian */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Jadwal Kegiatan Harian
              </h3>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-900 overflow-hidden">
              {fasilitasData.jadwalHarian.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-stretch border-b border-gray-100 dark:border-gray-900 last:border-b-0 ${
                    idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900/50' : ''
                  }`}
                >
                  <div className="w-24 bg-emerald-600 text-white p-4 flex items-center justify-center font-bold text-sm">
                    {item.waktu}
                  </div>
                  <div className="flex-1 p-4">
                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                      {item.kegiatan}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Fasilitas Grid */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Fasilitas Utama
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {fasilitasData.daftar.map((fasilitas, idx) => {
                const IkonFasilitas =
                  'ikon' in fasilitas && fasilitas.ikon
                    ? ikonFasilitas[fasilitas.ikon as keyof typeof ikonFasilitas]
                    : null;

                return (
                  <div
                    key={idx}
                    className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-100 dark:border-gray-900"
                  >
                  {/* Facility Image */}
                  <div className="aspect-video bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800 flex items-center justify-center overflow-hidden">
                    {fasilitas.gambar ? (
                      <img
                        src={fasilitas.gambar}
                        alt={fasilitas.nama}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-emerald-600 dark:text-emerald-400">
                        <div className="text-3xl mb-1">🏛️</div>
                        <p className="text-xs font-medium">Foto Fasilitas</p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-1">
                      {IkonFasilitas && <IkonFasilitas className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />}
                      {fasilitas.nama}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs line-clamp-2">
                      {fasilitas.deskripsi}
                    </p>
                  </div>
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
