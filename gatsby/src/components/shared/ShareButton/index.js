import React from 'react';
import { useSiteMetadata } from '../../../hooks/useSiteMetadata';
import objectToGetParams from '../../../utils/objectToGetParams';

function pinterestLink({ url, media, description }) {
  // assert(url, 'pinterest.url');
  // assert(media, 'pinterest.media');

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

  function clickHandle() {
    console.log(pinterestLink(shareContent));
  }

  return (
    <a
      tabIndex={0}
      onKeyPress={(event) => event.key === 'Enter' && clickHandle}
      role="button"
      onClick={clickHandle}
    >
      Pin me
    </a>
  );
}
