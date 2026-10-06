'use client';

import { useState } from 'react';
import data from '@/data/pesantren-data.json';
import GridGaleri from './GridGaleri';

export default function FilterKategori() {
  const [active, setActive] = useState('Semua');
  const kategori = data.galeri.kategori;
  
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {kategori.map((kat) => (
            <button
              key={kat}
              onClick={() => setActive(kat)}
              className={`rounded-full px-5 py-2 font-semibold transition ${
                active === kat
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {kat}
            </button>
          ))}
        </div>
        <GridGaleri activeKategori={active} />
      </div>
    </section>
  );
}
