import React from 'react';
import WorkDetail from '../shared/WorkDetail';
import CardGrid from '../shared/CardGrid';
import CardGridItem from '../shared/CardGrid/CardGridItem';
import { RelatedWorkCards, WorkPageStyles } from './Styles';

export default function WorkPage({
  category,
  description,
  images,
  name,
  relatedWorks,
  relatedWorksHeader,
  series,
}) {
  return (
    <WorkPageStyles>
      <WorkDetail
        category={category}
        description={description}
        images={images}
        name={name}
      />
      {relatedWorks.nodes.length ? (
        <RelatedWorkCards>
          <h3>{relatedWorksHeader}</h3>
          <CardGrid>
            {relatedWorks.nodes.map((work) => (
              <CardGridItem
                imageData={work.images[0]}
                key={work.id}
                link={`../${!series ? '../' : ''}${work.slug.current}`}
                name={work.name}
              />
            ))}
          </CardGrid>
        </RelatedWorkCards>
      ) : null}
    </WorkPageStyles>
  );
}
