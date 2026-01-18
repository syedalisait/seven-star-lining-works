import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  message,
  variant = 'outline',
  size = 'default',
  className = '',
  showIcon = true,
  children = 'WhatsApp Us',
}: WhatsAppButtonProps) {
  const whatsappUrl = getWhatsAppLink(message);

  return (
    <Button
      variant={variant}
      size={size}
      className={`border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800 hover:border-green-700 ${className}`}
      asChild
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        {showIcon && <MessageCircle className="mr-2 h-4 w-4" />}
        {children}
      </a>
    </Button>
  );
}
