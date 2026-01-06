'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { GalleryImage } from '@/types';

export interface GalleryGridProps {
  images: GalleryImage[];
  layout?: 'grid' | 'masonry';
  onImageClick?: (index: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ 
  images, 
  layout = 'grid',
  onImageClick 
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    if (onImageClick) {
      onImageClick(index);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          className="relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-100"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleImageClick(index)}
        >
          <Image
            src={image.imagePath}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            loading="lazy"
          />
          
          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            {image.caption && (
              <p className="text-white text-center px-4 font-medium">
                {image.caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
