'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import Lightbox from '@/components/gallery/Lightbox';
import { galleryImages } from '@/data/gallery';

// Note: Metadata must be exported from a Server Component
// This is a Client Component, so metadata should be in a parent layout or separate metadata file

export default function GaleriPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev < galleryImages.length - 1 ? prev + 1 : prev
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => 
      prev > 0 ? prev - 1 : prev
    );
  };

  return (
    <main className="min-h-screen">
      {/* Page Header Banner */}
      <PageHeader 
        title="Galeri"
        breadcrumbs={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Galeri', href: '/galeri' },
        ]}
      />

      <Container className="py-20">
        {/* Intro Text */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kliniğimizin modern tedavi ortamları, ekipmanları ve tedavi süreçlerinden görüntüler
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid 
          images={galleryImages} 
          onImageClick={handleImageClick}
        />

        {/* Lightbox */}
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
        />
      </Container>
    </main>
  );
}
