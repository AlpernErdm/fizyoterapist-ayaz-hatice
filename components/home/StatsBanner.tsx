import React from 'react';
import { Home, ThumbsUp, Users, Award } from 'lucide-react';
import Container from '@/components/ui/Container';

const stats = [
  {
    icon: Home,
    value: '10+',
    label: 'Yıllık Tecrübe',
  },
  {
    icon: ThumbsUp,
    value: '2500+',
    label: 'Mutlu Müşteriler',
  },
  {
    icon: Users,
    value: '10+',
    label: 'Uzman Kadro',
  },
  {
    icon: Award,
    value: '5+',
    label: 'Başarı Ödülü',
  },
];

const StatsBanner: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group"
              >
                {/* Icon */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-500 rounded-full flex items-center justify-center mb-4 shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
                </div>
                
                {/* Value */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StatsBanner;
