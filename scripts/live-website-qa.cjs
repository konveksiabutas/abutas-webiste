/* eslint-disable */
const fs = require('fs');
const vm = require('vm');

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';

async function getWafClearance(origin) {
  const res1 = await fetch(origin + '/', { headers: { 'User-Agent': UA } });
  const html1 = await res1.text();

  let submitUrl = '';
  const mockDoc = {
    createElement: (tag) => {
      const el = { tag, children: [] };
      if (tag === 'form') {
        el.appendChild = (child) => el.children.push(child);
        el.submit = () => {
          const params = new URLSearchParams();
          for (const child of el.children) {
            if (child.name) params.append(child.name, child.value);
          }
          submitUrl = origin + el.action + '?' + params.toString();
        };
      }
      return el;
    },
    getElementById: () => ({ appendChild: () => {} }),
    addEventListener: (event, handler) => handler()
  };

  const mockNav = {
    userAgent: UA,
    appVersion: UA,
    plugins: [{ name: 'Chrome PDF Plugin' }],
    mimeTypes: [{ type: 'application/pdf' }],
    language: 'en-US',
    languages: ['en-US', 'en']
  };

  const mockWindow = {
    document: mockDoc,
    navigator: mockNav,
    outerHeight: 1080,
    outerWidth: 1920,
    addEventListener: (event, handler) => handler(),
    setTimeout: (fn) => fn()
  };

  const sandbox = {
    window: mockWindow,
    document: mockDoc,
    navigator: mockNav,
    setTimeout: (fn) => fn(),
    parseInt: parseInt,
    Object: Object,
    PluginArray: function() {},
    Plugin: function() {},
    MimeTypeArray: function() {},
    MimeType: function() {},
    URLSearchParams: URLSearchParams,
    XMLHttpRequest: function() {},
    console: console
  };
  sandbox.PluginArray.prototype = mockNav.plugins.__proto__ = {};
  sandbox.Plugin.prototype = mockNav.plugins[0].__proto__ = {};
  sandbox.MimeTypeArray.prototype = mockNav.mimeTypes.__proto__ = {};
  sandbox.MimeType.prototype = mockNav.mimeTypes[0].__proto__ = {};

  const scripts = html1.match(/<script>([\s\S]*?)<\/script>[\s\S]*?<script>([\s\S]*?)<\/script>/i);
  if (!scripts) {
    // No WAF challenge, already cleared
    return res1.headers.get('set-cookie') || '';
  }

  vm.createContext(sandbox);
  try {
    vm.runInContext(scripts[2], sandbox);
  } catch (e) {
    // Ignore sandbox DOM quirks
  }

  if (submitUrl) {
    const res2 = await fetch(submitUrl, {
      headers: { 'User-Agent': UA, 'Referer': origin + '/' },
      redirect: 'manual'
    });
    return res2.headers.get('set-cookie') || '';
  }
  return '';
}

async function runAudit() {
  console.log('=== STARTING ABUTAS LIVE WEBSITE QA AUDIT ===\n');

  console.log('Obtaining WAF clearance for abutas.com...');
  const cookiePublic = await getWafClearance('https://abutas.com');
  console.log('Public Cookie:', cookiePublic ? 'Obtained' : 'None needed');

  console.log('Obtaining WAF clearance for admin.abutas.com...');
  const cookieAdmin = await getWafClearance('https://admin.abutas.com');
  console.log('Admin Cookie:', cookieAdmin ? 'Obtained' : 'None needed');

  const results = [];

  // Helper fetcher
  async function checkUrl(url, cookie, options = {}) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': UA,
          'Cookie': cookie || '',
          ...options.headers
        },
        redirect: options.redirect || 'follow'
      });
      const text = await res.text();
      return {
        url,
        status: res.status,
        headers: Object.fromEntries(res.headers.entries()),
        text,
        length: text.length
      };
    } catch (e) {
      return { url, error: e.message };
    }
  }

  // 1. PUBLIC PAGES AUDIT
  const publicPages = [
    { name: 'Beranda', path: '/' },
    { name: 'Konveksi Tas', path: '/konveksi-tas/' },
    { name: 'Konveksi Pakaian', path: '/konveksi-pakaian/' },
    { name: 'Tentang Kami', path: '/tentang-kami/' },
    { name: 'Cara Pesan', path: '/cara-pesan/' },
    { name: 'Kontak', path: '/kontak/' },
    { name: 'Artikel', path: '/artikel/' },
    { name: 'Portofolio', path: '/portofolio/' }
  ];

  console.log('\n--- 1. AUDITING PUBLIC PAGES ---');
  for (const page of publicPages) {
    const fullUrl = `https://abutas.com${page.path}`;
    const data = await checkUrl(fullUrl, cookiePublic);
    if (data.error) {
      console.log(`[FAIL] ${page.name} (${fullUrl}): ERROR ${data.error}`);
      results.push({ page: page.name, url: fullUrl, status: 'FAIL', details: data.error });
      continue;
    }

    const titleMatch = data.text.match(/<title>([^<]+)<\/title>/i)?.[1] || '';
    const h1Matches = [...data.text.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    const canonicalMatch = data.text.match(/<link[^>]+rel=['"]canonical['"][^>]+href=['"]([^'"]+)['"]/i)?.[1] || '';
    const robotsMatch = data.text.match(/<meta[^>]+name=['"]robots['"][^>]+content=['"]([^'"]+)['"]/i)?.[1] || '';

    const hasH1 = h1Matches.length === 1;
    const isCanonicalValid = canonicalMatch === fullUrl;
    const statusPass = data.status === 200 && hasH1 && isCanonicalValid;

    console.log(`[${statusPass ? 'PASS' : 'WARN'}] ${page.name} (${fullUrl})`);
    console.log(`  - HTTP Status: ${data.status}`);
    console.log(`  - Title: ${titleMatch}`);
    console.log(`  - H1 (${h1Matches.length}): ${h1Matches[0] || 'NONE'}`);
    console.log(`  - Canonical: ${canonicalMatch} (${isCanonicalValid ? 'MATCH' : 'MISMATCH'})`);
    console.log(`  - Robots: ${robotsMatch || 'default (index, follow)'}`);

    results.push({
      page: page.name,
      url: fullUrl,
      status: statusPass ? 'PASS' : 'FAIL',
      httpStatus: data.status,
      title: titleMatch,
      h1: h1Matches[0],
      canonical: canonicalMatch,
      robots: robotsMatch
    });
  }

  // 2. SEO & ASSETS AUDIT
  console.log('\n--- 2. AUDITING SITEMAP & ROBOTS ---');
  const sitemapData = await checkUrl('https://abutas.com/sitemap.xml', cookiePublic);
  console.log(`Sitemap status: ${sitemapData.status}, length: ${sitemapData.length}`);
  const sitemapUrls = [...(sitemapData.text?.matchAll(/<loc>([^<]+)<\/loc>/g) || [])].map(m => m[1]);
  console.log(`Sitemap URL count: ${sitemapUrls.length}`);
  sitemapUrls.forEach(u => console.log('  loc:', u));

  const robotsData = await checkUrl('https://abutas.com/robots.txt', cookiePublic);
  console.log(`Robots.txt status: ${robotsData.status}, content:\n${robotsData.text}`);

  // 3. NEGATIVE & 404 ROUTING AUDIT
  console.log('\n--- 3. NEGATIVE & 404 ROUTING AUDIT ---');
  const random404 = await checkUrl('https://abutas.com/non-existent-page-test-404/', cookiePublic);
  console.log(`Random 404 URL status: ${random404.status}`);
  const has404Text = random404.text?.includes('Halaman Tidak Ditemukan') || random404.text?.includes('404');
  console.log(`Custom 404 HTML rendered: ${has404Text}`);

  const placeholderArtikel = await checkUrl('https://abutas.com/artikel/_placeholder/', cookiePublic);
  console.log(`Placeholder artikel status: ${placeholderArtikel.status}`);

  const placeholderPorto = await checkUrl('https://abutas.com/portofolio/_placeholder/', cookiePublic);
  console.log(`Placeholder portofolio status: ${placeholderPorto.status}`);

  // 4. ASSETS AUDIT
  console.log('\n--- 4. STATIC ASSETS AUDIT ---');
  const heroImg = await checkUrl('https://abutas.com/images/hero-showcase.jpg', cookiePublic);
  console.log(`Hero image status: ${heroImg.status}, content-type: ${heroImg.headers['content-type']}, length: ${heroImg.length}`);

  const bagImg = await checkUrl('https://abutas.com/images/service-bag-detail.jpg', cookiePublic);
  console.log(`Bag image status: ${bagImg.status}, content-type: ${bagImg.headers['content-type']}, length: ${bagImg.length}`);

  // Check CSS and JS referenced in homepage
  const homeData = await checkUrl('https://abutas.com/', cookiePublic);
  const cssMatches = [...homeData.text.matchAll(/href="(\/_next\/static\/css\/[^"]+)"/g)].map(m => m[1]);
  console.log(`Found ${cssMatches.length} Next.js CSS links:`);
  for (const cssUrl of cssMatches) {
    const cssRes = await checkUrl(`https://abutas.com${cssUrl}`, cookiePublic);
    console.log(`  CSS ${cssUrl}: HTTP ${cssRes.status} (${cssRes.length} bytes)`);
  }

  // 5. ADMIN STUDIO AUDIT
  console.log('\n--- 5. ADMIN SUBDOMAIN AUDIT ---');
  const adminHome = await checkUrl('https://admin.abutas.com/', cookieAdmin);
  console.log(`Admin homepage status: ${adminHome.status}, title: ${adminHome.text?.match(/<title>([^<]+)<\/title>/i)?.[1]}`);
  const adminHasStudio = adminHome.text?.includes('sanity') || adminHome.text?.includes('Sanity Studio');
  console.log(`Admin contains Sanity Studio SPA bundle: ${adminHasStudio}`);

  const adminDeepRoute = await checkUrl('https://admin.abutas.com/structure/artikel', cookieAdmin);
  console.log(`Admin deep route (/structure/artikel) status: ${adminDeepRoute.status}, SPA fallback active: ${adminDeepRoute.text?.includes('id="sanity"')}`);

  // Save full QA output to json
  fs.writeFileSync('scripts/qa-report-data.json', JSON.stringify({ results, sitemapUrls, sitemapStatus: sitemapData.status, robotsContent: robotsData.text, random404Status: random404.status, placeholderArtikelStatus: placeholderArtikel.status, heroImgStatus: heroImg.status, adminStatus: adminHome.status, adminHasStudio }, null, 2));
  console.log('\n=== LIVE AUDIT DATA EXTRACTION COMPLETE ===');
}

runAudit();

