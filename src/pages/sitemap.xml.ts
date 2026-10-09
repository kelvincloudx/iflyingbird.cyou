import type { APIRoute } from 'astro';
import { ARTICLES } from '../data/articles';

export const GET: APIRoute = () => {
  const siteUrl = 'https://iflyingbird.cyou';
  
  const staticPages = [
    '',
    '/plans/',
    '/journey/',
    '/clients/',
    '/network/',
    '/academy/',
    '/faq/'
  ];

  const articlePages = ARTICLES.map(a => a.url);

  const allUrls = [...staticPages, ...articlePages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(path => {
  const loc = `${siteUrl}${path.startsWith('/') ? path : '/' + path}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>2026-10-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : path.startsWith('/academy/') ? '0.8' : '0.9'}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
