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

  function openShareWindow(url) {
    window.open(
      url,
      'mywin',
      'left=20,top=20,width=1050,height=825,toolbar=1,resizable=0'
    );
    return false;
  }

  return (
    <button
      type="button"
      tabIndex={0}
      onClick={() => openShareWindow(pinterestLink)}
      onKeyPress={(event) =>
        event.key === 'Enter' && openShareWindow(pinterestLink)
      }
    >
      Pin me
    </button>
  );
}
