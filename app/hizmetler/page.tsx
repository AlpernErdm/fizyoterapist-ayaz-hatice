import React from 'react';
import type { Metadata } from 'next';
import ServiceGrid from '@/components/services/ServiceGrid';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import { tedaviServices, rehabilitasyonServices, tedaviAmacliPilatesServices } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz - Ayaz & Hatice Fizyoterapi',
  description: 'Tedavi Amaçlı Pilates, Rehabilitasyon ve Tedavi hizmetlerimiz. Bireye özel değerlendirme ve bilimsel tedavi yaklaşımları.',
  keywords: ['fizyoterapi hizmetleri', 'tedavi amaçlı pilates', 'reformer pilates', 'rehabilitasyon', 'manuel terapi', 'spor yaralanmaları'],
  alternates: {
    canonical: `${siteConfig.url}/hizmetler`,
  },
  openGraph: {
    title: 'Hizmetlerimiz - Ayaz & Hatice Fizyoterapi',
    description: 'Tedavi Amaçlı Pilates, Rehabilitasyon ve Tedavi hizmetlerimiz. Bireye özel değerlendirme ve bilimsel tedavi yaklaşımları.',
    url: `${siteConfig.url}/hizmetler`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: 'Fizyoterapi Hizmetleri',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hizmetlerimiz - Ayaz & Hatice Fizyoterapi',
    description: 'Tedavi Amaçlı Pilates, Rehabilitasyon ve Tedavi hizmetlerimiz.',
    images: [siteConfig.seo.ogImage],
  },
};

export default function HizmetlerPage() {
  return (
    <main>
      {/* Page Header Banner */}
      <PageHeader 
        title="Hizmetlerimiz"
        breadcrumbs={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hizmetlerimiz', href: '/hizmetler' },
        ]}
      />

      <Container size="lg" className="py-16 md:py-24">
        {/* Intro Text */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bireye özel değerlendirme ve bilimsel tedavi yaklaşımlarıyla hareket özgürlüğünüzü yeniden kazandırıyoruz.
          </p>
        </div>

        {/* Kategori 1: Tedavi & Yaklaşımlar */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Tedavi & Yaklaşımlar
            </h2>
            <p className="text-gray-600">
              Bel fıtığından skolyoza, manuel terapiden fonksiyonel egzersize geniş tedavi yelpazesi.
            </p>
          </div>
          <ServiceGrid services={tedaviServices} columns={3} />
        </div>

        {/* Kategori 2: Rehabilitasyon Alanları */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Rehabilitasyon Alanları
            </h2>
            <p className="text-gray-600">
              Ortopedik, sporcu, nörolojik ve ameliyat sonrası rehabilitasyon hizmetlerimiz.
            </p>
          </div>
          <ServiceGrid services={rehabilitasyonServices} columns={3} />
        </div>

        {/* Kategori 3: Tedavi Amaçlı Pilates */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Tedavi Amaçlı Pilates
            </h2>
            <p className="text-gray-600">
              Reformer, mat ve özel pilates programlarımızla güçlü ve dengeli bir vücut.
            </p>
          </div>
          <ServiceGrid services={tedaviAmacliPilatesServices} columns={3} />
        </div>
      </Container>
    </main>
  );
}
