import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://jishnu0712.github.io/myPortfolio';
const DEFAULT_TITLE = 'Jishnu Dev Roy — Backend Software Engineer';
const DEFAULT_DESCRIPTION =
  'Backend Software Engineer specializing in scalable systems, distributed services, crypto payments, PostgreSQL, Redis, and AWS.';
const DEFAULT_IMAGE = `${SITE_URL}/img/myImg.jpeg`;

export default function SEO({ title, description, path = '/' }) {
  const pageTitle = title ? `${title} | Jishnu Dev Roy` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:site_name" content="Jishnu Dev Roy" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  );
}
