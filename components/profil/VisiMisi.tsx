import data from '@/data/pesantren-data.json';
import { Target, CheckCircle2, Heart } from 'lucide-react';

export default function VisiMisi() {
  const { visi, misi, nilai } = data.profil;
  const nilaiUtama = data.profilPesantren.nilaiUtama;
  
  return (
    <section className="bg-gray-50 px-4 py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="font-semibold text-emerald-600">Fondasi pesantren</p>
          <h2 className="mt-2 text-4xl font-bold">Visi & Misi</h2>
        </div>
        
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm dark:border-emerald-900 dark:bg-gray-900">
            <div className="mb-4 inline-flex items-center gap-3 rounded-lg bg-emerald-100 p-3 dark:bg-emerald-900">
              <Target className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold">Visi</h3>
            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">{visi}</p>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm dark:border-emerald-900 dark:bg-gray-900">
            <div className="mb-4 inline-flex items-center gap-3 rounded-lg bg-emerald-100 p-3 dark:bg-emerald-900">
              <CheckCircle2 className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold">Misi</h3>
            <ul className="mt-4 space-y-3">
              {misi.map((m, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">{idx + 1}</span>
                  <span className="text-gray-700 dark:text-gray-300">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm dark:border-emerald-900 dark:bg-gray-900">
          <div className="mb-6 flex items-center gap-3">
            <Heart className="h-6 w-6 text-emerald-600" />
            <h3 className="text-2xl font-bold">Nilai-Nilai Utama</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {nilaiUtama.map((n) => (
              <div key={n} className="rounded-xl bg-emerald-50 px-4 py-3 text-center font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
