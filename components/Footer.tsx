'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Share2 } from 'lucide-react';
import data from '@/data/pesantren-data.json';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Kolom 1: Profil */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-emerald-900 font-bold text-xl">
                {data.pesantren.singkatan.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-lg">{data.pesantren.singkatan}</h3>
                <p className="text-sm text-emerald-200">{data.pesantren.nama}</p>
              </div>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              {data.pesantren.deskripsiSingkat}
            </p>
            <p className="text-yellow-300 text-xs font-semibold mt-4">
              "{data.pesantren.slogan}"
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-300">Navigasi Cepat</h4>
            <ul className="space-y-2">
              {data.navigasi.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.url}
                    className="text-emerald-100 hover:text-yellow-300 transition text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/alumni"
                  className="text-emerald-100 hover:text-yellow-300 transition text-sm"
                >
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-300">Hubungi Kami</h4>
            <div className="space-y-4">
              {/* Alamat */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-emerald-100 leading-relaxed">
                    {data.kontak.alamat}
                  </p>
                </div>
              </div>

              {/* WhatsApp & Telepon */}
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`https://wa.me/${data.kontak.telepon.replace(/\D/g, '')}`}
                    className="text-sm text-emerald-100 hover:text-yellow-300 transition"
                  >
                    {data.kontak.telepon}
                  </a>
                  <p className="text-xs text-emerald-200">{data.kontak.jamLayanan}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${data.kontak.email}`}
                  className="text-sm text-emerald-100 hover:text-yellow-300 transition"
                >
                  {data.kontak.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-emerald-200">
            {data.footer.teksHakCipta}
          </p>

          {/* Media Sosial */}
          <div className="flex items-center gap-6">
            {data.kontak.mediaSosial.map((social) => (
              <a
                key={social.nama}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-100 hover:text-yellow-300 transition flex items-center gap-1"
                aria-label={social.nama}
              >
                <Share2 className="w-4 h-4" />
                <span className="text-xs hidden sm:inline">{social.nama}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Pesan Penutup */}
        <p className="text-center text-xs text-emerald-300 mt-8 italic">
          {data.footer.pesanPenutup}
        </p>
      </div>
    </footer>
  );
}
