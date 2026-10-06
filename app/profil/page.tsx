import type { Metadata } from 'next';
import HeroProfil from '@/components/profil/HeroProfil';
import SejarahPesantren from '@/components/profil/SejarahPesantren';
import VisiMisi from '@/components/profil/VisiMisi';
import StrukturPengurus from '@/components/profil/StrukturPengurus';

export const metadata: Metadata = {
  title: 'Profil & Sejarah | Pesantren Darul Hikmah',
  description: 'Mengenal profil, sejarah, visi, misi, dan struktur Pesantren Darul Hikmah.',
};

export default function ProfilPage() {
  return (
    <>
      <HeroProfil />
      <SejarahPesantren />
      <VisiMisi />
      <StrukturPengurus />
    </>
  );
}
