/**
 * Core type definitions for ABUTAS.COM.
 * In accordance with Master Blueprint v3.0, unverified claims remain UNVERIFIED
 * until explicit confirmation from business owners.
 */

export type VerificationStatus = "UNVERIFIED" | "APPROVED" | "PUBLISHED";

export interface BusinessFacts {
  brandName: string;
  legalEntity?: string;
  phone?: string;
  email?: string;
  address?: string;
  primaryLocationCity: string;
  whatsappNumber?: string;
  status: VerificationStatus;
}

export type ServicePillarId = "konveksi-tas" | "konveksi-pakaian";

export interface ServicePillar {
  id: ServicePillarId;
  title: string;
  slug: string;
  shortDescription: string;
  intentSummary: string;
  publishStatus: VerificationStatus;
}

export interface ServiceCategory {
  id: string;
  pillarId: ServicePillarId;
  name: string;
  slug: string;
  description: string;
  publishStatus: VerificationStatus;
}

export interface RfqLeadInput {
  name: string;
  whatsapp: string;
  servicePillar: ServicePillarId;
  productName: string;
  estimatedQuantity?: number;
  notes?: string;
  organization?: string;
  email?: string;
  targetDeliveryDate?: string;
  honeypot?: string;
}
