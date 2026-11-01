/**
 * ABUTAS.COM — Sanity GROQ Queries
 *
 * Query GROQ yang difilter ketat untuk hanya mengambil dokumen yang berstatus "published"
 * dan mengecualikan dokumen draft (_id in path("drafts.**")).
 */

/**
 * Mengambil seluruh artikel yang telah dipublikasikan secara resmi.
 */
export const publishedArticlesQuery = `
  *[_type == "article" && contentStatus == "published" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    featuredImage,
    category,
    body,
    author,
    publishedAt,
    seoTitle,
    seoDescription,
    canonicalUrl,
    contentStatus
  }
`;

/**
 * Mengambil satu artikel berdasarkan slug yang telah dipublikasikan.
 */
export const articleBySlugQuery = `
  *[_type == "article" && slug.current == $slug && contentStatus == "published" && !(_id in path("drafts.**"))][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    featuredImage,
    category,
    body,
    author,
    publishedAt,
    seoTitle,
    seoDescription,
    canonicalUrl,
    contentStatus
  }
`;

/**
 * Mengambil seluruh portofolio yang telah disetujui publikasinya.
 */
export const publishedPortfolioQuery = `
  *[_type == "portfolio" && contentStatus == "published" && clientPermissionReleased == true && !(_id in path("drafts.**"))] | order(year desc) {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    category,
    productType,
    description,
    materials,
    brandingTechnique,
    gallery,
    year,
    clientInfo,
    clientPermissionReleased,
    seoTitle,
    seoDescription,
    contentStatus
  }
`;

/**
 * Mengambil satu portofolio berdasarkan slug yang telah dipublikasikan.
 */
export const portfolioBySlugQuery = `
  *[_type == "portfolio" && slug.current == $slug && contentStatus == "published" && clientPermissionReleased == true && !(_id in path("drafts.**"))][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    category,
    productType,
    description,
    materials,
    brandingTechnique,
    gallery,
    year,
    clientInfo,
    clientPermissionReleased,
    seoTitle,
    seoDescription,
    contentStatus
  }
`;

/**
 * Mengambil pengaturan situs dan data profil bisnis.
 */
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id,
    brandName,
    tagline,
    description,
    whatsappNumber,
    whatsappVerified,
    officialEmail,
    emailVerified,
    businessAddress,
    addressVerified,
    socialLinks
  }
`;
