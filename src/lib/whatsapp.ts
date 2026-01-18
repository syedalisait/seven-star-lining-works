import { businessInfo } from '@/data/business-info';

/**
 * Generates a WhatsApp wa.me link with optional pre-filled message
 * @param message - Optional message to pre-fill in WhatsApp chat
 * @returns Complete wa.me URL
 */
export function getWhatsAppLink(message?: string): string {
  // Remove any non-numeric characters from phone number for wa.me format
  // Use whatsapp number if available, otherwise fall back to phone number
  const phoneNumber = (businessInfo.contact.whatsapp || businessInfo.contact.phone).replace(/\D/g, '');

  // Default message if none provided
  const defaultMessage = "Hi! I found your website and would like to inquire about your services.";
  const encodedMessage = encodeURIComponent(message || defaultMessage);

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Opens WhatsApp in a new window/tab
 * @param message - Optional message to pre-fill
 */
export function openWhatsApp(message?: string): void {
  const url = getWhatsAppLink(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Gets service-specific WhatsApp message
 * @param serviceName - Name of the service
 * @returns Pre-filled message for specific service
 */
export function getServiceWhatsAppMessage(serviceName: string): string {
  return `Hi Seven Star Lining Works! I'm interested in ${serviceName}. Can you provide more details?`;
}
