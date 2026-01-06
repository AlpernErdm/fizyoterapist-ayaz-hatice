import React from 'react';
import Image from 'next/image';
import { Smile, Tag, Users, MessageCircle, Instagram } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

const features = [
  {
    icon: Smile,
    title: 'Güler Yüzlü Hizmet',
    description: 'Her müşteriye ayrı değer veriyoruz.',
  },
  {
    icon: Tag,
    title: 'Uygun Fiyat Garantisi',
    description: 'Uygun Fiyatlar ile Bütçenize uygun fiyatlarla sizlere hizmet veriyoruz.',
  },
  {
    icon: Users,
    title: 'Bütüncül Yaklaşım',
    description: 'Detaylı Değerlendirme ve Analiz',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/why-choose-us.jpg"
              alt="Neden Bizi Seçmelisiniz - Ayaz & Hatice Fizyoterapi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <p className="text-purple-500 font-semibold text-sm uppercase tracking-wider mb-3">
                NEDEN BİZİ SEÇMELİSİNİZ?
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                En Düşük Fiyat En İyi Hizmetler
              </h2>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA and Social Media */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  'Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-purple-500 hover:bg-purple-600 text-white shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Hızlı İletişim
                </Button>
              </a>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
