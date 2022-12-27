import React from 'react';
import { useSiteMetadata } from '../../../utils/useSiteMetadata';
import objectToGetParams from '../../../utils/objectToGetParams';
import { Pinterest } from './Icons';
import { ShareButtonContent, ShareButtonStyles } from './Styles';

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
    <ShareButtonStyles
      href={pinterestLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Save to Pinterest"
    >
      <ShareButtonContent>
        <Pinterest />
        <span>Save</span>
      </ShareButtonContent>
    </ShareButtonStyles>
  );
}
