import type { Metadata } from 'next';
import HeroAlumni from '@/components/alumni/HeroAlumni';
import StatistikAlumni from '@/components/alumni/StatistikAlumni';
import GridAlumni from '@/components/alumni/GridAlumni';
import FormAlumni from '@/components/alumni/FormAlumni';

export const metadata: Metadata = {
  title: 'Alumni & Direktori Lulusan | Pesantren Al-Azhar Bi\'Ibadillah',
  description: 'Ikatan alumni, direktori lulusan, dan pendataan alumni Pesantren Al-Azhar Bi\'Ibadillah.',
};

export default function AlumniPage() {
  return (
    <>
      <HeroAlumni />
      <StatistikAlumni />
      <GridAlumni />
      <FormAlumni />
    </>
  );
}
