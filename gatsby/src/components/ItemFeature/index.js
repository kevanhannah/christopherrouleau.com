import React from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
import Gallery from '../shared/Gallery';
import Badge from '../shared/Badge';

const ItemFeaturePageHeader = styled.h1`
  margin-bottom: 4px;
  max-width: 50%;
`;

const ItemFeatureMainArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 16px 0 64px;
`;

const ItemFeatureDescriptionStyles = styled.div`
  margin-right: 60px;

  ul,
  ol {
    margin-left: 24px;
  }

  & .seriesExcerpt {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid var(--midGrey);

    h2 {
      font-size: 1.2em;
      font-weight: 700;
    }
  }
`;

export default function ItemFeature({ item, pageType, series }) {
  // If the item has a category set, use it, otherwise get it from its parent series
  const category = item.category ? item.category : item.series.category;

  return (
    <>
      <ItemFeaturePageHeader>{item.name}</ItemFeaturePageHeader>
      <Badge category={category} pageType={pageType} />
      <ItemFeatureMainArea>
        <ItemFeatureDescriptionStyles>
          <PortableText value={item.description} />
          {series && (
            <div className="seriesExcerpt">
              <h2>Part of {series.name}</h2>
              <PortableText value={series.excerpt} />
            </div>
          )}
        </ItemFeatureDescriptionStyles>
        <Gallery images={item.images} />
      </ItemFeatureMainArea>
    </>
  );
}
