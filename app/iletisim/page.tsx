import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `İletişim | ${siteConfig.name}`,
  description: 'Bizimle iletişime geçin. Randevu almak veya sorularınız için bize ulaşın.',
  keywords: ['fizyoterapi randevu', 'iletişim', 'fizyoterapist randevu', 'İstanbul fizyoterapi'],
  alternates: {
    canonical: `${siteConfig.url}/iletisim`,
  },
  openGraph: {
    title: `İletişim | ${siteConfig.name}`,
    description: 'Bizimle iletişime geçin. Randevu almak veya sorularınız için bize ulaşın.',
    url: `${siteConfig.url}/iletisim`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: 'İletişim',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `İletişim | ${siteConfig.name}`,
    description: 'Bizimle iletişime geçin. Randevu almak veya sorularınız için bize ulaşın.',
    images: [siteConfig.seo.ogImage],
  },
};

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header Banner */}
      <PageHeader 
        title="İletişim"
        breadcrumbs={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'İletişim', href: '/iletisim' },
        ]}
      />

      <Container size="lg" className="py-12 md:py-20">
        {/* Intro Text */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Randevu almak veya sorularınız için bizimle iletişime geçin.
            Size en kısa sürede geri dönüş yapacağız.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info - Left Column */}
          <div>
            <ContactInfo />
          </div>

          {/* Contact Form - Right Column */}
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
