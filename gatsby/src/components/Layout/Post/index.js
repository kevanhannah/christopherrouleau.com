import React from 'react';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import textComponents from './textComponents';
import {
  PostDateStyles,
  PostPageStyles,
  PostTitle,
  TextAreaStyles,
} from './styles';

export default function Post({ post }) {
  const postDate = format(new Date(`${post.publishedAt} EST`), 'MMMM d, yyyy');
  const formattedImage = getImage(post.heroImage.asset.gatsbyImageData);
  return (
    <main>
      <PostPageStyles>
        <GatsbyImage
          image={formattedImage}
          alt={post.heroImage.altText}
          style={{
            marginBottom: '2.5em',
            userSelect: 'none',
          }}
        />
        <TextAreaStyles>
          <PostDateStyles>
            Published <time dateTime={post.publishedAt}>{postDate}</time>
          </PostDateStyles>
          <PostTitle>{post.title}</PostTitle>
          <PortableText value={post.body} components={textComponents} />
        </TextAreaStyles>
      </PostPageStyles>
    </main>
  );
}
