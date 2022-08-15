import React from 'react';
import { useSiteMetadata } from '../../../hooks/useSiteMetadata';

export const SEO = ({ children, description, image, pathname, title }) => {
  const {
    description: defaultDescription,
    title: defaultTitle,
    twitter,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    description: description || defaultDescription,
    image: image || '/meta_image.jpg',
    title: title || defaultTitle,
    twitter,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitter} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta propery="og:site_name" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      {children}
    </>
  );
};
