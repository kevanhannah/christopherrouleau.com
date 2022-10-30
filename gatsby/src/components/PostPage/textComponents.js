import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import React from 'react';
import { TextLink } from '../shared/Buttons';

export default {
  marks: {
    annotationLinkExternal: ({ children, value }) => {
      const rel = value.newWindow ? 'noreferrer noopener' : undefined;

      return (
        <TextLink link={value.url} rel={rel}>
          {children}
        </TextLink>
      );
    },
    annotationLinkInternal: ({ children, value }) => {
      const linkValue = value.reference.series
        ? `${value.reference.series.slug.current}/${value.reference.slug.current}`
        : `${value.reference.slug.current}`;
      return (
        <TextLink internal link={`../../../${linkValue}`}>
          {children}
        </TextLink>
      );
    },
  },
  types: {
    blockImage: ({ value }) => {
      const imageData = getGatsbyImageData(
        value?.image?.asset?.id,
        { width: 800 },
        {
          projectId: process.env.GATSBY_SANITY_PROJECT_ID,
          dataset: process.env.GATSBY_SANITY_DATASET,
        }
      );
      console.log(value);
      return <GatsbyImage image={imageData} alt={value.alt} />;
    },
  },
};
