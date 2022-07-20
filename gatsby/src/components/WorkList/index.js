import React from 'react';
import { WorkListStyles } from './Styles';
import CardGrid from '../shared/CardGrid';
import CardGridItem from '../shared/CardGrid/CardGridItem';

export default function WorkList({ title, works }) {
  return (
    <WorkListStyles>
      <h2 style={{ fontSize: '2em' }}>{title}</h2>
      <CardGrid>
        {works.map((work) => (
          <CardGridItem
            imageData={work.images}
            key={work.id}
            link={`../../${work.slug.current}`}
            name={work.name}
          />
        ))}
      </CardGrid>
    </WorkListStyles>
  );
}
