'use client';

import { FormEvent, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import data from '@/data/pesantren-data.json';

export default function FormPendaftaran() {
  const [form, setForm] = useState({ nama: '', gender: 'Putra', nisn: '', sekolah: '', wali: '', whatsapp: '', program: 'Tahfizh' });
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Assalamu'alaikum Panitia PSB ${data.pesantren.nama}, saya ingin mendaftarkan calon santri.%0A%0ANama: ${form.nama}%0AJenis Kelamin: ${form.gender}%0ANISN: ${form.nisn}%0AAsal Sekolah: ${form.sekolah}%0AOrang Tua/Wali: ${form.wali}%0ANo. WhatsApp: ${form.whatsapp}%0AProgram Pilihan: ${form.program}`;
    window.open(`https://wa.me/${data.psb.tombolWhatsapp.nomor}?text=${message}`, '_blank', 'noopener,noreferrer');
  };
  const input = 'mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 dark:border-gray-700 dark:bg-gray-950';
  return <section id="formulir" className="px-4 py-16"><div className="mx-auto max-w-3xl"><div className="mb-8 text-center"><p className="font-semibold text-emerald-600">Formulir online</p><h2 className="mt-2 text-3xl font-bold">Daftarkan calon santri</h2><p className="mt-3 text-gray-600 dark:text-gray-400">Data akan dirangkai otomatis dan dikirim ke WhatsApp panitia PSB.</p></div><form onSubmit={submit} className="grid gap-5 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-emerald-900 dark:bg-gray-900 md:grid-cols-2 md:p-8"><label className="md:col-span-2">Nama Lengkap Santri<input required value={form.nama} onChange={(e) => update('nama', e.target.value)} className={input} /></label><label>Jenis Kelamin<select value={form.gender} onChange={(e) => update('gender', e.target.value)} className={input}><option>Putra</option><option>Putri</option></select></label><label>NISN<input required inputMode="numeric" value={form.nisn} onChange={(e) => update('nisn', e.target.value)} className={input} /></label><label className="md:col-span-2">Asal Sekolah<input required value={form.sekolah} onChange={(e) => update('sekolah', e.target.value)} className={input} /></label><label>Nama Orang Tua / Wali<input required value={form.wali} onChange={(e) => update('wali', e.target.value)} className={input} /></label><label>Nomor WhatsApp Aktif (Orang Tua)<input required type="tel" value={form.whatsapp} onChange={(e) => update('whatsapp', e.target.value)} className={input} /></label><label className="md:col-span-2">Program yang Dipilih<select value={form.program} onChange={(e) => update('program', e.target.value)} className={input}><option>Tahfizh</option><option>Reguler</option><option>Diniyah</option></select></label><button type="submit" className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white transition hover:bg-emerald-700"><MessageCircle className="h-5 w-5" />Kirim Pendaftaran via WhatsApp</button></form></div></section>;
}
