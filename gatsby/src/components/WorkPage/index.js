import React from 'react';
import WorkDetail from '../shared/WorkDetail';
import CardGrid from '../shared/CardGrid';
import CardGridItem from '../shared/CardGrid/CardGridItem';
import { RelatedWorkCards, WorkPageStyles } from './Styles';

export default function WorkPage({
  category,
  description,
  forSale,
  images,
  name,
  relatedWorks,
  relatedWorksHeader,
  series,
  storeUrl,
}) {
  return (
    <WorkPageStyles>
      <WorkDetail
        category={category}
        description={description}
        forSale={forSale}
        images={images}
        name={name}
        storeUrl={storeUrl}
      />
      {relatedWorks.nodes.length > 0 && (
        <RelatedWorkCards>
          <h3>{relatedWorksHeader}</h3>
          <CardGrid>
            {relatedWorks.nodes.map((work) => (
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
