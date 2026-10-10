import data from '@/data/pesantren-data.json';
import { BriefcaseBusiness, GraduationCap, UsersRound } from 'lucide-react';

const icons = [UsersRound, GraduationCap, BriefcaseBusiness];

export default function StatistikAlumni() {
  return (
    <section className="px-4 py-14">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3">
        {data.alumni.statistik.map((item, index) => {
          const Icon = icons[index];
          return (
            <article key={item.label} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-emerald-900 dark:bg-gray-900">
              <Icon className="mb-4 h-8 w-8 text-emerald-600" aria-hidden="true" />
              <p className="text-3xl font-bold text-emerald-800 dark:text-emerald-300">{item.angka}</p>
              <h2 className="mt-1 font-medium text-gray-600 dark:text-gray-300">{item.label}</h2>
            </article>
          );
        })}
      </div>
    </section>
  );
}
