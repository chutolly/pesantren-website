'use client';

import data from '@/data/pesantren-data.json';
import { BookOpenCheck, ScrollText, GraduationCap, Languages } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpenCheck,
  ScrollText,
  GraduationCap,
  Languages,
};

export default function ProgramUnggulan() {
  const programData = data.programPendidikan;

  return (
    <section id="program" className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {programData.judul}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {programData.deskripsi}
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programData.program.map((program, idx) => {
            const Icon = iconMap[program.ikon];
            return (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-800 border border-emerald-100 dark:border-emerald-900 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition">
                  {Icon && <Icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {program.nama}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {program.deskripsi}
                </p>

                {/* View More */}
                <div className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                  <span>Pelajari lebih lanjut</span>
                  <span className="group-hover:translate-x-1 transition">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
