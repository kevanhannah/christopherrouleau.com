import React from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
import Badge from '../Badge';
import Gallery from '../Gallery';

const WorkDetailStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;
  align-items: start;
`;

const SingleItemInformationPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const SingleItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5em;
`;

const ItemTitle = styled.h2`
  font-size: 2.25em;
  font-weight: 700;
  margin: 0;
`;

export default function WorkDetail({
  category,
  description,
  images,
  name,
  pageType,
}) {
  return (
    <WorkDetailStyles>
      <SingleItemInformationPanel>
        <SingleItemHeader>
          <ItemTitle>{name}</ItemTitle>
          <Badge category={category} pageType={pageType} />
        </SingleItemHeader>
        <div>
          <PortableText value={description} />
        </div>
      </SingleItemInformationPanel>
      <Gallery images={images} />
    </WorkDetailStyles>
  );
}
