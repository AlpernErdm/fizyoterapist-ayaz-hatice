'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
}

export function FloatingWhatsApp({
  phoneNumber = siteConfig.contact.whatsapp,
  message = 'Merhaba, randevu almak istiyorum.',
}: FloatingWhatsAppProps) {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
