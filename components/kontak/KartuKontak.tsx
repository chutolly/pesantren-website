import data from '@/data/pesantren-data.json';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function KartuKontak() {
  const { alamat, telepon, email, jamLayanan } = data.kontak;
  
  const cards = [
    { title: 'Alamat Pesantren', value: alamat, icon: MapPin },
    { title: 'Telepon & WhatsApp', value: telepon, icon: Phone },
    { title: 'Email Resmi', value: email, icon: Mail },
    { title: 'Jam Layanan', value: jamLayanan, icon: Clock },
  ];

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div key={idx} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-emerald-900 dark:bg-gray-900">
                <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-emerald-50 p-4 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{c.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
