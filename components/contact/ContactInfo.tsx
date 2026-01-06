'use client';

import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          İletişim Bilgileri
        </h2>

        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
              <p className="text-gray-600">{siteConfig.contact.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">
            Sosyal Medya
          </h3>
          <div className="flex gap-4">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="aspect-video">
          <iframe
            src={siteConfig.contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Klinik Konumu"
          />
        </div>
      </div>
    </div>
  );
}
