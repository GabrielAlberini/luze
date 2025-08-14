import { getCarpets } from '../src/services/carpetService';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Obtener las alfombras para generar URLs dinámicas
    const carpets = await getCarpets();

    const baseUrl = 'https://luzerugs.com.ar/';
    const currentDate = new Date().toISOString().split('T')[0];

    // URLs estáticas principales
    const staticUrls = [
      {
        loc: `${baseUrl}/`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: '1.0'
      },
      {
        loc: `${baseUrl}/login`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: '0.3'
      }
    ];

    // URLs dinámicas para cada alfombra (si se implementan páginas individuales)
    const carpetUrls = carpets.map(carpet => ({
      loc: `${baseUrl}/carpet/${carpet.id}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    }));

    const allUrls = [...staticUrls, ...carpetUrls];

    // Generar XML
    const xmlUrls = allUrls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

    // Configurar headers para XML
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600'); // Cache por 1 hora
    res.status(200).send(sitemap);

  } catch (error) {
    console.error('Error generating sitemap:', error);

    // Fallback a sitemap estático en caso de error
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://luzerugs.com.ar/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(fallbackSitemap);
  }
}
