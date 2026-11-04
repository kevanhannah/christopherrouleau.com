import React from 'react';
import { EarthGlobeIcon } from '@sanity/icons/EarthGlobe';

export default {
  title: 'External Link',
  name: 'annotationLinkExternal',
  type: 'object',
  icon: EarthGlobeIcon,
  components: {
    annotation: (props) => (
      <span>
        <EarthGlobeIcon
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
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
    },
    // Open in a new window
    {
      title: 'Open in a new window?',
      name: 'newWindow',
      type: 'boolean',
      initialValue: true,
    },
  ],
};
