import React from 'react';
import CardGrid from '../shared/CardGrid';
import CardGridItem from '../shared/CardGrid/CardGridItem';

export default function RelatedItems({ relatedWorks }) {
  return (
    <>
      <h2>More in this series</h2>
      <CardGrid>
        {relatedWorks.nodes.map((relatedWork) => (
          <CardGridItem
            imageData={relatedWork.images[0]}
            key={relatedWork.id}
            link={`../../${relatedWork.slug.current}`}
            name={relatedWork.name}
          />
        ))}
      </CardGrid>
    </>
  );
}
