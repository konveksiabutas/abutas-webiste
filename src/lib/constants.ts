/**
 * ABUTAS.COM — Official Business Constants & Contacts
 *
 * Source of truth fallback values aligned with docs/business-facts.md.
 * In production builds, Sanity siteSettings can override these values
 * when verification locks are satisfied.
 */

export const BUSINESS_CONFIG = {
  brandName: "ABUTAS",
  tagline: "Creative Manufacturing Studio",
  domain: "https://abutas.com",
  canonicalUrl: "https://abutas.com",

  // Official Verified WhatsApp Business details (Confirmed by owner 2026-11-03)
  whatsapp: {
    display: "+62 812-8568-9538",
    numeric: "6281285689538",
    directUrl: "https://wa.me/6281285689538",
    verified: true,
  },

  // Official Email Mailbox (Prepared for cPanel activation)
  email: {
    address: "info@abutas.com",
    verified: false,
  },
} as const;

/**
 * Formats a numeric international string (e.g. 6281285689538) into human readable "+62 812-8568-9538".
 */
export function formatWhatsAppDisplay(numeric: string): string {
  const digits = numeric.replace(/\D/g, "");
  if (digits.startsWith("62") && digits.length >= 11) {
    const part1 = digits.slice(2, 5);
    const part2 = digits.slice(5, 9);
    const part3 = digits.slice(9);
    return `+62 ${part1}-${part2}-${part3}`;
  }
  return digits.startsWith("+") ? digits : `+${digits}`;
}

/**
 * Helper to generate official WhatsApp link with pre-filled message text.
 */
export function getWhatsAppConsultationUrl(customText?: string, numeric: string = BUSINESS_CONFIG.whatsapp.numeric): string {
  const defaultText = "Halo ABUTAS, saya ingin konsultasi mengenai produksi konveksi custom.";
  const text = customText?.trim() || defaultText;
  return `https://wa.me/${numeric}?text=${encodeURIComponent(text)}`;
}

