'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Service } from '@/types';

export interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link href={`/hizmetler/${service.slug}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full flex flex-col"
      >
        <div className="relative w-full h-48">
          <Image
            src={service.imagePath}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 text-base line-clamp-3 flex-1">
            {service.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
