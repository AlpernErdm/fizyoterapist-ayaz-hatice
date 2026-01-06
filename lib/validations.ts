import { z } from 'zod';

/**
 * Contact Form Validation Schema
 * Validates contact form fields with Turkish error messages
 */
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'Ad alanı zorunludur')
    .max(50, 'Ad en fazla 50 karakter olabilir'),
  
  lastName: z
    .string()
    .trim()
    .min(1, 'Soyad alanı zorunludur')
    .max(50, 'Soyad en fazla 50 karakter olabilir'),
  
  phone: z
    .string()
    .min(1, 'Telefon numarası zorunludur')
    .regex(
      /^(\+90|0)?[5][0-9]{9}$/,
      'Geçerli bir telefon numarası giriniz (örn: 0555 123 4567)'
    ),
  
  message: z
    .string()
    .trim()
    .min(1, 'Mesaj alanı zorunludur')
    .min(10, 'Mesajınız en az 10 karakter olmalıdır')
    .max(1000, 'Mesajınız en fazla 1000 karakter olabilir'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
