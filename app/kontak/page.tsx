import type { Metadata } from 'next';
import HeroKontak from '@/components/kontak/HeroKontak';
import KartuKontak from '@/components/kontak/KartuKontak';
import FormPesan from '@/components/kontak/FormPesan';
import MapGoogle from '@/components/kontak/MapGoogle';

export const metadata: Metadata = {
  title: 'Kontak & Lokasi | Pesantren Al-Azhar Bi\'Ibadillah',
  description: 'Hubungi sekretariat dan temukan lokasi Pesantren Al-Azhar Bi\'Ibadillah.',
};

export default function KontakPage() {
  return (
    <>
      <HeroKontak />
      <KartuKontak />
      <FormPesan />
      <MapGoogle />
    </>
  );
}
