import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import PageHeader from '@/components/ui/PageHeader';
import { siteConfig } from '@/data/siteConfig';
import { Award, GraduationCap, Heart, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: `Hakkımızda | ${siteConfig.name}`,
  description: 'Ayaz & Hatice Fizyoterapi ekibi hakkında bilgi edinin. Fzt. Abdurrahim Ayaz ve Fzt. Haticenur Erol.',
  keywords: ['ayaz hatice fizyoterapi', 'abdurrahim ayaz', 'haticenur erol', 'tedavi amaçlı pilates', 'rehabilitasyon'],
  alternates: {
    canonical: `${siteConfig.url}/hakkimda`,
  },
  openGraph: {
    title: `Hakkımızda | ${siteConfig.name}`,
    description: 'Ayaz & Hatice Fizyoterapi ekibi hakkında bilgi edinin.',
    url: `${siteConfig.url}/hakkimda`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: 'Hakkımızda',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Hakkımızda | ${siteConfig.name}`,
    description: 'Ayaz & Hatice Fizyoterapi ekibi hakkında bilgi edinin.',
    images: [siteConfig.seo.ogImage],
  },
};

export default function HakkimdaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header Banner */}
      <PageHeader 
        title="Hakkımızda"
        breadcrumbs={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hakkımızda', href: '/hakkimda' },
        ]}
      />

      <Container size="lg" className="py-12 md:py-20">
        {/* Intro Text */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Bireye özel değerlendirme ve bilimsel tedavi yaklaşımlarıyla hareket özgürlüğünüzü yeniden kazandırıyoruz.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-emerald-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Misyonumuz
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ayaz & Hatice Fizyoterapi olarak, bireye özel değerlendirme ve bilimsel tedavi yaklaşımlarıyla 
              hareket özgürlüğünüzü yeniden kazandırıyoruz. Tedavi Amaçlı Pilates, Rehabilitasyon ve Manuel Terapi 
              alanlarında uzman ekibimizle, sağlıklı hareket için güçlü yaşamı destekleyen yaklaşımlar sunuyoruz.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <Heart className="w-5 h-5" />
                <span>Sağlıklı Hareket İçin</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <Users className="w-5 h-5" />
                <span>Güçlü Yaşamı Destekleyen Yaklaşımlar</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <Award className="w-5 h-5" />
                <span>Ağrısız Hareket Mümkündür</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Team Members */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Ekibimiz
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fzt. Abdurrahim Ayaz */}
            <Card padding="lg" hover>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 bg-emerald-100">
                  <Image
                    src="/assets/images/ayaz-photo.jpg"
                    alt="Fizyoterapist Abdurrahim Ayaz"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Fzt. Abdurrahim Ayaz
                </h3>
                <p className="text-emerald-600 font-semibold mb-4">
                  Fizyoterapist
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Manuel terapi, sporcu rehabilitasyonu ve tedavi amaçlı pilates (reformer & mat) alanlarında çalışıyorum. 
                  Spor yaralanmaları, kas-iskelet sistemi problemleri ve hareket kısıtlılıklarında; bilimsel temelli 
                  değerlendirmelerle kişiye özel tedavi ve egzersiz programları oluşturuyorum.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  Amacım yalnızca ağrıyı azaltmak değil; hareketin kaynağını analiz ederek danışanlarımın ağrısız, 
                  güçlü ve kontrollü bir şekilde günlük yaşamlarına ve spor aktivitelerine güvenle devam etmelerini sağlamak.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  Fonksiyonel ve bütüncül yaklaşımlarla, sürdürülebilir iyileşme, doğru hareket ve uzun vadeli 
                  yaşam kalitesi artışını hedefliyorum.
                </p>
              </div>
            </Card>

            {/* Fzt. Haticenur Erol */}
            <Card padding="lg" hover>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 bg-emerald-100">
                  <Image
                    src="/assets/images/hatice-photo.jpg"
                    alt="Fizyoterapist Haticenur Erol"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Fzt. Haticenur Erol
                </h3>
                <p className="text-emerald-600 font-semibold mb-4">
                  Fizyoterapist
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Alanımda edindiğim deneyim ve güncel fizyoterapi yaklaşımlarıyla; manuel terapi, tedavi amaçlı pilates 
                  (reformer & mat) ve kişiye özel egzersiz programları üzerine çalışıyorum. Amacım, danışanlarımın yalnızca 
                  şikâyetlerini azaltmak değil; bedenlerini daha iyi tanımalarını sağlayarak uzun vadeli, sürdürülebilir 
                  bir iyilik hâli kazandırmak.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  Her bireyin ihtiyacının farklı olduğuna inanıyor, bu doğrultuda değerlendirme sürecinden itibaren 
                  kişiye özel tedavi planları oluşturuyorum. Bilimsel temelli, bütüncül ve fonksiyonel yaklaşımlarla; 
                  ağrısız hareket, doğru duruş ve yaşam kalitesini artırmayı hedefliyorum.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  Modern fizyoterapi tekniklerini tedavi amaçlı pilates ile birleştirerek, danışanlarımın günlük 
                  yaşamlarına daha güçlü ve dengeli bir bedenle devam etmelerine destek oluyorum.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Uzmanlık Alanlarımız
          </h2>
          <Card padding="lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Tedavi Amaçlı Pilates',
                'Reformer Pilates',
                'Manuel Terapi',
                'Ortopedik Rehabilitasyon',
                'Sporcu Rehabilitasyonu',
                'Nörolojik Rehabilitasyon',
                'Bel ve Boyun Fıtığı',
                'Skolyoz Tedavisi',
                'Postür Analizi',
                'Fonksiyonel Egzersiz',
                'Ameliyat Sonrası Rehabilitasyon',
                'Geriatrik Rehabilitasyon',
              ].map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Eğitim ve Sertifikalar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: GraduationCap,
                title: 'Fizyoterapi ve Rehabilitasyon',
                description: 'Üniversite - Lisans Eğitimi',
              },
              {
                icon: Award,
                title: 'Tedavi Amaçlı Pilates Eğitmenliği',
                description: 'Uluslararası Sertifika',
              },
              {
                icon: Award,
                title: 'Manuel Terapi Sertifikası',
                description: 'İleri Seviye Manuel Terapi',
              },
              {
                icon: Award,
                title: 'Spor Fizyoterapisi',
                description: 'Spor Yaralanmaları Uzmanlığı',
              },
            ].map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} padding="lg" hover>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </main>
  );
}
