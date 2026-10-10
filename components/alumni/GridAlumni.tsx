'use client';

import { useState } from 'react';
import data from '@/data/pesantren-data.json';
import { GraduationCap, Quote } from 'lucide-react';

export default function GridAlumni() {
  const [tahun, setTahun] = useState('Semua');
  const years = [...new Set(data.alumni.alumni.map((item) => item.tahunLulus))].sort();
  const filtered = tahun === 'Semua' ? data.alumni.alumni : data.alumni.alumni.filter((item) => item.tahunLulus === tahun);

  return (
    <section className="bg-gray-50 px-4 py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="font-semibold text-emerald-600">Direktori Lulusan</p><h2 className="text-3xl font-bold">Alumni Berprestasi</h2></div>
          <label className="text-sm font-medium">Tahun lulus
            <select value={tahun} onChange={(event) => setTahun(event.target.value)} className="ml-3 rounded-lg border border-gray-300 bg-white px-4 py-2 dark:bg-gray-900">
              <option>Semua</option>{years.map((year) => <option key={year}>{year}</option>)}
            </select>
          </label>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((alumni) => <article key={alumni.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"><GraduationCap className="h-10 w-10" /></div>
            <h3 className="text-lg font-bold">{alumni.nama}</h3><p className="mt-1 text-sm font-medium text-emerald-600">Angkatan {alumni.tahunLulus}</p><p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{alumni.aktivitasSekarang}</p>
            <div className="mt-5 border-t pt-4 text-sm italic text-gray-500"><Quote className="mr-1 inline h-4 w-4 text-emerald-500" />{alumni.kesanPesan}</div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
