import data from '@/data/pesantren-data.json';
import Image from 'next/image';
import { Users } from 'lucide-react';

export default function StrukturPengurus() {
  const struktur = data.profilPesantren.struktur;
  
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-3">
          <Users className="h-8 w-8 text-emerald-600" />
          <div>
            <p className="font-semibold text-emerald-600">Kepemimpinan</p>
            <h2 className="text-4xl font-bold">Struktur Pengurus Pesantren</h2>
          </div>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {struktur.map((person, idx) => (
            <div key={idx} className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <div className="relative h-48 w-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">{String(idx + 1).padStart(2, '0')}</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{person.nama}</h3>
                <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">{person.jabatan}</p>
                <p className="mt-3 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{person.bidang}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
