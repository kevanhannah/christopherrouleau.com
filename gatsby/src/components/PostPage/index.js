import React from 'react';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import { GatsbyImage } from 'gatsby-plugin-image';
import textComponents from './textComponents';
import {
  PostDateStyles,
  PostHeaderStyles,
  PostPageStyles,
  PostTitle,
  TextAreaStyles,
} from './PostPageStyles';

export default function Post({ post }) {
  const postDate = format(new Date(`${post.publishedAt}`), 'MMMM d, yyyy');

  return (
    <main>
      <PostPageStyles>
        <GatsbyImage
          image={post.heroImage.asset.gatsbyImageData}
          alt={post.heroImage.altText}
          style={{
            userSelect: 'none',
          }}
        />
        <TextAreaStyles>
          <PostHeaderStyles>
            <PostDateStyles dateTime={post.publishedAt}>
              {postDate}
            </PostDateStyles>
            <PostTitle>{post.title}</PostTitle>
          </PostHeaderStyles>
          <div>
            <PortableText value={post.body} components={textComponents} />
          </div>
        </TextAreaStyles>
      </PostPageStyles>
    </main>
  );
}
