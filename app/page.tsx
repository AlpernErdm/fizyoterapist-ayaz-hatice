import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.seo.ogImage],
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Sağlıklı Hareket İçin"
        subtitle="Bireye özel değerlendirme ve bilimsel tedavi yaklaşımlarıyla hareket özgürlüğünüzü yeniden kazandırıyoruz"
        backgroundImage="/assets/images/hero-bg.jpg"
        ctaButtons={{
          primary: { text: 'Hizmetleri İncele', href: '#services' },
          secondary: { text: 'İletişime Geç', href: '/iletisim' },
        }}
      />

      {/* Stats Section - Why Choose Us */}
      <StatsSection />

      {/* Services Section */}
      <div id="services">
        <ServicesSection />
      </div>
    </main>
  );
}
