import React from 'react';
import { LinkIcon } from '@sanity/icons';

export default {
  title: 'Internal Link',
  name: 'annotationLinkInternal',
  type: 'object',
  blockEditor: {
    icon: LinkIcon,
    render: ({ children }) => (
      <span>
        <LinkIcon
          style={{
            marginLeft: '0.05em',
            marginRight: '0.1em',
            width: '0.75em',
          }}
        />
        {children}
      </span>
    ),
  },
  fields: [
    {
      name: 'reference',
      type: 'reference',
      to: [
        { type: 'category' },
        { type: 'post' },
        { type: 'series' },
        { type: 'work' },
      ],
      options: {
        disableNew: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
