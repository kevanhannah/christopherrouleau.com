import React from 'react';
import { PortableText } from '@portabletext/react';
import Badge from '../Badge';
import { PrimaryButton } from '../Buttons';
import Gallery from '../Gallery';
import {
  ItemTitle,
  WorkDetailsHeader,
  WorkDetailStyles,
  WorkInformationPanel,
} from './Styles';

export default function WorkDetail({
  category,
  description,
  forSale,
  images,
  name,
  pageType,
  storeUrl,
}) {
  return (
    <WorkDetailStyles>
      <WorkInformationPanel>
        <WorkDetailsHeader>
          <Badge category={category} pageType={pageType} />
          <ItemTitle>{name}</ItemTitle>
        </WorkDetailsHeader>
        <div>
          <PortableText value={description} />
        </div>
        {forSale && storeUrl && (
          <PrimaryButton link={storeUrl} text="Buy in store" />
        )}
      </WorkInformationPanel>
      <Gallery images={images} />
    </WorkDetailStyles>
  );
}
