import data from '@/data/pesantren-data.json';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

interface GridGaleriProps {
  activeKategori: string;
}

export default function GridGaleri({ activeKategori }: GridGaleriProps) {
  const filtered = activeKategori === 'Semua' 
    ? data.galeri.foto 
    : data.galeri.foto.filter(f => f.kategori === activeKategori);
  
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filtered.map((foto) => (
        <div 
          key={foto.id} 
          className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all"
        >
          <div className="aspect-square relative bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <Calendar className="h-12 w-12" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="font-bold text-sm mb-1">{foto.caption}</p>
              <div className="flex items-center gap-2 text-xs text-emerald-200">
                <Calendar className="h-3 w-3" />
                <span>{foto.tanggal}</span>
              </div>
              <span className="mt-2 inline-block rounded-full bg-emerald-600/80 px-3 py-1 text-xs font-semibold">
                {foto.kategori}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
