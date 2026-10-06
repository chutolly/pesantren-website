import type { Metadata } from 'next';
import HeroPSB from '@/components/psb/HeroPSB';
import InfoGelombangBiaya from '@/components/psb/InfoGelombangBiaya';
import SyaratPendaftaran from '@/components/psb/SyaratPendaftaran';
import FormPendaftaran from '@/components/psb/FormPendaftaran';
import FaqPSB from '@/components/psb/FaqPSB';

export const metadata: Metadata = { title: 'PSB 2026/2027 | Pesantren Darul Hikmah', description: 'Penerimaan Santri Baru Pesantren Darul Hikmah tahun ajaran 2026/2027.' };

export default function PSBPage() {
  return <><HeroPSB /><InfoGelombangBiaya /><SyaratPendaftaran /><FormPendaftaran /><FaqPSB /></>;
}
