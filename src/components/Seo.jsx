// src/components/Seo.jsx
import { Helmet } from 'react-helmet';

const Seo = ({
  title = 'Luzé Rugs | Alfombras artesanales hechas a mano',
  description = 'Alfombras tufting únicas creadas artesanalmente por Luzé. Diseño textil contemporáneo, calidad y creatividad.',
  url = 'https://luzerugs.com.ar',
  image = 'https://luzerugs.vercel.app/logo.png',
  keywords = 'alfombras artesanales, tufting, decoración, luzé, alfombras modernas, arte textil',
  noIndex = false,
}) => {
  return (
    <Helmet>
      {/* Título y descripción */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Luzé Rugs" />

      {/* Robots: index o noindex */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph (Facebook, WhatsApp, etc.) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
