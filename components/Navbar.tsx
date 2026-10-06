'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import data from '@/data/pesantren-data.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-emerald-100 dark:border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Nama */}
          <Link href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              {data.pesantren.singkatan.charAt(0)}
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                {data.pesantren.singkatan}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                {data.pesantren.nama}
              </div>
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {data.navigasi.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Tombol Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#psb"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition text-sm"
            >
              Pendaftaran PSB
            </a>
          </div>

          {/* Hamburger Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-2 border-t border-emerald-100 dark:border-emerald-900 pt-4">
              {data.navigasi.map((item) => (
                <Link
                  key={item.label}
                  href={item.url}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 rounded-lg transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="#psb"
                className="block w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-medium transition text-center"
                onClick={() => setIsOpen(false)}
              >
                Pendaftaran PSB
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
