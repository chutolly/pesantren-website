import data from '@/data/pesantren-data.json';
import { MapPin } from 'lucide-react';

export default function MapGoogle() {
  const { googleMapsEmbedUrl, googleMapsUrl } = data.kontak;
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Peta Lokasi Pesantren</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Kunjungi lokasi kami dengan panduan peta di bawah ini.</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Lokasi Pesantren"
          />
        </div>
        <div className="mt-6 text-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-emerald-600 hover:underline"
          >
            <MapPin className="h-5 w-5" />
            Buka di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
