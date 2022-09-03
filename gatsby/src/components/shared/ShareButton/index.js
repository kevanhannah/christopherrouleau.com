import React from 'react';
import { useSiteMetadata } from '../../../hooks/useSiteMetadata';
import objectToGetParams from '../../../utils/objectToGetParams';

function createPinterestLink({ url, media, description }) {
  return `https://pinterest.com/pin/create/button/${objectToGetParams({
    url,
    media,
    description,
  })}`;
}

export default function ShareButton({ description, image, pathname }) {
  const { description: defaultDescription, siteUrl } = useSiteMetadata();
  const shareContent = {
    description: description || defaultDescription,
    media: image || '/meta_image.jpg',
    url: `${siteUrl}${pathname || ``}`,
  };
  const pinterestLink = createPinterestLink(shareContent);

  return (
    <a href={pinterestLink} target="_blank" rel="noreferrer">
      Pin me
    </a>
  );
}
