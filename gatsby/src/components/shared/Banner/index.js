import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { BannerStyles } from './Styles';

export default function Banner() {
  const {
    sanitySettings: {
      bannerActive: active,
      bannerLink: link,
      bannerText: text,
    },
  } = useStaticQuery(graphql`
    query {
      sanitySettings {
        bannerActive
        bannerLink
        bannerText
      }
    }
  `);

  if (!active) {
    return null;
  }

  return (
    <BannerStyles role="banner">
      <a href={link}>{text}</a>
    </BannerStyles>
  );
}
