# Ayaz & Hatice Fizyoterapi ve Tedavi Amaçlı Pilates

Modern, responsive ve SEO-friendly fizyoterapi web sitesi.

## 🚀 Teknolojiler

- **Framework:** Next.js 15 (App Router)
- **UI:** React 18, Tailwind CSS
- **Animasyonlar:** Framer Motion
- **İkonlar:** Lucide React
- **Form Yönetimi:** React Hook Form + Zod
- **Test:** Vitest + Testing Library + Fast-check (Property-Based Testing)
- **Dil:** TypeScript

## 📦 Kurulum

**Not:** Bu proje `node_modules` ve `.next` klasörleri olmadan gönderilmiştir. İlk kurulumda:

```bash
# 1. Bağımlılıkları yükle (ilk seferde gerekli)
npm install

# 2. Development server'ı başlat
npm run dev

# VEYA Production için:
npm run build
npm start
```

Development server: http://localhost:3000

## 🧪 Test

```bash
# Tüm testleri çalıştır
npm test

# Test coverage
npm run test:coverage
```

## 📁 Proje Yapısı

```
├── app/                    # Next.js App Router sayfaları
│   ├── hizmetler/         # Hizmetler sayfaları
│   ├── galeri/            # Galeri sayfası
│   ├── hakkimda/          # Hakkımda sayfası
│   └── iletisim/          # İletişim sayfası
├── components/            # React bileşenleri
│   ├── layout/           # Header, Footer, vb.
│   ├── home/             # Ana sayfa bileşenleri
│   ├── services/         # Hizmet bileşenleri
│   ├── gallery/          # Galeri bileşenleri
│   ├── contact/          # İletişim bileşenleri
│   └── ui/               # Genel UI bileşenleri
├── data/                 # Statik veri dosyaları
├── lib/                  # Yardımcı fonksiyonlar
├── types/                # TypeScript tip tanımları
├── public/               # Statik dosyalar
└── __tests__/            # Test dosyaları
```

## ✨ Özellikler

- ✅ Responsive tasarım (mobil, tablet, desktop)
- ✅ SEO optimizasyonu (meta tags, sitemap, robots.txt)
- ✅ Erişilebilirlik (WCAG AA uyumlu)
- ✅ Performans optimizasyonu (Next.js Image, lazy loading)
- ✅ WhatsApp entegrasyonu
- ✅ Google Maps entegrasyonu
- ✅ Lightbox galeri
- ✅ İletişim formu
- ✅ Dinamik hizmet sayfaları
- ✅ Structured data (JSON-LD)

## 🎨 Özelleştirme

Site ayarlarını `data/siteConfig.ts` dosyasından düzenleyebilirsiniz:
- İletişim bilgileri
- Sosyal medya linkleri
- SEO ayarları

Hizmetleri `data/services.ts` dosyasından yönetebilirsiniz.

## 📱 İletişim

- **Telefon:** 0501 648 78 95
- **E-posta:** info@ayazhaticefizyoterapi.com
- **Adres:** Gayrettepe, Beşiktaş, İstanbul

## 📄 Lisans

Bu proje özel kullanım içindir.
