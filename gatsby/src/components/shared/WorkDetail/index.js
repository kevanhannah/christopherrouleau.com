import React from 'react';
import { PortableText } from '@portabletext/react';
import Badge from '../Badge';
import { PrimaryButton } from '../Buttons';
import Gallery from '../Gallery';
import { ItemTitle, WorkDetailStyles, WorkInformationPanel } from './Styles';

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
        <Badge category={category} pageType={pageType} />
        <ItemTitle>{name}</ItemTitle>
        <div>
          <PortableText value={description} />
        </div>
        {forSale && storeUrl ? (
          <PrimaryButton link={storeUrl} text="Buy in store" />
        ) : null}
      </WorkInformationPanel>
      <Gallery images={images} />
    </WorkDetailStyles>
  );
}
