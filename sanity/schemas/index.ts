/**
 * ABUTAS.COM — Sanity Schema Definitions Index
 *
 * Central export of all content models used by Sanity Studio.
 * - article: Model artikel & panduan teknis konveksi (B2B SEO)
 * - portfolio: Model portofolio proyek produksi tas & pakaian custom
 * - siteSettings: Model profil bisnis & identitas resmi
 */

import { article, ARTICLE_CATEGORIES } from "./article.ts";
import { portfolio } from "./portfolio.ts";
import { siteSettings } from "./siteSettings.ts";

export { article, ARTICLE_CATEGORIES, portfolio, siteSettings };

export const schemaTypes = [article, portfolio, siteSettings];
