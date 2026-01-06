import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import * as LucideIcons from 'lucide-react';
import { CheckCircle, Clock, DollarSign, ArrowLeft, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';
import type { Service } from '@/types';

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service
export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
    };
  }

  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: service.description,
    keywords: [service.title, 'fizyoterapi', 'tedavi', 'İstanbul', 'Beşiktaş', 'Gayrettepe'],
    alternates: {
      canonical: `${siteConfig.url}/hizmetler/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
      url: `${siteConfig.url}/hizmetler/${service.slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: service.imagePath,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
      images: [service.imagePath],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const getIcon = (iconName?: string) => {
    if (!iconName) return LucideIcons.Activity;
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.Activity;
  };

  const ServiceIcon = getIcon(service.icon);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Breadcrumb */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white pt-header">
        <div className="absolute inset-0 bg-black/30"></div>
        <Container size="lg" className="relative py-16 md:py-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              ANA SAYFA
            </Link>
            <span>/</span>
            <Link href="/hizmetler" className="hover:text-emerald-400 transition-colors">
              {service.category?.toUpperCase()}
            </Link>
          </div>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {service.title.toUpperCase()}
          </h1>
        </Container>
      </div>

      {/* Main Content */}
      <Container size="lg" className="py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Title */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {service.title}
              </h2>
            </div>

            {/* Service Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={service.imagePath}
                alt={service.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            {/* Service Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {service.fullDescription}
              </p>

              {/* Additional detailed content */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title} Tedavisinde
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Tedavi programı içinde ilaç tedavisinin yanısıra, egzersiz, masaj, manuel terapi, 
                    bütüncül yaklaşım, fizik tedavi uygulamaları yer almaktadır. Tedavi, ağrı ve yorgunluğu 
                    azaltmak, diğer semptomları en aza indirmek amacıyla planlanır.
                  </p>
                </div>
              )}

              {/* Benefits Section */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title} Tedavisinde
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Sağlıklı beslenme, düzenli egzersiz, istirahat, gevşeme teknikleri etkili olmaktadır. 
                    Fakat bunların yanında otonom sinir sisteminin düzenlenmesi için kapsamlı Fizik Tedavi 
                    ve Rehabilitasyon programlarına ihtiyaç duyulur.
                  </p>
                  
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mt-6">
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Contact Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  Hızlı İletişim
                </h3>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <Phone className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1">Telefon</div>
                      <div className="text-sm font-medium text-gray-900">
                        {siteConfig.contact.phone}
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <Mail className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1">E-posta</div>
                      <div className="text-sm font-medium text-gray-900 break-all">
                        {siteConfig.contact.email}
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                      `Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="primary" size="lg" className="w-full justify-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Hızlı İletişim
                    </Button>
                  </a>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Address */}
                <div className="text-center">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Bize Ulaşın
                  </h4>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-left">{siteConfig.contact.address}</p>
                  </div>
                </div>
              </div>

              {/* Service Details Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Hizmet Detayları
                </h3>
                
                <div className="space-y-4">
                  {service.duration && (
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Süre</div>
                        <div className="text-sm font-medium">{service.duration}</div>
                      </div>
                    </div>
                  )}
                  {service.price && (
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Ücret</div>
                        <div className="text-sm font-medium">{service.price}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Back to Services */}
              <Link href="/hizmetler" className="block">
                <Button variant="outline" size="md" className="w-full justify-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Tüm Hizmetler
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white py-12 md:py-16">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Randevu Almak İster Misiniz?
            </h2>
            <p className="text-lg text-emerald-50 mb-8">
              Kişiye özel tedavi programınız için hemen iletişime geçin. 
              Size en uygun randevu saatini birlikte belirleyelim.
            </p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                `Merhaba, ${service.title} için randevu almak istiyorum.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-gray-100"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp ile İletişime Geç
              </Button>
            </a>
          </div>
        </Container>
      </div>
    </main>
  );
}
