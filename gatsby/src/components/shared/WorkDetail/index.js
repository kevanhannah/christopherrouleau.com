import React from 'react';
import { PortableText } from '@portabletext/react';
import Badge from '../Badge';
import Gallery from '../Gallery';
import { ItemTitle, WorkDetailStyles, WorkInformationPanel } from './Styles';

export default function WorkDetail({
  category,
  description,
  images,
  name,
  pageType,
}) {
  return (
    <WorkDetailStyles>
      <WorkInformationPanel>
        <Badge category={category} pageType={pageType} />
        <ItemTitle>{name}</ItemTitle>
        <div>
          <PortableText value={description} />
        </div>
      </WorkInformationPanel>
      <Gallery images={images} />
    </WorkDetailStyles>
  );
}
