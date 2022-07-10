import React from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
import Badge from '../Badge';
import Gallery from '../Gallery';

const SingleItemFeatureStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
  align-items: start;
`;

const SingleItemInformationPanel = styled.div`
  /* max-width: 50%; */
`;

const SingleItemHeader = styled.h2`
  font-size: 2.25em;
  font-weight: 700;
  margin: 0;
`;

export default function SingleItemFeature({
  category,
  description,
  images,
  name,
  pageType,
}) {
  return (
    <SingleItemFeatureStyles>
      <SingleItemInformationPanel>
        <SingleItemHeader>{name}</SingleItemHeader>
        <Badge category={category} pageType={pageType} />
        <PortableText value={description} />
      </SingleItemInformationPanel>
      <Gallery images={images} />
    </SingleItemFeatureStyles>
  );
}
