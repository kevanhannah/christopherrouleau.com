import React from 'react';
import WorkGrid from '../WorkGrid';
import WorkItem from '../WorkItem';

export default function RelatedItems({ relatedWorks }) {
  return (
    <>
      <h2>More in this series</h2>
      <WorkGrid>
        {relatedWorks.nodes.map((relatedWork) => (
          <WorkItem
            imageData={relatedWork.images[0]}
            key={relatedWork.id}
            link={`../../${relatedWork.slug.current}`}
            name={relatedWork.name}
          />
        ))}
      </WorkGrid>
    </>
  );
}
