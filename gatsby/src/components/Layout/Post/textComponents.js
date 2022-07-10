import React from 'react';
import { TextLink } from '../../Buttons';

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
};
