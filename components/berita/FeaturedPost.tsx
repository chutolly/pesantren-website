import data from '@/data/pesantren-data.json';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function FeaturedPost() {
  const featured = data.berita.artikel[0];
  
  return (
    <section className="px-4 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold text-emerald-600 mb-4">Artikel Terbaru</p>
        <div className="grid lg:grid-cols-2 gap-8 items-center rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm dark:border-emerald-900 dark:bg-gray-900">
          <div className="aspect-video relative rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <Calendar className="h-16 w-16" />
            </div>
          </div>
          <div>
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
              {featured.kategori}
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight">{featured.judul}</h2>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {featured.tanggal}
              </span>
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {featured.penulis}
              </span>
            </div>
            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">{featured.ringkasan}</p>
            <Link 
              href={`/berita/${featured.id}`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
            >
              Baca Selengkapnya
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
