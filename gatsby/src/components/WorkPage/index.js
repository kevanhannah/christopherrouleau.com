import React from 'react';
import WorkDetail from '../shared/WorkDetail';
import CardGrid from '../shared/CardGrid';
import CardGridItem from '../shared/CardGrid/CardGridItem';
import { RelatedWorkCards, WorkPageStyles } from './Styles';
import ShareButton from '../shared/ShareButton';

export default function WorkPage({
  category,
  description,
  excerpt,
  forSale,
  images,
  metaDescription,
  metaImageURL,
  name,
  pathname,
  pageType,
  relatedItems,
  relatedItemsHeader,
  releaseDate,
  series,
  storeUrl,
}) {
  const year = new Date(releaseDate).getFullYear();

  return (
    <WorkPageStyles>
      <WorkDetail
        category={category}
        description={description}
        excerpt={excerpt}
        forSale={forSale}
        images={images}
        name={name}
        pageType={pageType}
        series={series}
        storeUrl={storeUrl}
        year={year}
      />
      <ShareButton
        description={metaDescription}
        image={metaImageURL}
        pathname={pathname}
      />
      {relatedItems.length > 0 && (
        <RelatedWorkCards>
          <h3>{relatedItemsHeader}</h3>
          <CardGrid>
            {relatedItems.map((work) => (
              <CardGridItem
                imageData={work.images[0]}
                key={work.id}
                link={`../../${series ? `../${series.slug.current}/` : ''}${
                  work.slug.current
                }`}
                name={work.name}
              />
            ))}
          </CardGrid>
        </RelatedWorkCards>
      )}
    </WorkPageStyles>
  );
}
