import Link from 'next/link';
import { ChevronRight, UsersRound } from 'lucide-react';

export default function HeroAlumni() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 px-4 py-16 text-white md:py-24">
      <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <nav className="mb-8 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-emerald-200">Beranda</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-emerald-200">Alumni</span>
        </nav>
        <UsersRound className="mb-5 h-12 w-12 text-emerald-200" />
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Ikatan Alumni &amp; Direktori Lulusan Pesantren Al-Azhar Bi&apos;Ibadillah</h1>
        <p className="mt-5 max-w-2xl text-lg text-emerald-100">Menjaga silaturahmi, berbagi inspirasi, dan terus berkhidmat untuk umat.</p>
      </div>
    </section>
  );
}
