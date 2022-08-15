import React from 'react';
import { PostListStyles } from './Styles';
import CardGrid from '../shared/CardGrid';
import CardGridItem from '../shared/CardGrid/CardGridItem';

export default function PostList({ main, title, posts }) {
  return (
    <PostListStyles>
      <h2>{title}</h2>
      <CardGrid>
        {posts.nodes.map((post) => {
          const postYear = new Date(post.publishedAt).getFullYear();

          return (
            <CardGridItem
              date={post.publishedAt}
              imageData={post.heroImage}
              key={post.id}
              link={`../${main ? 'blog/' : ''}${postYear}/${post.slug.current}`}
              name={post.title}
            />
          );
        })}
      </CardGrid>
    </PostListStyles>
  );
}
