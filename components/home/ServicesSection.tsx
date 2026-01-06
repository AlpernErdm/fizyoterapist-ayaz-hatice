import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';

const ServicesSection: React.FC = () => {
  // Show first 6 services on home page
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
            HİZMETLERİMİZ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kişiye Özel Tedavi Programları
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesyonel fizyoterapi hizmetleri ile sağlıklı yaşam
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => (
            <Link 
              key={service.id} 
              href={`/hizmetler/${service.slug}`}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full">
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.imagePath}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
                  {service.category && (
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      {service.category}
                    </div>
                  )}
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="flex items-center text-emerald-600 font-semibold text-sm">
                    <span>Detaylı Bilgi</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/hizmetler">
            <Button 
              variant="primary" 
              size="lg"
              className="shadow-lg"
            >
              Tüm Hizmetleri Görüntüle
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
