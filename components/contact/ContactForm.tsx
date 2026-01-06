'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { siteConfig } from '@/data/siteConfig';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create WhatsApp message
      const message = `Merhaba,

*İletişim Formu Mesajı*

*Ad Soyad:* ${data.firstName} ${data.lastName}
*Telefon:* ${data.phone}

*Mesaj:*
${data.message}`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Redirect to WhatsApp
      const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      setIsSuccess(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        İletişim Formu
      </h2>

      {isSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-green-800 font-medium">
              WhatsApp'a yönlendiriliyorsunuz!
            </p>
            <p className="text-green-700 text-sm mt-1">
              Mesajınızı WhatsApp üzerinden gönderebilirsiniz.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-base font-medium text-gray-700 mb-2"
          >
            Ad <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            {...register('firstName')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors ${
              errors.firstName
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300 bg-white'
            }`}
            placeholder="Adınız"
          />
          {errors.firstName && (
            <p className="mt-2 text-sm text-red-600">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="block text-base font-medium text-gray-700 mb-2"
          >
            Soyad <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            {...register('lastName')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors ${
              errors.lastName
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300 bg-white'
            }`}
            placeholder="Soyadınız"
          />
          {errors.lastName && (
            <p className="mt-2 text-sm text-red-600">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-base font-medium text-gray-700 mb-2"
          >
            Telefon <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors ${
              errors.phone
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300 bg-white'
            }`}
            placeholder="0555 123 4567"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-base font-medium text-gray-700 mb-2"
          >
            Mesajınız <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none ${
              errors.message
                ? 'border-red-500 bg-red-50'
                : 'border-gray-300 bg-white'
            }`}
            placeholder="Mesajınızı buraya yazın..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
          icon={Send}
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
        </Button>
      </form>
    </div>
  );
}
