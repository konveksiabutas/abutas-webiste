/**
 * ABUTAS.COM — Sanity Schema Helper
 *
 * Lightweight, zero-dependency schema definition helpers for Sanity Studio.
 * Allows schema models to be typed and validated in Next.js without requiring
 * the heavy 200MB studio package in the frontend static export bundle.
 */

export interface ValidationRule {
  required: () => ValidationRule;
  max: (limit: number) => ValidationRule;
  min: (limit: number) => ValidationRule;
  custom: (fn: (value: unknown) => true | string | Promise<true | string>) => ValidationRule;
  regex?: (pattern: RegExp, options?: { name?: string; invert?: boolean }) => ValidationRule;
  error?: (message: string) => ValidationRule;
  warning?: (message: string) => ValidationRule;
  [key: string]: unknown;
}

export interface FieldDefinition {
  name: string;
  title: string;
  type: string;
  description?: string;
  initialValue?: unknown;
  readOnly?: boolean;
  rows?: number;
  options?: Record<string, unknown>;
  fields?: FieldDefinition[];
  of?: unknown[];
  validation?: (rule: ValidationRule) => unknown;
  [key: string]: unknown;
}

export interface TypeDefinition {
  name: string;
  title: string;
  type: string;
  description?: string;
  fields: FieldDefinition[];
  preview?: {
    select?: Record<string, string>;
    prepare?: (selection: Record<string, unknown>) => {
      title?: string;
      subtitle?: string;
      media?: unknown;
    };
  };
  [key: string]: unknown;
}

export function defineField<T extends FieldDefinition>(field: T): T {
  return field;
}

export function defineType<T extends TypeDefinition>(schema: T): T {
  return schema;
}
