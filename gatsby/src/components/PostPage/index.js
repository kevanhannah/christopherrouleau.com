import React from 'react';
import { PortableText } from '@portabletext/react';
import { format, parseISO } from 'date-fns';
import { GatsbyImage } from 'gatsby-plugin-image';
import textComponents from './textComponents';
import {
  PostDateStyles,
  PostHeaderStyles,
  PostPageStyles,
  PostTitle,
  TextAreaStyles,
} from './Styles';

export default function Post({ post }) {
  const postDate = format(parseISO(post.publishedAt), 'MMMM d, yyyy');

  return (
    <main>
      <PostPageStyles>
        <GatsbyImage
          image={post.heroImage.asset.gatsbyImageData}
          alt={post.heroImage.alt}
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
