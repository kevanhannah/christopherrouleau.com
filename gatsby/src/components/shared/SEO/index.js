import React from 'react';
import { useSiteMetadata } from '../../../hooks/useSiteMetadata';

export const SEO = ({ title, description, pathname, children }) => {
  const {
    description: defaultDescription,
    title: defaultTitle,
    siteUrl,
    twitter,
  } = useSiteMetadata();

  const seo = {
    description: description || defaultDescription,
    title: title || defaultTitle,
    url: `${siteUrl}${pathname || ``}`,
    twitter,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitter} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      {children}
    </>
  );
};
