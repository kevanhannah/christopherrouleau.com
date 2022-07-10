import { LinkIcon } from '@sanity/icons';

export default {
  title: 'Internal Link',
  name: 'linkInternal',
  type: 'object',
  icon: LinkIcon,
  fields: [
    {
      name: 'linkText',
      title: 'Link text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'reference',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'category' }, { type: 'series' }, { type: 'work' }],
    },
  ],
  preview: {
    select: {
      reference: 'reference',
      referenceName: 'reference.name',
      referenceType: 'reference._type',
    },
    prepare(selection) {
      const { reference, referenceName, referenceType } = selection;

      const subtitle = [];
      if (reference) {
        subtitle.push([`→ ${referenceName}`]);
      }

      return {
        // media: image,
        subtitle: referenceType,
        title: referenceName,
      };
    },
  },
};
