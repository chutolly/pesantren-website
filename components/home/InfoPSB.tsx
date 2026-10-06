'use client';

import { Calendar, CheckCircle, MessageSquare } from 'lucide-react';
import data from '@/data/pesantren-data.json';

export default function InfoPSB() {
  const psbData = data.psb;

  return (
    <section id="psb" className="py-16 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-bold">{psbData.status}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {psbData.judul}
              </h2>
              <p className="text-emerald-100 mb-8">
                {psbData.subjudul}
              </p>

              {/* Gelombang */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Gelombang Pendaftaran</h3>
                <div className="space-y-3">
                  {psbData.gelombang.map((gel) => (
                    <div key={gel.nama} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{gel.nama}</span>
                        <span className="text-emerald-200 text-sm block">{gel.tanggal}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${gel.status === 'Dibuka' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                        {gel.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${psbData.tombolWhatsapp.nomor}?text=${encodeURIComponent(psbData.tombolWhatsapp.pesan)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-8 py-4 rounded-xl shadow-lg transition"
              >
                <MessageSquare className="w-5 h-5" />
                {psbData.tombolWhatsapp.label}
              </a>
            </div>

            {/* Right: Syarat & Alur */}
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Syarat Pendaftaran</h3>
                <ul className="space-y-2">
                  {psbData.persyaratan.map((syarat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{syarat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Alur Pendaftaran */}
              <div>
                <h3 className="text-xl font-bold mb-4">Alur Pendaftaran</h3>
                <div className="space-y-4">
                  {psbData.alurPendaftaran.map((step) => (
                    <div key={step.nomor} className="flex gap-4">
                      <div className="w-10 h-10 bg-white text-emerald-800 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.nomor}
                      </div>
                      <div>
                        <h4 className="font-bold">{step.judul}</h4>
                        <p className="text-emerald-200 text-sm">{step.deskripsi}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
