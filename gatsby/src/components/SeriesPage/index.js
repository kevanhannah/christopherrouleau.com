import React from 'react';
import styled from 'styled-components';
import SingleItemFeature from '../shared/SingleItemFeature';
import CardGrid from '../shared/CardGrid';
import CardGridItem from '../shared/CardGrid/CardGridItem';

const PageGrid = styled.main`
  display: grid;
  grid-template-rows: auto auto;
  gap: 3em;
  margin-bottom: 3em;
`;

const WorksList = styled.div`
  grid-column: 1 / span end;
`;

export default function SeriesPage({ series, works }) {
  return (
    <PageGrid>
      <SingleItemFeature
        category={series.category}
        description={series.description}
        images={[series.images]}
        name={series.name}
      />
      <WorksList>
        <h2>Works in this series</h2>
        <CardGrid>
          {works.nodes.map((work) => (
            <CardGridItem
              imageData={work.images[0]}
              key={work.id}
              link={`../${work.slug.current}`}
              name={work.name}
            />
          ))}
        </CardGrid>
      </WorksList>
    </PageGrid>
  );
}
