import type { Metadata } from 'next';
import HeroBerita from '@/components/berita/HeroBerita';
import FeaturedPost from '@/components/berita/FeaturedPost';
import GridBerita from '@/components/berita/GridBerita';

export const metadata: Metadata = {
  title: 'Berita & Kajian | Pesantren Darul Hikmah',
  description: 'Kabar terkini, kajian ilmiah, dan prestasi santri Pesantren Darul Hikmah.',
};

export default function BeritaPage() {
  return (
    <>
      <HeroBerita />
      <FeaturedPost />
      <GridBerita />
    </>
  );
}
