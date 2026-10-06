import data from '@/data/pesantren-data.json';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function GridBerita() {
  const artikel = data.berita.artikel.slice(1);
  
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">Semua Berita</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artikel.map((item) => (
            <div 
              key={item.id} 
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="aspect-video relative bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <Calendar className="h-12 w-12" />
                </div>
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                  {item.kategori}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-snug group-hover:text-emerald-600 transition">
                  {item.judul}
                </h3>
                <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.tanggal}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {item.penulis}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-2">
                  {item.ringkasan}
                </p>
                <Link 
                  href={`/berita/${item.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
                >
                  Baca Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
