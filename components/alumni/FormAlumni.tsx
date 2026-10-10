'use client';

import { useState } from 'react';
import data from '@/data/pesantren-data.json';
import { Send, MessageCircle } from 'lucide-react';

export default function FormAlumni() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    tahunLulus: '',
    aktivitas: '',
    pesan: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const message = `Assalamu'alaikum, data alumni baru:\nNama: ${formData.nama}\nEmail: ${formData.email}\nTahun Lulus: ${formData.tahunLulus}\nAktivitas Sekarang: ${formData.aktivitas}\nPesan: ${formData.pesan}`;
    const whatsappUrl = `https://wa.me/${data.alumni.nomorWhatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({ nama: '', email: '', tahunLulus: '', aktivitas: '', pesan: '' });
  };

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Pendaftaran Alumni Baru</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Daftarkan data Anda sebagai bagian dari keluarga alumni Pesantren Al-Azhar Bi'Ibadillah.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="space-y-5">
            <div>
              <label htmlFor="nama" className="block font-medium">Nama Lengkap</label>
              <input
                id="nama"
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label htmlFor="tahunLulus" className="block font-medium">Tahun Lulus / Angkatan</label>
              <input
                id="tahunLulus"
                type="text"
                name="tahunLulus"
                value={formData.tahunLulus}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                placeholder="Contoh: 2020"
              />
            </div>

            <div>
              <label htmlFor="aktivitas" className="block font-medium">Aktivitas Sekarang</label>
              <input
                id="aktivitas"
                type="text"
                name="aktivitas"
                value={formData.aktivitas}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                placeholder="Contoh: Mahasiswa / Guru / Entrepreneur"
              />
            </div>

            <div>
              <label htmlFor="pesan" className="block font-medium">Kesan & Pesan</label>
              <textarea
                id="pesan"
                name="pesan"
                value={formData.pesan}
                onChange={handleChange}
                rows={4}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                placeholder="Bagikan kesan atau pesan Anda tentang pesantren..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition"
            >
              <MessageCircle className="h-5 w-5" />
              Kirim ke WhatsApp Sekretariat
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Data Anda akan dikirim ke WhatsApp Sekretariat Alumni untuk verifikasi dan pendataan lebih lanjut.
        </p>
      </div>
    </section>
  );
}
