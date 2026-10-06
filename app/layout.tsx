import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import data from "@/data/pesantren-data.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const namaPesantren = data.pesantren.nama;
const deskripsi = `Website Resmi ${namaPesantren}. Informasi Pendaftaran Santri Baru (PSB), Program Pendidikan, dan Kegiatan Santri.`;

export const metadata: Metadata = {
  title: `${namaPesantren} | Berakhlaq Mulia & Berprestasi`,
  description: deskripsi,
  openGraph: {
    title: namaPesantren,
    description: deskripsi,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
