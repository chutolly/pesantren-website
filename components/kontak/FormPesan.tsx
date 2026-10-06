'use client';

import { FormEvent, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import data from '@/data/pesantren-data.json';

export default function FormPesan() {
  const [form, setForm] = useState({ nama: '', kontak: '', subjek: 'Pertanyaan Umum', pesan: '' });
  const update = (key: keyof typeof form, value: string) => setForm(c => ({ ...c, [key]: value }));

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Assalamu'alaikum Sekretariat ${data.pesantren.nama},%0A%0ANama: ${form.nama}%0AKontak: ${form.kontak}%0ASubjek: ${form.subjek}%0A%0APesan:%0A${form.pesan}`;
    const cleanNumber = data.kontak.telepon.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const inputClass = "mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 dark:border-gray-700 dark:bg-gray-950";

  return (
    <section className="bg-gray-50 px-4 py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-emerald-900 dark:bg-gray-900 md:p-10">
        <div className="mb-8 text-center">
          <p className="font-semibold text-emerald-600">Kirim Pesan</p>
          <h2 className="mt-2 text-3xl font-bold">Hubungi Sekretariat</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Pesan akan langsung dirangkai dan dikirim via WhatsApp.</p>
        </div>

        <form onSubmit={submit} className="grid gap-5 md:grid-cols-2">
          <label className="md:col-span-2">
            Nama Pengirim
            <input required value={form.nama} onChange={e => update('nama', e.target.value)} className={inputClass} placeholder="Nama lengkap" />
          </label>
          <label>
            Nomor WhatsApp / Email
            <input required value={form.kontak} onChange={e => update('kontak', e.target.value)} className={inputClass} placeholder="08123456789" />
          </label>
          <label>
            Subjek / Keperluan
            <select value={form.subjek} onChange={e => update('subjek', e.target.value)} className={inputClass}>
              <option>Pertanyaan Umum</option>
              <option>Kunjungan</option>
              <option>Informasi PSB</option>
              <option>Lainnya</option>
            </select>
          </label>
          <label className="md:col-span-2">
            Isi Pesan
            <textarea required rows={4} value={form.pesan} onChange={e => update('pesan', e.target.value)} className={inputClass} placeholder="Tuliskan pesan atau pertanyaan..." />
          </label>
          <button type="submit" className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white transition hover:bg-emerald-700">
            <MessageCircle className="h-5 w-5" />
            Kirim Pesan via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
