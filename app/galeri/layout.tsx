import type { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `Galeri | ${siteConfig.name}`,
  description: 'Kliniğimizin modern tedavi ortamları, ekipmanları ve tedavi süreçlerinden görüntüler.',
  keywords: ['fizyoterapi klinik', 'tedavi ortamı', 'fizyoterapi ekipmanları', 'klinik galeri'],
  alternates: {
    canonical: `${siteConfig.url}/galeri`,
  },
  openGraph: {
    title: `Galeri | ${siteConfig.name}`,
    description: 'Kliniğimizin modern tedavi ortamları, ekipmanları ve tedavi süreçlerinden görüntüler.',
    url: `${siteConfig.url}/galeri`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: 'Klinik Galeri',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Galeri | ${siteConfig.name}`,
    description: 'Kliniğimizin modern tedavi ortamları, ekipmanları ve tedavi süreçlerinden görüntüler.',
    images: [siteConfig.seo.ogImage],
  },
};

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
