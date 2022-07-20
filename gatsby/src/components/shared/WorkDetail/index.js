import React from 'react';
import { PortableText } from '@portabletext/react';
import Badge from '../Badge';
import Gallery from '../Gallery';
import {
  ItemTitle,
  SingleItemHeader,
  SingleItemInformationPanel,
  WorkDetailStyles,
} from './Styles';

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
