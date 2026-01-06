import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <article>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fizyoterapist Hatice Bilgin
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                15 yılı aşkın deneyimimle, manuel terapi, reformer pilates ve bütüncül 
                yaklaşım ile hastalarıma ağrısız bir yaşam için profesyonel destek sunuyorum.
              </p>
              <p>
                Her hastanın benzersiz olduğuna inanıyor ve kişiye özel tedavi programları 
                ile en iyi sonuçları elde etmeyi hedefliyorum. Modern fizyoterapi teknikleri 
                ve kanıta dayalı uygulamalarla, hastalarımın yaşam kalitesini artırmak için 
                çalışıyorum.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/hakkimda">
                <Button variant="outline" size="lg" icon={ArrowRight}>
                  Daha Fazla Bilgi
                </Button>
              </Link>
            </div>
          </article>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gray-200">
            <Image
              src="/assets/images/about-photo.jpg"
              alt="Fizyoterapist Hatice Bilgin - Profesyonel fizyoterapi hizmeti"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
