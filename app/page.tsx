import HeroSection from '@/components/home/HeroSection';
import SambutanKyai from '@/components/home/SambutanKyai';
import ProgramUnggulan from '@/components/home/ProgramUnggulan';
import InfoPSB from '@/components/home/InfoPSB';
import JadwalFasilitas from '@/components/home/JadwalFasilitas';
import BeritaKajian from '@/components/home/BeritaKajian';
import LokasiPeta from '@/components/home/LokasiPeta';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SambutanKyai />
      <ProgramUnggulan />
      <InfoPSB />
      <JadwalFasilitas />
      <BeritaKajian />
      <LokasiPeta />
    </>
  );
}
