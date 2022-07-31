import React from 'react';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import { GatsbyImage } from 'gatsby-plugin-image';
import textComponents from './textComponents';
import {
  PostDateStyles,
  PostPageStyles,
  PostTitle,
  TextAreaStyles,
} from './styles';

export default function Post({ post }) {
  const postDate = format(new Date(`${post.publishedAt}`), 'MMMM d, yyyy');

  return (
    <main>
      <PostPageStyles>
        <GatsbyImage
          image={post.heroImage.asset.gatsbyImageData}
          alt={post.heroImage.altText}
          style={{
            marginBottom: '2.5em',
            userSelect: 'none',
          }}
        />
        <TextAreaStyles>
          <PostDateStyles dateTime={post.publishedAt}>
            {postDate}
          </PostDateStyles>
          <PostTitle>{post.title}</PostTitle>
          <PortableText value={post.body} components={textComponents} />
        </TextAreaStyles>
      </PostPageStyles>
    </main>
  );
}
