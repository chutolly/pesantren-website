import data from '@/data/pesantren-data.json';
import { Calendar, Award } from 'lucide-react';

export default function SejarahPesantren() {
  const { sejarah, pendiri, milestone } = data.profilPesantren;
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold text-emerald-600">Perjalanan kami</p>
            <h2 className="mt-2 text-4xl font-bold">Sejarah Pesantren Darul Hikmah</h2>
            <p className="mt-6 leading-relaxed text-gray-700 dark:text-gray-300">{sejarah}</p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400"><b>Pendiri:</b> {pendiri}</p>
          </div>
          <div className="space-y-4">
            {milestone.map((item) => (
              <div key={item.tahun} className="flex gap-4 rounded-xl border border-emerald-100 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/40">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-emerald-700 dark:text-emerald-300">{item.tahun}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">{item.peristiwa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
