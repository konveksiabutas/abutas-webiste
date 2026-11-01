/**
 * ABUTAS.COM — Sanity CMS Data Types
 *
 * Tipe data TypeScript untuk konten yang diambil dari Sanity CMS.
 */

export interface SanitySlug {
  current: string;
}

export interface SanityImage {
  _type?: "image";
  asset: {
    _ref: string;
    _type?: "reference";
    url?: string;
  };
  alt?: string;
  caption?: string;
}

export interface PortableTextChild {
  _type?: string;
  text?: string;
  [key: string]: unknown;
}

export interface PortableTextBlock {
  _type?: string;
  style?: string;
  children?: PortableTextChild[];
  [key: string]: unknown;
}

export interface SanityArticle {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  slug: SanitySlug | string;
  excerpt: string;
  featuredImage?: SanityImage;
  category: string;
  body?: PortableTextBlock[];
  author?: string;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  contentStatus: "draft" | "published";
}

export interface SanityPortfolio {
  _id: string;
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  slug: SanitySlug | string;
  category: "tas" | "pakaian";
  productType: string;
  description: string;
  materials: string;
  brandingTechnique: string;
  gallery?: SanityImage[];
  year?: string;
  clientInfo?: string;
  clientPermissionReleased?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  contentStatus: "draft" | "published";
}

export interface SanitySocialLink {
  platform: string;
  url: string;
}

export interface SanitySiteSettings {
  _id?: string;
  brandName: string;
  tagline?: string;
  description?: string;
  whatsappNumber?: string;
  whatsappVerified?: boolean;
  officialEmail?: string;
  emailVerified?: boolean;
  businessAddress?: string;
  addressVerified?: boolean;
  socialLinks?: SanitySocialLink[];
}
