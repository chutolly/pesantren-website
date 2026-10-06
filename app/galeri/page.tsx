import type { Metadata } from 'next';
import HeroGaleri from '@/components/galeri/HeroGaleri';
import FilterKategori from '@/components/galeri/FilterKategori';
import GridGaleri from '@/components/galeri/GridGaleri';

export const metadata: Metadata = {
  title: 'Galeri Kegiatan | Pesantren Darul Hikmah',
  description: 'Dokumentasi kegiatan dan momen berharga santri Pesantren Darul Hikmah.',
};

export default function GaleriPage() {
  return (
    <>
      <HeroGaleri />
      <FilterKategori />
    </>
  );
}
