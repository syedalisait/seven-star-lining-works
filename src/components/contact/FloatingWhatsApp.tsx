'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppLink();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl md:h-16 md:w-16 animate-in fade-in slide-in-from-bottom-4 duration-500"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />

      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
