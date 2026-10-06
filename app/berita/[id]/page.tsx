import type { Metadata } from 'next';
import data from '@/data/pesantren-data.json';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';

interface BeritaDetailProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return data.berita.artikel.map((artikel) => ({
    id: artikel.id,
  }));
}

export async function generateMetadata({ params }: BeritaDetailProps): Promise<Metadata> {
  const { id } = await params;
  const artikel = data.berita.artikel.find((a) => a.id === id);
  
  if (!artikel) {
    return { title: 'Berita Tidak Ditemukan' };
  }
  
  return {
    title: `${artikel.judul} | Pesantren Darul Hikmah`,
    description: artikel.ringkasan,
  };
}

export default async function BeritaDetailPage({ params }: BeritaDetailProps) {
  const { id } = await params;
  const artikel = data.berita.artikel.find((a) => a.id === id);
  
  if (!artikel) {
    notFound();
  }
  
  const relatedArtikel = data.berita.artikel
    .filter((a) => a.id !== id && a.kategori === artikel.kategori)
    .slice(0, 3);
  
  return (
    <>
      {/* Hero Breadcrumb */}
      <section className="bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 px-4 py-12 text-white">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-sm">
            <Link href="/" className="hover:text-emerald-200 transition">Beranda</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/berita" className="hover:text-emerald-200 transition">Berita</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-emerald-200">Detail</span>
          </nav>
          <Link 
            href="/berita"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-emerald-200 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Daftar Berita
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
            {artikel.kategori}
          </span>
          
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">{artikel.judul}</h1>
          
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 pb-6">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {artikel.tanggal}
            </span>
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {artikel.penulis}
            </span>
          </div>
          
          <div className="mt-8 aspect-video relative rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <Calendar className="h-16 w-16" />
            </div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert mt-8 max-w-none">
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
              {artikel.ringkasan}
            </p>
            <div className="mt-6 leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {artikel.konten}
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArtikel.length > 0 && (
        <section className="bg-gray-50 px-4 py-16 dark:bg-gray-950">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-8">Berita Terkait</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArtikel.map((item) => (
                <Link 
                  key={item.id}
                  href={`/berita/${item.id}`}
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
                    <h3 className="mt-3 text-lg font-bold leading-snug group-hover:text-emerald-600 transition line-clamp-2">
                      {item.judul}
                    </h3>
                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                      {item.tanggal}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
