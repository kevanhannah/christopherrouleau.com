import React from 'react';
import SingleItemFeature from '../shared/SingleItemFeature';

export default function SingleItemPage({
  category,
  description,
  images,
  name,
}) {
  return (
    <main>
      <SingleItemFeature
        category={category}
        description={description}
        images={images}
        name={name}
      />
    </main>
  );
}
