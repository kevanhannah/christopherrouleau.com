import React from 'react';
import WorkGrid from '../../WorkGrid';
import WorkItem from '../../WorkItem';

export default function PostList({ main, title, posts }) {
  return (
    <main>
      <h2 style={{ fontSize: '2em' }}>{title}</h2>
      <WorkGrid>
        {posts.nodes.map((post) => (
          <WorkItem
            date={post.publishedAt}
            imageData={post.heroImage}
            key={post.id}
            link={`../${main ? 'blog/' : ''}${post.slug.current}`}
            name={post.title}
          />
        ))}
      </WorkGrid>
    </main>
  );
}
