// Utilidad para generar sitemap dinámicamente
export const generateSitemap = (carpets = []) => {
  const baseUrl = 'https://www.luzerugs.com.ar/';
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

  return [...staticUrls, ...carpetUrls];
};

// Función para generar el XML del sitemap
export const generateSitemapXML = (carpets = []) => {
  const urls = generateSitemap(carpets);

  const xmlUrls = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
};

// Función para generar sitemap por categorías (si se implementan)
export const generateCategorySitemap = (categories = []) => {
  const baseUrl = 'https://www.luzerugs.com.ar/';
  const currentDate = new Date().toISOString().split('T')[0];

  return categories.map(category => ({
    loc: `${baseUrl}/category/${encodeURIComponent(category)}`,
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.8'
  }));
};
