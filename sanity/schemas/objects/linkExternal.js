import { EarthGlobeIcon } from '@sanity/icons';

export default {
  title: 'External Link',
  name: 'linkExternal',
  type: 'object',
  icon: EarthGlobeIcon,
  fields: [
    {
      name: 'linkText',
      title: 'Link text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
    },
    {
      title: 'Open in a new window?',
      name: 'newWindow',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      linkText: 'linkText',
      url: 'url',
    },
    prepare(selection) {
      const { linkText, url } = selection;

      const subtitle = [];
      if (url) {
        subtitle.push(`→ ${url}`);
      }

      return {
        subtitle: subtitle.join(' '),
        title: linkText,
      };
    },
  },
};
