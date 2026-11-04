import React from 'react';
import { LinkIcon } from '@sanity/icons/Link';

export default {
  title: 'Internal Link',
  name: 'annotationLinkInternal',
  type: 'object',
  icon: LinkIcon,
  components: {
    annotation: (props) => (
      <span>
        <LinkIcon
          style={{
            marginLeft: '0.05em',
            marginRight: '0.1em',
            width: '0.75em',
          }}
        />
        {props.renderDefault(props)}
      </span>
    ),
  },
  fields: [
    {
      name: 'reference',
      type: 'reference',
      to: [{ type: 'category' }, { type: 'post' }, { type: 'work' }],
      options: {
        disableNew: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
